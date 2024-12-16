document.getElementById('scrollButton').addEventListener('click', function() {
    const target = document.getElementById("online");
    // Получаем координаты блока относительно окна
    const offsetTop = target.offsetTop;

    // Плавная прокрутка к блоку
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
});