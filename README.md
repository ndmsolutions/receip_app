### Run

```bash
docker-compose build

docker-compose run app sh -c "django-admin.py startproject app ."

docker-compose run app sh -c "python manage.py test"

docker-compose run app sh -c "python manage.py test && flake8"

docker-compose run app sh -c "python manage.py startapp core"

docker-compose run app sh -c "python manage.py makemigrations core"

docker-compose run app sh -c "python manage.py createsuperuser"

docker-compose run --rm app sh -c "python manage.py startapp user"

# To start and test Up run:
docker-compose up

```

fix code syntax 

```bash
autopep8 --select=W293 --in-place filename.py
```

=======
# receip_app
>>>>>>> 683431355ccd4dee468a8cab1dd36e800e3e40cb
