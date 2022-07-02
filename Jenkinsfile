pipeline {
    agent {
        docker {
            image 'node:12.0.0'
        }
    }
    stages {
        stage('Install npm') { 
            steps {
                sh  'npm install'
            }
        }
        stage ('Install migrate-mongo') {
            steps {
                sh  'npm install -g migrate-mongo'
            }
        }
    }
}