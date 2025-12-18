// Данные сотрудников (в реальном приложении это должно быть на сервере)
const employees = {
    'DENISPPP': {
        password: '123456789000',
        name: 'Денис'
    },
    'Den_neg41': {
        password: 'DENISIK335Reg',
        name: 'Денис'
    }
};

// Проверка авторизации при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Если пользователь уже авторизован, перенаправляем на dashboard
    if (localStorage.getItem('isLoggedIn') === 'true') {
        window.location.href = 'dashboard.html';
    }
});

// Обработка формы входа
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    // Проверка учетных данных
    if (employees[username] && employees[username].password === password) {
        // Успешная авторизация
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('currentUser', username);
        localStorage.setItem('userName', employees[username].name);
        localStorage.setItem('loginTime', new Date().toLocaleString('ru-RU'));
        
        // Перенаправление на панель управления
        window.location.href = 'dashboard.html';
    } else {
        // Ошибка авторизации
        errorMessage.textContent = 'Неверный логин или пароль!';
        errorMessage.classList.add('show');
        
        // Очистка полей
        document.getElementById('password').value = '';
        
        // Скрыть сообщение об ошибке через 3 секунды
        setTimeout(() => {
            errorMessage.classList.remove('show');
        }, 3000);
    }
});
