open "http://localhost:$(kubectl get --namespace devops -o jsonpath="{.spec.ports[0].nodePort}" services my-jenkins-01)"

helm install my-jenkins-01 --set Persistence.ExistingClaim=jenkins --set service.type=NodePort --set service.nodePort=30808 --namespace devops jenkins/jenkins

## Documentação 

https://minikube.sigs.k8s.io/docs/start/

## Install minikube

apt-get install -y conntrack

curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64

sudo install minikube-linux-amd64 /usr/local/bin/minikube

## Iniciar minikube

minikube start

minikube status

## Alias kubectl to alias minikube

alias kubectl="minikube kubectl --"

## Dashoboar minikube dashboard

minikube dashboard

## pré instalação jenkins

https://blog.gitguardian.com/how-to-setup-jenkins-with-gitguardian-kubernetes/

https://www.jenkins.io/doc/book/installing/kubernetes/

kubectl create namespace jenkins

kubectl apply -f 01-jenkins-volume.yaml

minikube ssh
sudo chown -R 1000:1000 /data/jenkins-volume

kubectl apply -f 02-jenkins-sa.yaml

## Instalação

chart=jenkinsci/jenkins

helm install jenkins -n jenkins -f 03-jenkins-values.yaml $chart

# Após a instalação, para obter a senha padrão do usuário administrador do Jenkins, execute:

jsonpath="{.data.jenkins-admin-password}"
secret=$(kubectl get secret -n jenkins jenkins -o jsonpath=$jsonpath)
echo $(echo $secret | base64 --decode)

dpbqx3YWHb5sLHm3omf4RC

# Para fazer login, vamos primeiro encaminhar o serviço Jenkins para nosso localhost:

kubectl --namespace jenkins port-forward svc/jenkins 8080:8080

# E agora você pode abrir uma guia do navegador e fazer login visitando
http://localhost:8080/login com o usuário admin.