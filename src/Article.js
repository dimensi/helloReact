import React, { Component } from 'react';
import { Button, Panel } from 'react-bootstrap';

export default class Article extends Component {
	constructor(props) {
		super(props);
		this.state = { visible: false };
	}

	toggleNews = () => this.setState(prevState => ({
		visible: !prevState.visible
	}))
	render() {
		const item = this.props.data;
		return (
			<article className="article">
				<Panel footer={`Автор: ${item.author}`}>
					{item.text}
					<Button onClick={this.toggleNews} bsStyle="primary" bsSize="small">
					{this.state.visible ? 'Скрыть': 'Читать далее'}
					</Button>
					<Panel collapsible expanded={this.state.visible}>
						{item.bigText}
					</Panel>
				</Panel>
			</article>
		);
	}
}