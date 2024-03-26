import { get } from "./request.js";
import { _renderMapInfo } from "./ui.js";
import { _validateIP } from "./validate.js";

const ipAdressTracking = (function () {
  // Variables

  // const USER_URL = 'https://api.ipify.org?format=json';
  const DEFAULT_URL = "https://geo.ipify.org/api/v2/country?apiKey=at_wVt9j6juDPPdQsMevmK0UHjj6atkt&ipAddress=192.212.174.101";
  const form = document.querySelector(".js-form");
  const formInput = document.querySelector(".js-form-input");
  const mapInfo = document.querySelector(".js-map-info");
  const errorMessage = document.querySelector('.js-error-message');
  const defaultIp = '192.212.174.101';

  // Event Listeners

  const _eventListeners = function () {
    form.addEventListener("submit", _handleSubmit);
  };

  // Func

  const _closeErrorMessage = function () {
    errorMessage.classList.remove('active');
  }

  const _handleSubmit = function (e) {
    e.preventDefault();
    const ipAddress = formInput.value.trim();
    
    if (!_validateIP(ipAddress)) {
        alert('Invalid IP Address')
        return false;
    }

    const BASE_URL = `https://geo.ipify.org/api/v2/country?apiKey=at_wVt9j6juDPPdQsMevmK0UHjj6atkt&ipAddress=${ipAddress}`;
    _getData(BASE_URL);
    _getLocationData(ipAddress);
    
    return true;
  };

  const _createDivingPoint = function (map, latitude, longitude) {
    // Use a marker to add dive points
    const diveMarker = L.marker([latitude, longitude]).addTo(
      map
    );
    diveMarker.bindPopup("<b>Dalış Noktası</b><br>İşte burası!");
  };

  const _createMap = function (latitude, longitude) {
    const mapElement = document.getElementById('map');
    
    // First check if the map object already exists
    if (window.mapInstance) {
        window.mapInstance.remove(); // Remove previous map
    }

    // Create the new map object
    window.mapInstance = L.map(mapElement).setView(
        [latitude, longitude],
        13
    );

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(window.mapInstance);

    _createDivingPoint(window.mapInstance, latitude, longitude);
};

  // const _getUserIp = function () {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     const userLatitude = position.coords.latitude;
  //     const userLoongitude = position.coords.longitude;
  //     _createMap(userLatitude,userLoongitude);
  //   });
  //   get(USER_URL).then((datas) => {
  //     const userIpAdress = datas.ip;
  //     const BASE_URL = `https://geo.ipify.org/api/v2/country?apiKey=at_wVt9j6juDPPdQsMevmK0UHjj6atkt&ipAddress=${userIpAdress}`;
  //     _getData(BASE_URL);
  //   });
  // };

  const _getLocationData = function (userIP) {
    get(`https://ipapi.co/${userIP}/json/`).then((datas) => {
      const userLatitude = datas.latitude;
      const userLongitude = datas.longitude;
      _createMap(userLatitude, userLongitude);
    });
  }

  const _getData = function (url) {
    get(url).then((datas) => {
      _renderMapInfo(mapInfo, datas);
    });
  };

  return {
    init: function () {
      _eventListeners();
      // _getUserIp();
      _getLocationData(defaultIp);
      _getData(DEFAULT_URL);
    },
  };
})();

document.addEventListener("DOMContentLoaded", function () {
  ipAdressTracking.init();
});
