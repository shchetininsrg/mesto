export default class Api {
    constructor(configApi) {
        this._url = configApi.url
        this._header = configApi.header
    }
    
    _checkStateServ(res){
        if(!res.ok) {
            return Promise.reject(`error: ${res.status}`);
        } 
		return res.json()
    }

    getDefaultCard(){
        return fetch(`${this._url}/cards`, {
			method: 'GET',
			headers: this._header
		})
			.then(res => this._checkStateServ(res))
    }
    getUserInfo() {
		return fetch(`${this._url}/users/me`, {
			method: 'GET',
			headers: this._header
		})
			.then(res => this._checkStateServ(res))
	}

	getAvatar(item) {
		return fetch(`${this._url}/users/me/avatar `, {
			method: 'PATCH',
			headers: this._header,
			body: JSON.stringify({
				avatar: item.link,
			})
		},)
			.then(res => this._checkStateServ(res))
	}

	getInfoProfile(item) {
		return fetch(`${this._url}/users/me`, {
			method: 'PATCH',
			headers: this._header,
			body: JSON.stringify({
				name: item.name,
				about: item.about
			})
		},)
			.then(res => this._checkStateServ(res))
	}

	createNewCard(card) {
		return fetch(`${this._url}/cards`, {
			method: 'POST',
			headers: this._header,
			body: JSON.stringify({
				name: card.title,
				link: card.link
			})
		},)
			.then(res => this._checkStateServ(res))
	}

	deleteCard(card_id) {
		return fetch(`${this._url}/cards/${card_id}`, {
			method: 'DELETE',
			headers: this._header
		},)
			.then(res => this._checkStateServ(res))
	}

	addLike(card_id) {
		return fetch(`${this._url}/cards/${card_id}/likes `, {
			method: 'PUT',
			headers: this._header
		},)
			.then(res => this._checkStateServ(res))
	}

	deleteLike(card_id) {
		return fetch(`${this._url}/cards/${card_id}/likes `, {
			method: 'DELETE',
			headers: this._header
		},)
            .then(res => this._checkStateServ(res))
			.then(data => {
				return data;
			});
	}
}
