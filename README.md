### Run

```bash
docker-compose build

docker-compose run api sh -c "django-admin.py startproject app ."

docker-compose run api sh -c "python manage.py test"

docker-compose run api sh -c "python manage.py test && flake8"

docker-compose run api sh -c "python manage.py startapp core"

docker-compose run api sh -c "python manage.py makemigrations core"

docker-compose run api sh -c "python manage.py createsuperuser"

docker-compose run --rm api sh -c "python manage.py startapp user"

docker-compose run --rm api sh -c "python manage.py startapp recipe"

docker-compose run api sh -c "python manage.py makemigrations"

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


### Docker provides a single command that will clean up any resources — images, containers, volumes, and networks — that are dangling (not associated with a container):
```
docker system prune
```

### To additionally remove any stopped containers and all unused images (not just dangling images), add the -a flag to the command:
```
docker system prune -a
```