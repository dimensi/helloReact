import React, { Component } from 'react';
import { FormGroup, ControlLabel, HelpBlock, FormControl, Checkbox, Button} from 'react-bootstrap';

	
export default class Add extends Component {
	constructor(props) {
		super(props);
		this.state = {
			valueAuthor: '',
			valueText: '',
			valueCheckBox: false
		}
	}

	sendNews = (e) => {
		e.preventDefault();
		this.props.addNews({
			author: this.state.valueAuthor,
			text: this.state.valueText.slice(0,40),
			bigText: this.state.valueText
		});
		e.target.reset();
	}

	getValidationState = (value) => {
		const length = value.length;
		if (length > 2) return 'success';
	}

	FieldGroup({id, label, help, validation, ...props}) {
		return (
			<FormGroup controlId={id} validationState={validation}>
				<ControlLabel>{label}</ControlLabel>
				<FormControl {...props} />
				{help && <HelpBlock>{help}</HelpBlock>}
			</FormGroup>
		)
	}
	
	handleChange(value, e) {
		this.setState({ [value]: e.target.value });
	}

	handleCheckBox = () => this.setState({
		valueCheckBox: !this.state.valueCheckBox
	})

	btnIsDisabled = () => !(this.state.valueAuthor.length > 0 && this.state.valueText.length > 0 && this.state.valueCheckBox);

	render() {
		return (
			<form 
			className='form'
			onSubmit={this.sendNews}>
				<h2>Добавить новость</h2>
				<this.FieldGroup
					id="author"
					type="text"
					label="Автор"
					placeholder="Введите текст"
					value={this.state.valueAuthor}
					onChange={this.handleChange.bind(this, 'valueAuthor')}
					validation={this.getValidationState(this.state.valueAuthor)}
				/>
				<FormGroup controlId="formControlsTextarea">
					<ControlLabel>Текст</ControlLabel>
					<FormControl componentClass="textarea"
					value={this.state.valueText}
					onChange={this.handleChange.bind(this, 'valueText')}
					placeholder="Введите текст" />
				</FormGroup>
				<Checkbox checked={this.state.valueCheckBox} onChange={this.handleCheckBox}>
					Согласен на размещение
				</Checkbox>
				<Button type="submit" disabled={this.btnIsDisabled()}>
					Разместить новость
				</Button>
			</form>
		)
	}
}