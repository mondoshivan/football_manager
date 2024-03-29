node {
    def app

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */

        checkout scm
    }

    stage('Build image') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */

        app = docker.build("mondoshivan/football_manager")
    }

    stage('Tests') {
            docker.image('mondoshivan/football_manager').withRun() { c ->
                sh "docker exec ${c.id} jest"
            }
        }

    stage('Push image') {
        /* Finally, we'll push the image with two tags:
         * First, the incremental build number from Jenkins
         * Second, the 'latest' tag.
         * Pushing multiple tags is cheap, as all the layers are reused. */
        docker.withRegistry('https://srv-linux1:5000') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }
}