import React from 'react';
import {Link} from 'react-router';

import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import {Grid, Row, Col} from 'react-flexbox-grid';
 
 const tableData = [
  {
    name: 'Link to Image 1',
    link: 'http://udacity.github.io/responsive-images/images/kittens_large.jpg'
  },
  {
    name: 'Link to Image 2',
    link: 'http://www.hickerphoto.com/images/1024/endangered-animal-list_5406.jpg'
  },
  {
    name: 'Link to Image 3',
    link: 'http://www.pitt.edu/~shh69/resources/logos/google-logo.jpg'
  },
  {
    name: 'Link to Image 4',
    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/2000px-Flag_of_Vietnam.svg.png'
  },
  {
    name: 'Link to Image 5',
    link: 'https://shmuley.com/wp-content/uploads/2016/01/Iflag.jpg'
  },
  {
    name: 'Link to Image 6',
    link: 'http://cdn1-www.dogtime.com/assets/uploads/gallery/25-dog-memes/14-funny-dog-meme.jpg'
  },
  {
    name: 'Link to Image 7',
    link: 'http://www.gettyimages.ca/gi-resources/images/HomepageCurationTilesUK/2016Jun01_Jun07/Ali-3162458.jpg'
  },
  {
    name: 'Link to Image 8',
    link: 'http://www.gettyimages.ca/gi-resources/images/Homepage/Hero/US/Jan2016/hero-instagram.jpg'
  }
];

const style = {
  responsiveImg: {
    maxWidth: '100%',
    margin: '0 auto',
    height: 'auto',
    verticalAlign: 'middle',
    display: 'block'
  },
  box: {
    border:'1px solid #000',
    marginTop: 30,
    padding: 10
  },
  paper: {
    border:'1px solid #000',
    padding: 10
  },
  border:{
    border:'1px solid #000'
  }
  
}

var MainComponent = React.createClass({
  getInitialState(){
    return {
      open: false,
      link: null
    }
  },
  render() {
    return (
  		<div>
		    <Row>
          <Col xs={0} sm={1} md={1} lg={1}>

          </Col>
          <Col xs={12} sm={10} md={10} lg={10}>
              <Row style={style.box}>
                <Col xs={12} sm={5} md={5} lg={5}>
                  {this.renderTable()}
                </Col>
                <Col xs={12} sm={7} md={7} lg={7}>
                  {this.state.open ? this.renderImage() : 'Click the link to view the picture'}
                </Col>
              </Row>
          </Col>
          
          <Col xs={0} sm={1} md={1} lg={1}>

          </Col>
          </Row>
		  </div>
    )
  },
  renderTable(){
    return (
      <Table wrapperStyle={style.border}>
        <TableHeader
          displaySelectAll={false}
        >
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
          </TableRow>
        </TableHeader>

        <TableBody
            displayRowCheckbox={false}
            showRowHover={true}
          >
          {tableData.map( (row, index) => (
            <TableRow 
              key={index}
              selected={true}
            >
              <TableRowColumn>{index + 1}</TableRowColumn>
              <TableRowColumn>
                <Link to='/test2' value={row.link} onClick={this.handleCellClick}>{row.name}</Link>
              </TableRowColumn>
            </TableRow>

          ))}
          
        </TableBody>
        </Table>
    )
  },
  handleCellClick(event){
    this.setState({
      open: true,
      link: event.currentTarget.value
    })
  },
  renderImage(){
    return(
      <Paper zDepth={3} style={style.paper}>
        <img style={style.responsiveImg} src={this.state.link} />
      </Paper>
    )
  }
})

module.exports = MainComponent;
