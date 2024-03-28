# Ip Adresi Izleyici
- Bu projede amacım kullanıcının ip adresini alıp, aldığımız ip adresi ile apiye istek atıp, kullanıcının enlem ve boylamını buluyordum. Sonra bu bulduğum enlem ve boylamı haritada zoom yapıp bir dalış noktası yaratıyordum. Bunu yapmıştım fakat entropi sırrı açığa çıktığı için bundan vazgeçtim ve rastgele bir ip adresine istek atıp ordaki konum bilgilerini zoom yaptım. Sayfa içerisindeki arama butonuna kendinizin veya başkasının ip adresini girerek, girdiğiniz ip adresinin işaret ettiği konumu görebilirsiniz.

### Ekran Görüntüsü

![Ekran Görüntüsü](./assets/images/Ekran%20Alıntısı.PNG)

### Links
- Site Url'i: [Ip-Address-Tracker](https://ip-adress-tracker-507osrce0-burak-can-s-projects.vercel.app/)

### Meydan okuma

Kullanıcılar şunları yapabilmelidir:

- Cihazlarının ekran boyutuna bağlı olarak her sayfa için en uygun düzeni görüntüleyebilmeli
- Sayfadaki tüm etkileşimli öğeler için fareyle üzerine gelme durumlarını görün
- İlk sayfa yüklemesinde harita üzerinde kendi IP adreslerini görmeleri
- Herhangi bir IP adresini veya etki alanını arayın ve anahtar bilgileri ve konumu görün.

### Genel Bakış
- Javascript kodları ifee fonksiyonları içine yazılmıştır. Sonrada ekleme yada geliştirme yapacak kişiler dikkat etmelidir.
- Responsive tasarımı mevcut olup farklı cihazlarda da görüntü bozulmamaktadır.
- Css kodları scss şeklinde yazılmıştır. Ekleme yada geliştirme yapacak kişi style.scss dosyasını compile etmelidir.
- Js ve CSS kodları modüler olarak yazılmıştır.

### Ne Öğrendim

- Daha önce hiç harita kullanmamıştım. Bu uygulamada leaflet.js kütüphanesi ile harita yaptım ve bir dalış noktası ekledim.

```js
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

const _createDivingPoint = function (map, latitude, longitude) {
    // Use a marker to add dive points
    const diveMarker = L.marker([latitude, longitude]).addTo(
      map
    );
    diveMarker.bindPopup("<b>Dalış Noktası</b><br>İşte burası!");
  };
```


### İle İnşa Edilmiştir

- HTML5
- CSS
- Flexbox
- SCSS
- Mobil Tasarım 
- JavaScript

## Kurulum

1. Projeyi Kopyalayın
İlk olarak, projeyi yerel bilgisayarınıza kopyalamk için GitHub'dan klonlayın:
```bash
git clone https://github.com/Brkcnulusy/Ip-Adress-Tracker
cd Ip-Adress-Tracker
```
2. Bağımlılıkları Yükleyin
Herhangi bir Bağlılığı bulunmamaktır. Projece vanilya.js ile yazılmıştır.

3. Uygulamayı Çalıştırın
Eğer Live Server uzantısı yüklü ise html dosyasına sağ tıklayıp ilk seçenek olan Live Server ile Açın seçeneğine tıklayıp açabilirsiniz.
Live Server uzantısına sahip değilseniz terminale npm run dev yazarak ve Tarayıcınızda http://localhost:3000 adresine giderek uygulamayı kullanmaya başlayabilirsiniz.

## Yazar

- Website - [Burak Can Ulusoy](https://mavifloravakfi.com/)
- LinkedIn - [@Brkcnulusy](https://www.linkedin.com/in/burak-can-ulusoy-375120272/)
- GitHub - [@Burakcnulusy](https://github.com/Brkcnulusy/)
- E-Mail - [brkcnulusy@gmail.com] 

## Teşekkür

Bu projeyi frontend mentor adlı sitede gördüm ve yapmaya karar verdim. Site proje için gerekli olan tasarım resimleri ve sitede kullanmam gereken image dosyalarını benimle paylaştı. Frontend Mentor Ekibine teşekkür ederim.
