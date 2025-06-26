pipeline {
  agent any  // Jenkins 기본 실행 노드 사용

  stages {

    // 1️⃣ 의존성 설치
    stage('Install dependencies') {
      steps {
        sh 'npm ci'
      }
    }

    // 2️⃣ 단위 테스트 실행 (Jest 등)
    stage('Run Unit Tests') {
      steps {
        sh 'npm test -- --watchAll=false'
      }
    }

    // 3️⃣ E2E 테스트 (서버 실행 + 대기 + Cypress 실행 자동화)
    stage('Run E2E Tests') {
      steps {
        sh 'npm run e2e'  // 🚀 dev → 포트 대기 → test:e2e 자동 실행
      }
    }
  }
}
