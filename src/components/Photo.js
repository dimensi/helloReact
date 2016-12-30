import React, { Component } from 'react';

export default class Photo extends Component {
	constructor (props) {
		super(props);
		this.state = { loaded: false };
	}

	
	handleImageLoaded = () => {
		this.setState({
				loaded: true
		});
	}

	render() {
		const { el } = this.props;
		const { image_width, image_height } = el;
		const size = {
			width: image_width > 350 ? 350 : image_width,
			height: image_width > 350 ? (image_height / image_width) * 350 : image_height
		};
		this.tagsArray = el.tag_string.split(' ');
		const tags = this.tagsArray.map((el, index) => {
			return <span key={index.toString()} className="tags">{el}</span>;
		});
		return (
			<figure
			className={`img ${this.state.loaded ? 'loaded' : ''}`}
			ref={ image => this.image = image }>
				<div>
					<div className="spinner"></div>
				<a href={`http://danbooru.donmai.us${el.file_url}`} target="_blank">
					<img 
				src={`http://danbooru.donmai.us${el.file_url}`}
				alt={`Фото номер #${el.id} года ${new Date(el.created_at).getFullYear()}`}
				onLoad={this.handleImageLoaded}
				style={size} />
				</a>
				<figcaption>
					<b>Created</b>: {new Date(el.created_at).toLocaleString()}, <br/>
					<b>Artist</b>: {el.tag_string_artist}, <br/>
					<b>Width</b>: {image_width}px, <b>Height</b>: {image_height}px, <br/>
					<b>File Extension</b>: {el.file_ext}, <br/>
					<b>Tags</b>: <div className="tags__row">{tags}</div>
				</figcaption>
				</div>
			</figure>
		);
	}
}