pipeline {
    agent {
        docker {
            image 'node:latest'}
    }
    stages {
        stage('npm version') { 
            steps {
                sh  'npm version'
            }
        }
        stage ('Install migrate-mongo'){
            steps {
                sh 'npm install -g migrate-mongo'
                sh 'migrate-mongo --version'
            }
        }
    }
}