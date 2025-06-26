pipeline {
  agent any  // 모든 가능 에이전트에서 실행 (기본 설정)

  stages {

    // 📦 1단계: 의존성 설치 (package.json 기반)
    stage('Install dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    // ✅ 2단계: 단위 테스트 (Jest 등)
    stage('Run Unit Tests') {
      steps {
        sh 'npm test -- --watchAll=false'
      }
    }

    // 🚀 3단계: 서버 실행 (백엔드와 프론트엔드)
    stage('Start Servers') {
      steps {
        // 백엔드: server.js (API 서버, 포트 8081 사용 중)
        sh 'nohup node server.js &'

        // 프론트엔드: React 앱 (포트 3000, 프록시 설정 있음)
        sh 'nohup npm start &'

        // 두 서버가 완전히 실행될 시간 확보
        sh 'sleep 10'
      }
    }

    // 🔍 4단계: E2E 테스트 실행 (Cypress)
    stage('Run E2E Tests') {
      steps {
        sh 'npx cypress run'
      }
    }
  }
}
