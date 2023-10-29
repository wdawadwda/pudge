## Backend:

### Quick start (terminal):

1. Install the libraries from requirements.txt:
- pip install -r requirements.txt
2. Create the database and put attrs to settings
3. Make migrations to the Database
- cd SiteOrder
- python manage.py makemigrations
- python manage.py migrate
4. Run the project
- python manage.py runserver

### CRUD club object
- Create POST ^/clubs/
  (multipart/form-data)
>{\
    "name": ..., \
    "map": ..., \
    "img": ..., \
    "contacts": ..., \
    "priceData": ..., \
    "computerSpecs": ..., \
    "quantityСomputers": ..., \
} \
return {"message": "..."}

- Get full json GET ^/clubs/
- Update PUT ^/clubs/<pk:int>
  (multipart/form-data)

>{\
    "name": ..., \
    "map": ..., \
    "img": ..., \
    "contacts": ..., \
    "priceData": ..., \
    "computerSpecs": ..., \
    "quantityСomputers": ..., \
} \
return changed json object
- Delete club DELETE ^/clubs/<pk:int>

-----------------------------------------------
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
- Login and get JWT /api/v1/token/
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
>}

