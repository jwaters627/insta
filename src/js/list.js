import React from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import data from './gramdata'


 const muiTheme = getMuiTheme({
  
  appBar: {
    height: 250,
  },
});


class Listed extends React.Component{
  render(){
    return(
      <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <List id= "list">
      <Subheader style={{fontSize: '30px'}} id="sub">December</Subheader>

      {data.map((tile) => (
        <ListItem
          key={tile.images.thumbnail.url}
          primaryText= {tile.caption.from.username}
          leftAvatar={<Avatar src={tile.images.thumbnail.url} />}
          secondaryText={tile.caption.text}
          style={{marginLeft: '50px', fontSize: '20px'}}
          />
          ))}
    </List>
        </div>

    </MuiThemeProvider>
)
}
}

export default Listed;