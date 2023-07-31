
# Запуск 
    docker-compose up --build

# Пользователи
    Admin {
        name: Admin
        surname: Admin
        patronymic: Admin
        password: 123456789
    }

    TestUser {
        name: Test
        surname: Test
        patronymic: Test
        password: 123456789
    }

# Роуты 
    /home - Функции: выход, создание пользователя
    /statistic - Функции: удаление, измение параметров пользователя
    /metric - Функции: просмотр колличества добавленных пользователей   
    /charts - Функции: график
    /auth - Функции авторизация
    /verify/:linkId - Функции: создание пароля