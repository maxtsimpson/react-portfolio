import axios from "axios";

// Gets my github repos and returns them as "projects"
export default {
    getProjectList: function () {
        console.log("in getProjectList")
        return new Promise((resolve,reject) => {
            this.getGitRepoDetails()
                .then((repoData) => {
                    //use functions here to
                    const projectList = repoData.data
                    .filter(repo => !repo.private && repo.description !== null && repo.homepage !== null)
                    .map(repo => {
                        const {id, name, description, html_url, homepage} = repo
                        return {id, name: this.parseProjectName(name),description,siteURL: homepage,repoURL: html_url}
                    })
                    // note that projectImage may need to just get an image from assets that matches the repo name
                    resolve(projectList)
                })
                .catch(error => reject(error))
        })
    },

    getGitRepoDetails: function () {
        return axios.get("https://api.github.com/users/maxtsimpson/repos")
    },

    parseProjectName: function (projectName) {
        const wordArray = projectName.replace(/-/g,' ').replace(/_/g,' ').split(" ").map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        return wordArray.join(" ")
    }
};
