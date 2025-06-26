pipeline {
    // ✅ 전체 파이프라인은 Docker 컨테이너 내부에서 실행
    agent {
        docker {
            // Cypress가 포함된 공식 이미지 사용 (Node.js 포함)
            image 'cypress/included:13.7.3'
        }
    }

    stages {
        // 📦 1단계: 프로젝트 의존성 설치
        stage('Install dependencies') {
            steps {
                // package-lock.json 기준으로 의존성 설치
                sh 'npm ci'
            }
        }

        // 🧪 2단계: 단위 테스트 실행 (Jest 기반)
        stage('Run Unit Tests') {
            steps {
                // --watchAll=false: 지속 실행 방지 (CI 환경에서는 필수)
                sh 'npm test -- --watchAll=false'
            }
        }

        // 🚀 3단계: JSON 서버 실행 (E2E 테스트를 위한 Stub API)
        stage('Start Stub Server') {
            steps {
                // server.js를 백그라운드에서 실행
                sh 'nohup node server.js &'
                // 서버가 뜰 시간을 확보 (보통 2~3초면 충분)
                sh 'sleep 3'
            }
        }

        // 🧪 4단계: E2E 테스트 실행 (Cypress)
        stage('Run E2E Tests') {
            steps {
                // Cypress 테스트 실행 (cypress/included 이미지 안에 내장되어 있음)
                sh 'npx cypress run'
            }
        }
    }
}
