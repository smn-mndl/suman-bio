pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        git branch: 'master', url: 'https://github.com/smn-mndl/suman-bio.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        bat 'npm install'
      }
    }

    stage('Build Project') {
      steps {
        bat 'npm run build'
      }
    }

    stage('Test (optional)') {
      steps {
        bat 'npm test || echo No tests'
      }
    }
  }
}
