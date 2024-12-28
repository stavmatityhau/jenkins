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
    }
}
