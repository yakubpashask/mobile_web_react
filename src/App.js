import React, { Component } from 'react';
import './assets/react-toolbox/theme.css';
import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import Button from 'react-toolbox/lib/button/Button';
import AppBar from 'react-toolbox/lib/app_bar/AppBar'
import 'material-design-icons/iconfont/material-icons.css'
// import Card from 'react-toolbox/lib/card/Card'
// import CardMedia from 'react-toolbox/lib/card/CardMedia'
// import CardTitle from 'react-toolbox/lib/card/CardTitle'
// import CardText from 'react-toolbox/lib/card/CardText'
// import CardActions from 'react-toolbox/lib/card/CardActions'
 
import {Card, CardMedia, CardTitle, CardText, CardActions} from 'react-toolbox/lib/card'


// import Link from 'react-toolbox/lib/link/Link'
// import Navigation from 'react-toolbox/lib/navigation/Navigation'

class App extends Component {
  render() { 
    const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

    return (
      
      <ThemeProvider theme={theme} >
      <div className="App">
      <AppBar title='Search For Bus Tickets' leftIcon='menu'>
        {/* <Navigation type='horizontal'>
          <Link href='http://' label='Inbox' icon='inbox' />
          <Link href='http://' active label='Profile' icon='person' />
        </Navigation> */}
      </AppBar>
      {/* <Button label='Bookmark' raised primary/> */}
      <Card>
            <CardTitle
              leftIcon="menu"
              title="From"/>

            <CardTitle
              leftIcon="menu"
              title="To"/>


    <CardTitle
      avatar="https://placeimg.com/80/80/animals"
      title="Avatar style title"
      subtitle="Subtitle heres"
    />
    <CardMedia
      aspectRatio="wide"
      image="https://placeimg.com/800/450/nature"
    />
    <CardTitle
      title="Title goes here"
      subtitle="Subtitle here"
    />
    <CardText>{dummyText}</CardText>
    <CardActions theme={theme}>
      <Button label="Action 1" />
      <Button label="Action 2" />
    </CardActions>
  </Card>
      <Card style={{margin:'100'}}>
        
        <CardTitle avatar="location"
        title="From"/>


        
    
        
      </Card>        
      




      </div>

  
      </ThemeProvider>
      
    );
  }
}

export default App;
