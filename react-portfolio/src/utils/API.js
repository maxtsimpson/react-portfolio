import axios from "axios";
import { urlPreview } from 'url-preview';
import { getLinkPreview } from 'link-preview-js';

// Gets my github repos and returns them as "projects"
export default {
    getProjectList: function () {
        console.log("in getProjectList")
        return new Promise((resolve, reject) => {
            this.getGitRepoDetails()
                .then(async (repoData) => {
                    //use functions here to
                    let projectList
                    let result = repoData.data
                        .filter(repo => !repo.private && repo.description !== null && repo.homepage !== null)
                        .map(repo => {
                            const { id, name, description, html_url, homepage } = repo
                            return { id, name: this.parseProjectName(name), description, siteURL: homepage, repoURL: html_url }
                        })
                    console.log({ result })
                    console.log("about to run project list")
                    await this.populateProjectListWithImages(result)
                        .then((projectList) => {
                            console.log("projectList then from main loop")
                            resolve(projectList)
                        })
                    console.log("finished running project list")
                    // console.log({projectList})
                    // resolve(projectList)
                })
                .catch(error => reject(error))
        })
    },

    populateProjectListWithImages: async function (projectList) {
        return Promise.all(
            projectList.map(async project => {
                return await getLinkPreview('https://maxt-cors-for-max.herokuapp.com/' + project.repoURL)
                    .then((data) => {
                        console.log("got link preview successfully")
                        if (data.images.length > 0) {
                            return { ...project, projectImage: data.images[0] }
                        }
                        return (project)
                    })
                    .catch(error => {return error})//console.log(error))
            })
        )
    },

    getGitRepoDetails: function () {
        return axios.get("https://api.github.com/users/maxtsimpson/repos")
    },

    parseProjectName: function (projectName) {
        const wordArray = projectName.replace(/-/g, ' ').replace(/_/g, ' ').split(" ").map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        return wordArray.join(" ")
    }
};
