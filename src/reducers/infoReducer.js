import { types } from '../types/types';

const initialState = {
	info: [],
	active: null
}

export const infoReducer = (state = initialState, action) => {

	switch (action.type) {

		case types.infoLoad:
            return {
                ...state,
                info: [
                    ...action.payload
                ]
            }

		default:
			return state
	}

}