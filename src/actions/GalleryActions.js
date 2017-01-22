import {
	PHOTOS_REQUEST,
	PHOTOS_SUCCESS,
	GET_CURRENT_PHOTOS
} from '../constains/photos';
import { FILTER_CHANGE, SHOW_ALL } from '../constains/filter';
import qs from 'querystring';

export function getPhotos(year) {
	return (dispatch) => {
		dispatch({
			type: PHOTOS_REQUEST,
			payload: year,
			fetching: true
		});

		const dateNow = new Date().getFullYear();
		const search = qs.stringify({
			limit: 200,
			tags: `pool:3020 age:${dateNow - year}y..${dateNow - year + 1}y`
		});
		console.log('http://safebooru.donmai.us/posts.json?' + search);
		fetch('http://safebooru.donmai.us/posts.json?' + search)
			.then(r => r.json())
			.then(r => {
				const firstPhotos = r.slice(0,10);
				dispatch({
					type: PHOTOS_SUCCESS,
					payload: r,
					currentPhotos: firstPhotos,
					fetching: false
				});
			});
	};
}


export function getCurrentPhotos() {


	return (dispatch, getState) => {
		const currentState = getState();
		const currentNumber = currentState.gallery.currentNumber;
		const firstPhotos = currentState.gallery.photos.slice(currentNumber, currentNumber + 10);
		const mergedPhotos = [ ...currentState.gallery.currentPhotos, ...firstPhotos ];
		dispatch({
			type: GET_CURRENT_PHOTOS,
			payload: mergedPhotos,
			currentNumber: firstPhotos.length ? currentNumber + 10 : currentNumber,
			isLoaded: true
		});
	};
}

export function getNewFilter(filter) {
	if (filter) {
		return {
			type: FILTER_CHANGE,
			payload: filter
		};
	}
	return {
		type: FILTER_CHANGE,
		payload: SHOW_ALL
	};
}