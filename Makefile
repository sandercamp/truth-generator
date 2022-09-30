#!/usr/bin/make

.PHONY: start
install:
	docker-compose run --rm composer update

.PHONY: add
install:
	docker-compose run node --rm yarn add