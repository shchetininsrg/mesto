export default class UserInfo {
    constructor({selectorName, selectorJob, selectorAvatar}){
        this._name = document.querySelector(selectorName)
        this._job = document.querySelector(selectorJob)
        this._avatar = document.querySelector(selectorAvatar)
    }
    getUserInfo(){
        const userData = {
            name: this._name.textContent,
            job: this._job.textContent
        }

        return userData
    }
    setUserInfo({name, job , avatar}) {
        this._name.textContent = name
        this._job.textContent = job
        this._avatar.src = avatar
    }
}