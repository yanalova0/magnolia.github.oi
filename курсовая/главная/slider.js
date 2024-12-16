let currentIndex = 0;

function slide(direction) {
    const reviews = document.querySelectorAll('.review');
    const totalReviews = reviews.length;

    // Обновление текущего индекса
    currentIndex += direction;

    // Циклическая прокрутка индексов
    if (currentIndex < 0) {
        currentIndex = totalReviews - 1;
    } else if (currentIndex >= totalReviews) {
        currentIndex = 0;
    }

    // Вычисление смещения
    const offset = -currentIndex * (100 / totalReviews);

    // Применение трансформации
    document.querySelector('.slider-track').style.transform = `translateX(${offset}%)`;
}

/*let currentIndex = 0;

function slide(direction) {
    const sliderTrack = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.review');
    const slideWidth = slides[0].offsetWidth + 20; // Убедитесь, что здесь учтены все отступы

    currentIndex += direction;

    // Обработка переполнения индекса
    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    // Изменение позиции трека слайдера
    sliderTrack.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
*/