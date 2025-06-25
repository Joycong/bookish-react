pipeline {
    // 기본 Jenkins 실행 환경 (Docker CLI 접근 가능한 컨테이너)
    agent any

    stages {
        // 공통: 의존성 설치 단계
        stage('Install dependencies') {
            steps {
                script {
                    docker.image('cypress/included:13.7.3').inside {
                        sh 'npm install'
                    }
                }
            }
        }

        // ✅ 단위 테스트 단계 (Jest 기반)
        stage('Unit Test') {
            steps {
                script {
                    docker.image('cypress/included:13.7.3').inside {
                        sh 'npm test -- --watchAll=false'
                    }
                }
            }
        }

        // ✅ E2E 테스트 단계 (Cypress 실행)
        stage('E2E Test') {
            steps {
                script {
                    docker.image('cypress/included:13.7.3').inside {
                        sh 'npx cypress run'
                        // sh 'npm run e2e'로 실행 가능 (스크립트 정의되어 있다면)
                    }
                }
            }
        }
    }
}
