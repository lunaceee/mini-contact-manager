import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		contactList: []
	},
	mutations: {
		initialiseStore(state) {
			// Check if the ID exists
			if (localStorage.getItem('store')) {
				// Replace the state object with the stored item
				this.replaceState(Object.assign(state, JSON.parse(localStorage.getItem('store'))));
			}
		},
		addContact: (state, newContact) => {
			newContact.avatar = `https://cataas.com/cat/cute/says/${newContact.name}`;
			state.contactList.push(newContact);
			localStorage.setItem('store', JSON.stringify(state));
		},
		deleteContact: (state, contact) => {
			state.contactList.splice(state.contactList.indexOf(contact), 1);
			localStorage.setItem('store', JSON.stringify(state));
		}
	}
});
