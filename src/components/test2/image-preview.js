import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

var ImageComponent = React.createClass({
  render() {
    return (
  		<div>
		    <Table>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
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
              <TableRow key={index}>
                <TableRowColumn>{index + 1}</TableRowColumn>
                <TableRowColumn>{row.name}</TableRowColumn>
              </TableRow>

            ))}
            
          </TableBody>
        </Table>
		  </div>
    )
  }
})

module.exports = ImageComponent;
