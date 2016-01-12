import Store from 'store';
import { debounce } from 'decko';

const STORE_ID = 'peach-client';

const store = new Store();

// populate from localStorage
try {
	store.setState(JSON.parse(localStorage.getItem(STORE_ID)) || {});
} catch(e) {}

// save to localStorage after writes
store.subscribe(debounce( data => localStorage.setItem(STORE_ID, JSON.stringify(data)) ));

export default store;
