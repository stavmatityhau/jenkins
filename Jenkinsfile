pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh '''
                mkdir -p dist
                cp -r src/* dist/
                echo "Build completed: files copied to 'dist' directory" 
                '''
            }
        }
        stage('Test'){
            agent{
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps{
                sh '''
                npm install 
                npm test
                '''
            }
            post{
                always{
                    junit 'reports/junit.xml'
                }
            }
        }
    }
}
