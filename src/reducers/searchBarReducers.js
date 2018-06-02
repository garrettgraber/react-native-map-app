import Actions from '../constants/actionTypesModule.js';

export function searchBarOn(state = false, action) {
	switch (action.type) {
		case Actions.SEARCH_BAR_ON:
			return true;
		case Actions.SEARCH_BAR_OFF:
			return false;
		default:
			return state;
  }
}