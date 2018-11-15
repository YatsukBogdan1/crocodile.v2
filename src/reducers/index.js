import { combineReducers } from 'redux';
import { LOGOUT } from '../actions/app';
import app from '../reducers/app';
import game from '../reducers/game';
import table from '../reducers/table';
import user from '../reducers/user';

const appReducer = combineReducers({
	app,
	game,
	user,
	table
});

export default (state: ReducerState, action: Object) => {
	if (action.type === LOGOUT) {
		// $FlowFixMe
		state = undefined;
	}

	return appReducer(state, action);
}; 
