/**
 * In this file, we create a React component
 * which incorporates components providedby material-ui.
 */
import React, {Component} from 'react';
import { Link } from 'react-router';

import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {
  menu: {
    paddingLeft: '10px'
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

class Header extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false,
    };
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  }

  handleTouchTap(event) {
    // This prevents ghost click.
    event.preventDefault();
    
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }

  render() {
    return (
      <div>
        <Tabs>
            <Tab 
              containerElement={<Link to="/" />}
              label="Home" 
            />
            <Tab 
              containerElement={<Link to="/todos" />}
              label="Todos" 
            />
          </Tabs>  
      </div>
    );
  }
}

export default Header;
