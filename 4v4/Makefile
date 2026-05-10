all: build run

build:
	cd .. && \
	docker build -t 4v4:latest -f Dockerfile.allinone .

run:
	cd .. && \
	docker run -d -p 443:443 -ti --rm --name 4v4 4v4:latest

stop:
	docker rm -f 4v4

clean: stop
