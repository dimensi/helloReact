import {
	PHOTOS_REQUEST,
	PHOTOS_SUCCESS,
	GET_CURRENT_PHOTOS
} from '../constains/photos';

import { FILTER_CHANGE, SHOW_ALL } from '../constains/filter';

export default function gallery(state = {
	fetching: false,
	currentNumber: 10,
	filter: SHOW_ALL
}, action) {
	switch (action.type) {
		case PHOTOS_REQUEST:
			return {
				...state,
				year: action.payload,
				fetching: action.fetching
			};
		case PHOTOS_SUCCESS:
			return {
				...state,
				photos: action.payload,
				fetching: action.fetching,
				currentPhotos: action.currentPhotos
			};
		case GET_CURRENT_PHOTOS:
			return {
				...state,
				currentPhotos: action.payload,
				currentNumber: action.currentNumber
			};
		case FILTER_CHANGE: {
			return {
				...state,
				filter: action.payload,
				currentNumber: 10
			};
		}
		default:
			return state;
	}
}