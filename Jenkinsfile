/* groovylint-disable CompileStatic */

pipeline {
    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Echo 1') {
            steps {
                sh 'echo "Hello world"'
            }
        }
        stage('Echo 2') {
            steps {
                sh 'echo "Hello world"'
            }
        }
    }
}
