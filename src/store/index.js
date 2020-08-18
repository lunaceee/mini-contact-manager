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
		}
	}
});

// Subscribe to store updates
store.subscribe((mutation, state) => {
	// Store the state object as a JSON string
	localStorage.setItem('store', JSON.stringify(state));
});
