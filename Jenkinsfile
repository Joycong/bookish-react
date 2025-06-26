pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps { sh 'npm ci' }
        }
        stage('Run Unit Tests') {
            steps { sh 'npm test -- --watchAll=false' }
        }
        stage('Start Servers') {
          steps {
            sh 'nohup npx json-server --watch db.json --port 8081 &'
            sh 'nohup npm start &'
            sh 'sleep 10'
          }
        }
        stage('Run E2E Tests') {
            steps { sh 'npx cypress run' }
        }
    }
}
