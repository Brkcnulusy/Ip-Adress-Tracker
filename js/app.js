   import { get } from './request.js';
   var map = L.map("map").setView([41.93529421846401, 34.59073936653532], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);


    // Dalış noktalarını eklemek için bir marker kullanın
    var diveMarker = L.marker([41.93529421846401, 34.59073936653532]).addTo(map);
    diveMarker.bindPopup("<b>Dalış Noktası</b><br>İşte burası!");

    function getProduct () {
        get('https://geo.ipify.org/api/v2/country?apiKey=at_wVt9j6juDPPdQsMevmK0UHjj6atkt&ipAddress=8.8.8.8').then((datas) => {
            console.log(datas);
        })
    }

    getProduct();