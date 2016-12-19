import React, { Component } from 'react';
import News from './News';
import Add from './Add';
import { Jumbotron } from 'react-bootstrap';

var myNews = [
  {
    author: 'Саша Печкин',
    text: 'В четчерг, четвертого числа...',
    bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!',
    bigText: 'А евро 42!'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
    bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
  }
];

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { news: myNews };
	}

	addNews = (news) => {
		this.setState(prevState => ({
			news: prevState.news.concat(news)
		}));
	}

	render() {
		return (
			<div className="app">
				<Jumbotron bsStyle='dark jumbotron-no-margin'>
					<Add addNews={this.addNews}/>
				</Jumbotron>
				<Jumbotron bsStyle='no-margin'>
					<News lastNews={this.state.news} />
				</Jumbotron>
			</div>
		);
	}
}