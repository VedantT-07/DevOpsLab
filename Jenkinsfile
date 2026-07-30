pipeline {

    agent any

    stages {

        stage('Verify Files') {
            steps {
                bat 'dir'
            }
        }

        stage('Validate HTML') {
            steps {
                bat 'echo Validating HTML...'
                // Add HTML validator command here if installed
            }
        }

        stage('Validate CSS') {
            steps {
                bat 'echo Validating CSS...'
                // Add CSS validator command here if installed
            }
        }

        stage('Validate JavaScript') {
            steps {
                bat 'echo Validating JavaScript...'
                // Example if ESLint is installed:
                // bat 'npx eslint script.js'
            }
        }

        stage('Build') {
            steps {
                bat 'echo Build completed successfully!'
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed.'
        }
        success {
            echo 'HTML/CSS/JS project built successfully.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}