pipeline {
    agent {
        docker {
            image 'node:12.0.0'
            args '-p 3000:3000 -u root'
        }
    }
    stages {
        stage('Install npm') { 
            steps {
               // sh  'npm install'
            }
        }
        stage ('Install migrate mongo') {
            steps {
                sh  'npm install -g migrate-mongo'
            }
        }
        stage ('migrate mongo status') {
            steps {
                sh  'migrate-mongo status'
            }
        }
    }
}


node:12.0.0