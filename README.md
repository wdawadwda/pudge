## *BACKEND*:

- ### *Quick start (terminal):*
1. Take a virtual environment: 
- python -m venv venv
2. Activate the environment:
- venv\scripts\activate
3. Install the libraries from requirements.txt:
- pip install -r requirements.txt
2. Create the database and put attrs to settings -> config.ini -> Database
3. Make migrations to the Database
- cd SiteOrder
- python manage.py makemigrations
- python manage.py migrate
4. Run the project
- python manage.py runserver

---
## ***PARTNERS***

- ### *Create New partner POST ^/partners/ (multipart/form-data)*
>{ \
> "name": "txt", \
> "img": file, \
> "text": "txt" \
> }

- ### *Get the partner GET ^/partners/*
- ### *Delete the partner DELETE ^/partners/<int:pk>/*

---
## ***Main Map***

- ### *Create New MainMap POST ^/main-map/ (json)*
>{ \
> "mainMap": "txt", \
> }

- ### *Get the mainMap GET ^/main-map/*

---
## ***GET CLUB NAMES***

- ### *get-clubs/*
---
## ***RESERVATION*** (sending to email)
Headers: Content-Type
- ### *Create Reservation POST ^/reservation/ (multipart/form-data)*
>{\
> "name": text, \
> "phone_number": text, \
> "telegram": text, (optional field)\
> "club": text, \
> "reservation_time": text, \
> "quantity_seats": text, \
> "recipient": email (optional field) \
> }

if club has email in contacts, mail will be sending, or it needed to include key "recipient" with email for sending email

After creating Reservation request mail will be sending to recipient
- ### *Get Reservations ^/reservation/*
---

## ***NEWS***
Headers: Content-Type
- ### *Create News POST ^/news/ (multipart/form-data)*
>{\
> "title": text, \
> "img": file, \
> "text1": text, \
> "text2": text, (optional field)\
> "text3": text, (optional field)\
> }
- ### *GET News ^/news/* - all news
- ### *GET News ^/news/<int:pk>* - one news by id
- ### *GET News ^/news&offset=0&limit=20* - news slice from offset to offset+limit
- ### *GET News ^/news-count/ - return news quantity

- ### *PUT News ^/news/<int:pk> (multipart/form-data)*
>{\
> "title": text, \
> "img": file, \
> "text1": text, \
> "text2": text, (optional field)\
> "text3": text, (optional field)\
> }
- ### *DELETE News ^/news/<int:pk>*
---

## ***GALLERY***
- ### *Create Gallery POST ^/gallery-updated/ (multipart/form-data)*
>{\
> "name": text, \
> "img": file \
> "text": text (optional) \
> }
- ### *GET Gallery ^/gallery-updated/?offset=<int>&limit=<int>club_name=<text>*
- ### *GET Gallery ^/gallery-updated/?id=<int:pk>*

- ### *PUT Gallery ^/gallery-updated/<int:pk>*
>{\
> "name": text, \
> "img": file \
> }
- ### *DELETE Gallery ^/gallery-updated/<int:pk>*
- ### *DELETE all photos by clubName ^/gallery-updated?delete_club_name=text*
---

## ***CLUBS***
- ### *Create Club POST ^/collect_club/*

You must collect one club from different objects (forms) like:

1. club (multipart/form-data)
>{ \
> "club": { \
> "name": text (club_name), \
> "img": file \
> } \
> } 
2. price (json)
> { \
> "name": text (club_name), \
> "price": {object} \
> }
3. contacts (json)
> { \
> "name": text (club_name), \
> "contacts": {object} \
> }
4. computerSpecs (json)
> { \
> "name": text (club_name), \
> "computerSpecs": {object} \
> }
5. quantityComputers (json)
> { \
> "name": text (club_name), \
> "quantityComputers": {object} \
> }

- ### *GET Club ^/collect_club/*

- ### *DELETE Club ^/collect_club/<int:pk>*
---

## ***Registration and authorization***
- ### *Create user ^/auth/users/*
>{\
    "username": "second_user",\
    "email": "omsinfo@yandex.ru",\
    "password": "second22222"\
}
- ### *Activation ^/auth/users/activation/*
>{\
    "uid": "MTk",\
    "token": "bvsym0-97353cdb8c40ba144876a14d1f489fd0"\
}
- ### *Login and get JWT /api/v1/token/*
>{\
    "username": "second_user",\
    "email": "omsinfo@yandex.ru",\
    "password": "second22222"\
}
- ### *Get user data via JWT access ^/auth/users/me/*
>{\
> "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk2ODQ0MDMwLCJpYXQiOjE2OTY4NDM3MzAsImp0aSI6IjMxNDRlMDEwZDM3MzRjNmQ5N2MzNzExNWI2MDdiZjUzIiwidXNlcl9pZCI6MTl9.0ZX3SvB62Qm765tsbY4tsd3FiZ5YGR_ZYpce7aKb5KQ"\
> }
- ### *Get access JWT via refresh ^/api/v1/token/refresh/*
>{\
    "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY5NjkzMDEzMCwiaWF0IjoxNjk2ODQzNzMwLCJqdGkiOiI2NWFhODU2ZjcxMWQ0YTc5YWQ2YjU3YmRiYmEwOWI1ZCIsInVzZXJfaWQiOjE5fQ.tBY3JhoDQqicbQud_zg-Tdy4EO3bFt-Q4zGqTxVLpIU"\
>}

