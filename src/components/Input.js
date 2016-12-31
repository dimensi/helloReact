import React, { Component } from 'react';
import debounce from 'lodash/debounce';

export default class Input extends Component {

	handleInput = () => debounce(() => { this.props.changeFilter(this.input.value); }, 500);

	render() {
		return <input
		type="text"
		placeholder='Поиск по тегам...'
		ref={input => this.input = input}
		onChange={this.handleInput()} />;
	}
}