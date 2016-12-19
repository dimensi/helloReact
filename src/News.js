import React, { Component } from 'react';
import Article from './Article';

export default class News extends Component {
	constructor(props) {
		super(props);
		this.state = { counter: 0 };
	}

	increment = () => this.setState(prevState => ({
		counter: prevState.counter + 1
	}));

	render() {
		const newsItems = this.props.lastNews;
		let newsTemplate;
		if (newsItems.length) {
			newsTemplate = newsItems.map((item, index) => {
				return (
					<Article key={index} data={item} />
				)
			});
		} else {
			newsTemplate = <div>Новостей нет :(</div>;
		}
		return (
			<div className="news">
				<h1>Новости</h1>
				{newsTemplate}
				<strong className={`news__count ${newsTemplate.length ? '' : 'none' }`}>Всего новостей: {newsTemplate.length}</strong>
			</div>
		);
	}
}