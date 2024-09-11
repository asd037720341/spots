<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>社區營造平台</title>
    <!-- 引入 Leaflet CSS 檔案 -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin=""/>
    <!-- 引入 Leaflet JavaScript 檔案 -->
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NO4Q9aazJ8xgYwipf3VRyL3ztkv1KzOOvxdJlJd3MhepV/iG9w==" crossorigin=""></script>
    <style>
        #map {
            height: 800px;
            width: 100%;
            position: relative; /* 讓地圖容器成為相對定位的父元素 */
            z-index: 0;
        }
        .user-management {
            position: absolute;
            top: 20px;
            right: 20px; /* 調整按鈕位置 */
            z-index: 1000; /* 確保按鈕位於地圖上層 */
            cursor: pointer; /* 添加鼠標指針 */
        }
        .achieve-button {
            position: absolute;
            top: 120px; /* 調整按鈕位置 */
            right: 20px; /* 調整按鈕位置 */
            z-index: 1000; /* 確保按鈕位於地圖上層 */
            cursor: pointer; /* 添加鼠標指針 */
        }

        .achieve-button img, .user-management img {
            width: 60px; /* 調整圖示大小 */
            height: 60px; /* 調整圖示大小 */
            background-color: transparent; /* 去掉黑底 */
        }
    </style>
</head>
<body>
    <!-- 在這裡放置地圖容器 -->
    <div id="map">
        <!-- 使用者帳號管理圖像按鈕 -->
        <div class="user-management"><img src="user.png" alt="使用者帳號管理"></div>
        <!-- 成就按鈕 -->
        <div class="achieve-button"><img src="achieve.png" alt="成就"></div>
    </div>

    <?php
    $servername = "localhost";
    $db_username = "root";
    $db_password = "";
    $dbname = "pmsad";

    $conn = new mysqli($servername, $db_username, $db_password, $dbname);
    if ($conn->connect_error) {
        die("連接資料庫失敗：" . $conn->connect_error);
    }
    $conn->set_charset("utf8");

    $sql = "SELECT sign_id, sign_name, sign_introduce, sign_story, sign_lati, sign_longi, sign_image FROM sign";
    $result = $conn->query($sql);

    // 將資料轉換為關聯數組
    $data = [];
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    // 將資料轉換為JSON格式
    $jsonData = json_encode($data);
    
    // 在JavaScript中定義一個變數並將JSON數據賦值給它
    echo "<script>var signData = $jsonData;</script>";

    $conn->close();
    ?>

    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <script src="main.js"></script>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // 獲取按鈕元素
            const userManagementBtn = document.querySelector('.user-management');
            const achieveBtn = document.querySelector('.achieve-button');

            // 添加點擊事件監聽器
            userManagementBtn.addEventListener('click', function() {
                // 點擊後導向到 person.php
                window.location.href = 'person.php';
            });

            achieveBtn.addEventListener('click', function() {
                // 在此處添加顯示成就介面的代碼
                // 您可以添加顯示成就介面的代碼
            });
        });
    </script>
</body>
</html>
