pipeline {
    agent {
        docker {
            image 'node:12.0.0' 
            args '-p 3000:3000 -u root' 
        }
    }
    stages {
        stage (' Install migrate-mongo ') {
            steps {
                sh  'npm install -g migrate-mongo'
                sh  'migrate-mongo --version'
            }
        }
    }
}