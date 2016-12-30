import {
	PHOTOS_REQUEST,
	PHOTOS_SUCCESS,
	GET_CURRENT_PHOTOS
} from '../constains/photos';

export default function gallery(state = {
	fetching: false,
	currentNumber: 10
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
		default:
			return state;
	}
}