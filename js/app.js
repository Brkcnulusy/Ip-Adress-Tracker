import { get } from "./request.js";
import { _renderMapInfo } from "./ui.js";

const ipAdressTracking = (function () {
  // Variables

  const USER_URL = 'https://api.ipify.org?format=json';
  const form = document.querySelector(".js-form");
  const formInput = document.querySelector(".js-form-input");
  const mapInfo = document.querySelector(".js-map-info");

  // Event Listeners

  const _eventListeners = function () {
    form.addEventListener("submit", _handleSubmit);
    formInput.addEventListener("input", _handleOnChange);
  };

  // Func


  const _handleOnChange = function () {
    console.log("asfdsg");
  };

  const _handleSubmit = function (e) {
    e.preventDefault();
  };

  const _createDivingPoint = function (map, latitude, longitude) {
    // Use a marker to add dive points
    const diveMarker = L.marker([latitude, longitude]).addTo(
      map
    );
    diveMarker.bindPopup("<b>Dalış Noktası</b><br>İşte burası!");
  };

  const _createMap = function (latitude, longitude) {
    const map = L.map("map").setView(
      [latitude, longitude],
      13
    );
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    _createDivingPoint(map, latitude, longitude);
  };

  const _getUserIp = function () {
    navigator.geolocation.getCurrentPosition(function (position) {
      const userLatitude = position.coords.latitude;
      const userLoongitude = position.coords.longitude;
      _createMap(userLatitude,userLoongitude);
    });
    get(USER_URL).then((datas) => {
      const userIpAdress = datas.ip;
      const BASE_URL = `https://geo.ipify.org/api/v2/country?apiKey=at_wVt9j6juDPPdQsMevmK0UHjj6atkt&ipAddress=${userIpAdress}`;
      _getData(BASE_URL);
    });
  };

  const _getData = function (url) {
    get(url).then((datas) => {
      _renderMapInfo(mapInfo, datas);
    });
  };

  return {
    init: function () {
      _eventListeners();
      _getUserIp();
    },
  };
})();

document.addEventListener("DOMContentLoaded", function () {
  ipAdressTracking.init();
});
