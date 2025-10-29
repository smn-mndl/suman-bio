pipeline {
  agent any

  environment {
    CI = 'false'
  }

  stages {
    stage('Clean Workspace') {
      steps {
        deleteDir()
      }
    }

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
  }
}
