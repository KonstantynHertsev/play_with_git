// Функция для генерации случайного цвета в формате HEX
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// Функция для изменения фона на случайный цвет
function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}
// Устанавливаем интервал, чтобы менять фон каждые 2 секунды
setInterval(changeBackgroundColor, 2000);