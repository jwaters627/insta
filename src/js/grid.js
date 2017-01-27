import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


import data from './gramdata';
import SliderExampleSimple from './slider';

 const muiTheme = getMuiTheme({
  
  appBar: {
    height: 250,
  },
});


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 60 + "vw",
    height: "100%",
    overflowY: 'auto',
    marginBottom: 24,
  },
  gridTile:{
    marginBottom: 40,
   
  }
};





class Grid extends React.Component{

  render(){



    return(

  <MuiThemeProvider muiTheme={muiTheme}>
    <div style={styles.root}>
      <GridList
        cellHeight={900/this.props.cols}
        style={styles.gridList}
        padding= {20}
        cols= {this.props.cols}
      >
      
          <Subheader style= {{marginTop: "30px", fontSize: "30px", width: "75%", display: "inline-block"}}>December</Subheader>

          <Subheader style={{ marginTop: "30px", fontSize: "40px", width: "140px", textAlign: "right", float: "right", height: "55px", display: "inline-block", marginRight: "0px"}}><SliderExampleSimple plusClick={this.props.plusClick}></SliderExampleSimple></Subheader>
         
        {data.map((tile, index) => (

          <GridTile
            key={tile.images.standard_resolution.url}
            onClick={(event)=>this.props.showCard(index)}
            title={<span>by <b>{tile.user.username}</b></span>}
            subtitle={tile.created_time}
            style={styles.gridTile}
          >
            <img src={tile.images.standard_resolution.url} />
          </GridTile>
        ))}
      </GridList>
    </div>
  </MuiThemeProvider>
  )};
};

export default Grid;