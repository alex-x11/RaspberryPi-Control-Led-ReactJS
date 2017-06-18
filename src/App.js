import React, { Component } from 'react';
var API_URL = 'http://192.168.1.103:8080/api/';			// IP BACKEND
var $ = require('jquery');

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {led1: false, led2: false, led3: false, all:false};
		this.state = {ledState:[]};
		$.post(API_URL+'clear-all'); 					// 	TURN OFF ALL LED's
	}


	openLed1(elems){
		if(this.state.led1){
			var newState = 0;
			var stan = false;
		}else{
			var newState = 1;
			var stan = true;
		}
		this.setState({led1:stan});
		$.post(API_URL,{'port':parseInt(elems.target.getAttribute('data-port')), 'status':newState});
	}

	openLed2(elems){
		if(this.state.led2){
			var newState = 0;
			var stan = false;
		}else{
			var newState = 1;
			var stan = true;
		}
		this.setState({led2:stan});
		$.post(API_URL,{'port':parseInt(elems.target.getAttribute('data-port')), 'status':newState});
	}

	openLed3(elems){
		if(this.state.led3){
			var newState = 0;
			var stan = false;
		}else{
			var newState = 1;
			var stan = true;
		}
		this.setState({led3:stan});
		$.post(API_URL,{'port':parseInt(elems.target.getAttribute('data-port')), 'status':newState});
	}

	switchAll(elems){
		if(this.state.all){
			var stan = false;
		}else{
			var stan = true;
		}
		if(stan){
			$.post(API_URL+'light-all');
			this.setState({all:stan});
		}else{
			$.post(API_URL+'clear-all');
			this.setState({all:stan});
		}
	}

	render(){
		var class1 = 'btn btn-info boxButton '+(this.state.led1 ? '' : ' disabled');
		var class2 = 'btn btn-success boxButton '+(this.state.led2 ? '' : ' disabled');
		var class3 = 'btn btn-danger boxButton '+(this.state.led3 ? '' : ' disabled');
		var classAll = 'btn btn-warning boxButton '+(this.state.all ? '' : ' disabled');


		return(
			<div>
				<button className={class1} onClick={this.openLed1.bind(this)} data-port="4">LED1</button>

				<button className={class2} onClick={this.openLed2.bind(this)} data-port="3">LED2</button>

				<button className={class3} onClick={this.openLed3.bind(this)} data-port="2">LED3</button>

				<button className={classAll} onClick={this.switchAll.bind(this)}>Switch ALL</button>
			</div>
		)
	}
}
export default App;