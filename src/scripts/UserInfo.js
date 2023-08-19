export default class UserInfo {
    constructor({selectorName, selectorJob}){
        this._name = document.querySelector(selectorName)
        this._job = document.querySelector(selectorJob)
    }
    getUserInfo(){
        const userData = {
            name: this._name.textContent,
            job: this._job.textContent
        }

        return userData
    }
    setUserInfo(item) {
        this._name.textContent = item.name
        this._job.textContent = item.job
    }
}