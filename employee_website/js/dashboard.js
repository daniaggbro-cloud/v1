// Проверка авторизации при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Если пользователь не авторизован, перенаправляем на страницу входа
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'login.html';
        return;
    }
    
    // Отображение информации о пользователе
    const userName = localStorage.getItem('userName') || 'Пользователь';
    const userLogin = localStorage.getItem('currentUser') || '';
    const loginTime = localStorage.getItem('loginTime') || new Date().toLocaleString('ru-RU');
    
    document.getElementById('userName').textContent = userName;
    document.getElementById('userLogin').textContent = userLogin;
    document.getElementById('loginTime').textContent = loginTime;
});

// Обработка выхода
document.getElementById('logoutBtn').addEventListener('click', function() {
    // Очистка данных авторизации
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userName');
    localStorage.removeItem('loginTime');
    
    // Перенаправление на страницу входа
    window.location.href = 'login.html';
});
