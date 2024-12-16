function showService(serviceId) {
    // Скрыть все секции услуг
    const sections = document.querySelectorAll('.service-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Показать выбранную секцию услуг
    document.getElementById(serviceId).style.display = 'block';
}
