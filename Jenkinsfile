pipeline {
  agent any

  stages {
    stage('Cypress in Docker') {
      steps {
        script {
          docker.image('cypress/included:13.7.3').inside {
            sh 'npm ci'
            sh 'npm test -- --watchAll=false'
            sh 'nohup node server.js &'
            sh 'sleep 3'
            sh 'npx cypress run'
          }
        }
      }
    }
  }
}
