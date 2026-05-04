// Простая функция приветствия при загрузке
document.addEventListener('DOMContentLoaded', () => {
    console.log("Добро пожаловать в мир Fenty Beauty!");
});

// Анимация для кнопок (можно расширить)
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = '#c4a484';
    });
    button.addEventListener('mouseout', () => {
        button.style.backgroundColor = '#000';
    });
});





// https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000