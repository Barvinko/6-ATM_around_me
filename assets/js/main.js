(async function () {
    URL = `https://filebase.xyz/pbatm/`
    let data = await fetch(URL);
    data = await data.json();
    let ATM = data.devices;
    console.log(data);
    console.log(ATM);

    let nav = navigator.geolocation.getCurrentPosition(function (pos) {
        console.log(pos);

        let from = new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude);

        
        for (let i = 0; i < ATM.length; i++) {
            let to = new google.maps.LatLng(+ATM[i].longitude,+ATM[i].latitude);
            ATM[i].distance = Math.floor(google.maps.geometry.spherical.computeDistanceBetween(from,to));
            console.log(ATM[i]);
        }

        ATM.sort((a,b)=> a.distance - b.distance);
        console.log(ATM);
        let top5 = ATM.slice(0,5);
        console.log(top5);

        mapPlace.src = `https://image.maps.api.here.com/mia/1.6/mapview?app_id=oZmMWRV4tAjQmgkxBvF0&app_code=x5pKHqifhw1mnS_zBTIFsA&z=14&w=600&h=600&c=${pos.coords.latitude},${pos.coords.longitude}&c1=48.448978,35.028915`
        
        // let from2 = new google.maps.LatLng(48.446095199999995,35.0412144999999);
        // let to = new google.maps.LatLng(34.999313,48.390745);
        // let distance = Math.floor(google.maps.geometry.spherical.computeDistanceBetween(from,to));
        // console.log(distance);

        
    },function (error) {
        console.log(error); 
    })
 })()

// cityEN: "Dnipro"
// cityRU: "Днепр"
// cityUA: "Дніпро"
// distance: 1857218
// fullAddressEn: "Ukraine,area Dnipropetrovska,city Dnipro,avenue Bohdana Khmelnytskoho,building 156"
// fullAddressRu: "Украина,область Днепропетровская,город Днепр,проспект Богдана Хмельницкого,дом 156"
// fullAddressUa: "Україна,область Дніпропетровська,місто Дніпро,проспект Богдана Хмельницького,будинок 156"
// latitude: "34.999313"
// longitude: "48.390745"
// placeRu: ""Авторынок""
// placeUa: ""Авторинок""