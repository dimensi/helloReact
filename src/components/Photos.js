import React, { Component } from 'react';
import Photo from './Photo';
import Waypoint from 'react-waypoint';

export default class Photos extends Component {

	getMorePhotos = () => {
		if (!this.props.fetching) {
			this.props.getCurrentPhotos();
		}
	}

	render() {
		const { images } = this.props;
		const photos = images ? images.map(
			el => {
				if (el.file_url && ['png','jpg','jpeg','bmp','gif','webp'].includes(el.file_ext)) {
					return <Photo key={el.id} el={el} />;
				}
				return null;
			}
		) : null;
		return (
			<div className="row">
				{photos}
				<div className="load-more">
					<Waypoint onEnter={this.getMorePhotos} />
				</div>
			</div>
		);
	}
}