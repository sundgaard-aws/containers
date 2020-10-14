sudo docker container ls -a
sudo docker images ls
sudo docker rmi 111
sudo docker rm 111

sudo docker build --rm --tag os-monitor --file ./Dockerfile .

# Links
https://docs.docker.com/develop/develop-images/dockerfile_best-practices/