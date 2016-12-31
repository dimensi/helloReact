import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as GalleryActions from '../actions/GalleryActions';
import Photos from '../components/Photos';
import Input from '../components/Input';

class App extends Component {

	getPhotos = (e) => {
		const { getPhotos } = this.props.galleryActions;
		getPhotos(+e.target.getAttribute('data-year'));
	}

	componentDidMount() {
		this.props.galleryActions.getPhotos(2015);
	}
	render() {
		const { year, currentPhotos, fetching } = this.props.gallery;
		const { getCurrentPhotos, getNewFilter  } = this.props.galleryActions;
		return (
			<div>
				<div className="controls">
					<h1>Год: {year}</h1>
					<button onClick={this.getPhotos} data-year={2014} disabled={fetching}>Забацай фотки 2014</button>
					<button onClick={this.getPhotos} data-year={2015} disabled={fetching}>Забацай фотки 2015</button>
					<button onClick={this.getPhotos} data-year={2016} disabled={fetching}>Забацай фотки 2016</button>
					<Input changeFilter={getNewFilter} />
				</div>
				<div className='loading' style={ {display: fetching ? 'flex' : 'none'} }>
					<div className="loading__text">Загрузка...</div>
					<div className="spinner"></div>
					</div>
				<Photos images={currentPhotos} getCurrentPhotos={getCurrentPhotos} fetching={fetching} />
			</div>
		);
	}
}

const mapStateToProps = (store) => {
	const filter = store.gallery.filter.toLowerCase();
	if (filter === 'show_all') {
		return {
			gallery: store.gallery
		};
	}
	const filtered = store.gallery.photos ? store.gallery.photos.filter(el => {
		if (el.tag_string.includes(filter)) {
			return true;
		}
		return false;
	}) : null;
	return {
		gallery: {
			...store.gallery,
			currentPhotos: filtered
		}
	};
};

const mapDispatchToProps = (dispatch) => ({
	galleryActions: bindActionCreators(GalleryActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);