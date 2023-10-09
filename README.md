## Установка

### Установка зависимостей

> Перед началом убедитесь, что используете правильную версию Node (`node -v`).<br/>
> Можете использовать [nvm](https://github.com/nvm-sh/nvm), чтобы изменить версию на указанную в файле `.nvmrc`.<br/> > [Сравнение менеджеров версий Node](https://www.honeybadger.io/blog/node-environment-managers/)

- Run command `npm ci`

## Команды

| Command           | Description                                                                         |
| ----------------- | ----------------------------------------------------------------------------------- |
| `npm run start`   | Запуск приложения в режиме разработки.                                              |
| `npm run build`   | Сборка приложения.                                                                  |
| `npm run preview` | Запуск локального сервера для тестирование собранного приложения.                   |
| `npm run lint`    | Запуск проверок качества кода и форматирования.                                     |
| `npm run format`  | Запуск проверок качества кода и форматирования + автоматическое исправление ошибок. |

## Материалы

- [Официальная документация](https://react.dev/)
- [Typescript в React](https://blog.logrocket.com/your-reference-guide-to-using-typescript-in-react/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/advanced/types_react_api)
- [Synthetic Event](https://react.dev/reference/react-dom/components/common#react-event-object)
- [Rendering in React](https://ui.dev/why-react-renders)
- [Управление состоянием](https://habr.com/ru/post/507572/)
- [React Hooks простыми словами](https://habr.com/ru/company/simbirsoft/blog/652321/)


## Backend:

### Quick start (terminal):

1. Install the libraries from requirements.txt:
- cd _backend
- pip install -r requirements.txt
2. Create the database and put attrs to settings
3. Make migrations to the Database
- cd SiteOrder
- python manage.py migrate
4. Run the project
- python manage.py runserver

### Registration and authorization
- Create user ^/auth/users/
>{\
    "username": "second_user",\
    "email": "omsinfo@yandex.ru",\
    "password": "second22222"\
}
- Activation ^/auth/users/activation/
>{\
    "uid": "MTk",\
    "token": "bvsym0-97353cdb8c40ba144876a14d1f489fd0"\
}
- Login and get JWT
>{\
    "username": "second_user",\
    "email": "omsinfo@yandex.ru",\
    "password": "second22222"\
}
- Get user data via JWT access ^/auth/users/me/
>{\
> "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk2ODQ0MDMwLCJpYXQiOjE2OTY4NDM3MzAsImp0aSI6IjMxNDRlMDEwZDM3MzRjNmQ5N2MzNzExNWI2MDdiZjUzIiwidXNlcl9pZCI6MTl9.0ZX3SvB62Qm765tsbY4tsd3FiZ5YGR_ZYpce7aKb5KQ"\
> }
- Get access JWT via refresh ^/api/v1/token/refresh/
>{\
    "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5NjkzMDEzMCwiaWF0IjoxNjk2ODQzNzMwLCJqdGkiOiI2NWFhODU2ZjcxMWQ0YTc5YWQ2YjU3YmRiYmEwOWI1ZCIsInVzZXJfaWQiOjE5fQ.tBY3JhoDQqicbQud_zg-Tdy4EO3bFt-Q4zGqTxVLpIU"\
}
