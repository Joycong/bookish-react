pipeline {
    // Docker 환경 지정 (Cypress + Node 포함된 이미지 사용)
    agent {
        docker {
            image 'cypress/included:13.7.3'
        }
    }

    stages {
        // 공통: 의존성 설치 단계
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        // ✅ 단위 테스트 단계 (Jest 기반)
        stage('Unit Test') {
            steps {
                sh 'npm test -- --watchAll=false'
            }
        }

        // ✅ E2E 테스트 단계 (Cypress 실행)
        stage('E2E Test') {
            steps {
                sh 'npx cypress run'
                // 또는 sh 'npm run e2e' 로 실행 가능 (스크립트 정의되어 있다면)
            }
        }
    }
}
