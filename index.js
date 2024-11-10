
function showImage(src) {
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlayImage');
    overlayImage.src = src;
    overlay.style.display = 'flex';
}

function hideImage() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

// 实时更新时间的函数
function updateTime() {
    const now = new Date();

    // 获取当前时间和日期
    const hours = String(now.getHours()).padStart(2, '0'); // 补零
    const minutes = String(now.getMinutes()).padStart(2, '0'); // 补零
    const day = now.getDate();
    const month = now.toLocaleString('zh-CN', { month: 'long' }); // 中文月份
    const weekDay = now.toLocaleString('zh-CN', { weekday: 'long' }); // 中文星期

    // 更新HTML中的时间和日期内容
    document.getElementById('currentTime').textContent = `${hours}:${minutes}`;
    document.getElementById('currentDate').textContent = `${month}${day}号 ${weekDay}`;
}

