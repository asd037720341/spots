document.addEventListener('DOMContentLoaded', () => {  

    // 主要參考文件：https://leafletjs.com/examples/quick-start/
  
    let center = [24.9983469, 121.5810358]; // 預設中心點為台北市動物園
  
    // 跟使用者要位置
    // 使用者同意給位置，center 設為使用者座標
    function successGPS(position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      center = [lat, lng];
      triggerLeaflet()
    };
    function errorGPS() {
      window.alert('無法判斷您的所在位置，無法使用此功能。預設地點將為 台北市動物園');
      triggerLeaflet()
    }
  
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successGPS, errorGPS);
    } else {
      window.alert('您的裝置不具備GPS，無法使用此功能');
      triggerLeaflet()
    }
  
    function googleToLeaflet(latlng) {
      var lat = latlng.lat;
      var lng = latlng.lng;
      var x = lng;
      var y = Math.log(Math.tan((90 + lat) * Math.PI / 360)) / (Math.PI / 180);
      y = y * 20037508.34 / 180;
      return L.point(x, y);
    }
    
    // 執行 Leaflet
    function triggerLeaflet() {
  
      // *** 放置地圖
      let zoom = 11; // 0-18
      let map = L.map('map').setView(center, zoom);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap', // 商用時必須要有版權出處
        zoomControl: true , // 是否秀出 - + 按鈕
      }).addTo(map);
      map.setMaxZoom(16); // 設置最大縮放等級
      map.setMinZoom(9); // 設置最小縮放等級
  
      // 設定地圖最大邊界範圍
      const southWest = L.latLng(21.5, 119); // 最南西角的座標
      const northEast = L.latLng(25.5, 123); // 最北東角的座標
      const bounds = L.latLngBounds(southWest, northEast);
      map.setMaxBounds(bounds);
  
      // 如果地圖超出範圍，使用動畫回到範圍內
      map.on('drag', function() {
          map.panInsideBounds(bounds, { animate: false });
      });
      map.on('dragend', function() {
          map.panInsideBounds(bounds, { animate: true });
      });
  
      // *** 放置標記 + 客製標記
      // 客製標記 https://leafletjs.com/reference-1.7.1.html#icon
      const customIcon = L.icon({
        iconUrl: 'https://cdn4.iconfinder.com/data/icons/universal-7/614/17_-_Location-256.png',
        iconSize: [42, 42],
      });
      const marker = L.marker(center, {
        icon: customIcon,
        title: '跟 <a> 的 title 一樣', // 跟 <a> 的 title 一樣
        opacity: 1.0
      }).addTo(map);
  
      
      
      
  
      // 使用 signData 變數來存取 JSON 數據
      console.log(signData); // 這將會在開發者工具中的控制台中顯示資料
  
      // 在地圖上放置標記
      for (let i = 0; i < signData.length; i++) {
        let sign = signData[i];
        console.log("簽名 ID：" + sign.sign_id);
        console.log("簽名名稱：" + sign.sign_name);
        console.log("簽名介紹：" + sign.sign_introduce);
        console.log("簽名故事：" + sign.sign_story);
        console.log("緯度：" + sign.sign_lati);
        console.log("經度：" + sign.sign_longi);
        console.log("圖片：" + sign.sign_image);
    
        // 在地圖上放置標記，並指定標記圖案大小
        const customIcon = L.icon({
          iconUrl: 'http://localhost/%E5%8F%A4%E8%B9%9F.png', // 替換成實際的圖片路徑
          iconSize: [42, 42],
      });
      
      L.marker([sign.sign_lati, sign.sign_longi], { icon: customIcon }).addTo(map)
          .bindPopup('<div style="font-size: 16px;"><b>' + sign.sign_name + '</b><br>' + 
          '<img src="' + sign.sign_image + '" alt="簽名圖片" style="max-width: 100%;"><br>' +
          '<span style="font-size: 14px;">介紹: ' + sign.sign_introduce + '</span><br>' +
          '<textarea rows="10" cols="35" style="font-size: 14px; resize: none;">' + sign.sign_story + '</textarea></div>');
                  }
    
    
      // zoom in, zoom out
      zoomIn(map);
      zoomOut(map);
    }
  
    // zoom in
    function zoomIn(map) {
      const btnZoom = document.getElementById('zoom-in');
      btnZoom.addEventListener('click', e => {
        e.preventDefault();
        map.zoomIn(0);
      })
    }
  
    // zoom out
    function zoomOut(map) {
      const btnZoom = document.getElementById('zoom-out');
      btnZoom.addEventListener('click', e => {
        e.preventDefault();
        map.zoomOut(0);
      })
    }
  
  });