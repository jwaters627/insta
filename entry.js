import React from 'react';
import ReactDom from 'react-dom';

import TopMenu from './src/js/topMenu';
import Grid from './src/js/grid';
import data from './src/js/gramdata';


class MainDiv extends React.Component{

	 constructor(props) {
	    super(props);
	    this.state = {cols: 3, view: 'grid', size: 'normal', cardNumber: '0'};
	    this.plus = this.plus.bind(this);
	    this.viewGrid = this.viewGrid.bind(this);
	    this.viewList = this.viewList.bind(this);
	    this.showCard = this.showCard.bind(this);
	    this.hideCard = this.hideCard.bind(this);
	  }

	  plus(event, value) {

	    this.setState({cols: value});
	  }
	 

	
	  viewGrid(){
	  	this.setState({view: 'grid'});
	  }
	  viewList(){
	  	this.setState({view: 'list'});
	  }

	  showCard(index){
	  	this.setState({size: 'large', cardNumber: index});
	  }

	  hideCard(){
	  	this.setState({size: 'normal'});
	   }


	render(){
		return(
			<div>

				<TopMenu hideCard={this.hideCard} showCard={this.showCard} size={this.state.size} onGridButton= {this.viewGrid} onListButton={this.viewList} view={this.state.view} cols={this.state.cols} onPlusButton={this.plus}></TopMenu>
				

			</div>
	)
	}

}

var mainDiv = <MainDiv/>

ReactDom.render(mainDiv, document.getElementById('main'));
