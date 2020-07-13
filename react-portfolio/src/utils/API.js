import axios from "axios";
// const axios = require('axios')

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
                        const {id, name, description, hmtl_url, homepage} = repo
                        return {id, name,description,siteURL: homepage,repoURL: homepage}
                    })
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

// api.getProjectList()
// .then(result => console.table(result))
// .catch(error => console.log(error))

// export default api