/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */
import React, {Component} from 'react';
import { Link } from 'react-router';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './components/header';
import TopicList from './components/topic-list';

class App extends Component {

  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Header />
        </MuiThemeProvider>
        {this.props.children}
      </div> 
    );
  }
  renderContent(){
    if(this.props.children){
     return this.props.children
    }else{
      return <TopicList />
    }
  }
}

export default App;
