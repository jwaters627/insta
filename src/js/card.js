import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import data from './gramdata';



class FlipCard extends React.Component{
  render(){




   var selectedUser;

      for( var i = 0; i < data.length; i++ ){
        if( data[ i ].id === this.props.idNumber ){
          selectedUser = data[ i ];
          console.log(selectedUser);

      break;
      }
    };

    var postedDate = new Date(selectedUser.created_time * 1000).toLocaleDateString('en-GB', {  
    month : 'short',
    day : 'numeric',
    year : 'numeric'
  });
    


    return(
  <Card onClick={this.props.hideCard} style={{width: "600px", textAlign: "center", margin: "0 auto"}}>
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="http://lorempixel.com/100/100/nature/"
    />
    <CardMedia
      overlay={<CardTitle title={selectedUser.caption.text} subtitle={<span>by <b>{selectedUser.user.username}</b></span>} />}
    >
      <img style= {{height: "500px"}}src={selectedUser.images.standard_resolution.url} />
    </CardMedia>
    <CardText>
      {selectedUser.caption.text}
    </CardText>
  </Card>
)
}
}

export default FlipCard;