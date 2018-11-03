DBNAME:=manzi
TESTDBNAME:=test_manzi

migrate/init:
	mysql -u root -h localhost --protocol tcp -e "create database \`$(DBNAME)\`" -p

migrate/test-init:
	mysql -u root -h localhost --protocol tcp -e "create database \`$(TESTDBNAME)\`" -p

docker/build:
	docker-compose build

docker/start:
	docker-compose up -d

docker/logs:
	docker-compose logs

docker/stop:
	docker-compose stop

docker/clean:
	docker-compose rm

web/bash:
	docker-compose exec web bash

db/bash:
	docker-compose exec db bash

php/bash:
	docker-compose exec php bash

composer/install:
	docker-compose exec php composer install
