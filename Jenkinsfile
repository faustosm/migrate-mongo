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
                sh 'export MONGODB_USER=mongodevportopag'
                sh 'export MONGODB_PASS=GQrlZhN94xgZaNkv'
                sh 'export MONGODB_HOST=devclmeiospagamento-pl-0.mzlfw.mongodb.net'
                sh 'export MONGODB_DATABASE=meiospagamento'
                
                sh  'npm install -g migrate-mongo'
                sh  'migrate-mongo --version'
                sh  'migrate-mongo status'
            }
        }
    }
}
