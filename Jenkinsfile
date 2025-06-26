pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps { sh 'npm ci' }
        }
        stage('Run Unit Tests') {
            steps { sh 'npm test -- --watchAll=false' }
        }
        stage('Start Server') {
            steps {
                sh 'nohup node server.js &'
                sh 'sleep 3'
            }
        }
        stage('Run E2E Tests') {
            steps { sh 'npx cypress run' }
        }
    }
}
