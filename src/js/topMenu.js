import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Grid from './grid';
import Listed from './list';
import FlipCard from './card';


 const muiTheme = getMuiTheme({
  
  appBar: {
    height: 100,
    color: "#C32635",

  },
});

class TopMenu extends React.Component{

	constructor(props) {
    super(props);
    this.state = {idNumber: "1271145610054306697_174241377"};
    this.setIdNumber = this.setIdNumber.bind(this);
  }

  setIdNumber(num){
  	this.setState({idNumber: num})
  }

	render(){
		if(this.props.size == 'large')
			var panel = (
				<div id="card">
					<FlipCard hideCard={this.props.hideCard} idNumber={this.state.idNumber}></FlipCard>
				</div>
				)
		else if (this.props.view =='grid')
  		var panel = (
	      <div id="grid">
	      	<Grid cols={this.props.cols} plusClick={this.props.onPlusButton} showCard={this.props.showCard} setIdNumber={this.props.setIdNumber}></Grid>
	      </div>);
	else
		panel = (
      <div id="list">
	  		<Listed></Listed>
  	  </div>
      );
		return(
			 <MuiThemeProvider muiTheme={muiTheme}>
			 <div>
			  <AppBar

			    title="Title"
			    iconElementRight= {
			    					<ul style={{listStyleType: "none", marginTop: 5, marginRight: 45}}>
				    					<li style={{display: "inline-block"}}>
					    					<IconButton onClick={this.props.onGridButton}>
									            <svg fill="#eeeeee" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
									              <path d="M0 0h24v24H0z" fill="none"/>
									              <path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z"/>
									            </svg>
									        </IconButton>
								        </li>
								        <li style={{display: "inline-block"}}>
					    					 <IconButton onClick={this.props.onListButton}>
								              <svg fill="#eeeeee" height="24" viewBox="0 00 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
								                <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
								                <path d="M0 0h24v24H0z" fill="none"/>
								             </svg>
								          </IconButton>
								        </li>
							        </ul>
							    }
			  />
			  
			  {panel}
			  </div>
			  </MuiThemeProvider>

 			 )
		};
};


export default TopMenu;