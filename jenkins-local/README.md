# Docker local

https://medium.com/qaninja/rodando-o-jenkins-em-um-container-docker-4772986eb801

docker network create jenkins

docker volume create jenkins-data

docker pull jenkinsci/blueocean

docker container run --name jenkinsci3 --detach \
  --network jenkins -u root \
  --volume jenkins-data:/var/jenkins_home \
  --volume /var/run/docker.sock:/var/run/docker.sock \
  --publish 8080:8080 --publish 50000:50000 jenkinsci/blueocean

docker exec -it jenkinsci3 bash

cat /var/jenkins_home/secrets/initialAdminPassword


http://localhost:8080/