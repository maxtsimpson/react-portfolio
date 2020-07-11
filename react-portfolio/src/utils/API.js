import axios from "axios";

export default {
    // Gets all posts

    getProjectList: function () {
        return new Promise((resolve, reject), () => {
            this.getGitRepoDetails()
                .then((repoData) => {
                    //use functions here to
                    // filter the repos to just get the public ones
                    // convert the repo name to a friendly project name
                    // get just projectName, projectImage, siteURL, repoURL, projectDescription
                    // note that projectImage may need to just get an image from assets that matches the repo name
                    resolve(projectList)
                })
                .catch(error => reject(error))
        })
    },

    getGitRepoDetails: function () {
        return axios.get("https://api.github.com/users/maxtsimpson/repos")
    }
};
