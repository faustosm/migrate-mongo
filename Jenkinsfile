pipeline {
    agent {
        docker {
            image 'node:10.0.0' 
            args '-p 3000:3000 -u root ' 
        }
    }
    stages {
        stage('Install npm') { 
            steps {
                sh  'npm install'
            }
        }
        stage (' Install migrate-mongo ') {
            steps {
                sh  'npm install -g migrate-mongo'
                sh  'npm version' 
            }
        }
        stage (' TELNET MongoDB ') {
            steps {
                sh 'apt-get update -y'
                sh'apt-get install telnet -y'
                sh  'telnet 172.17.0.3 27017'
            }
        }            
    }
}