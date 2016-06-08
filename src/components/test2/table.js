import React from 'react';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
 

var TableComponent = React.createClass({
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
            {this.props.tableData.map( (row, index) => (
              <TableRow 
                key={index}
              >
                <TableRowColumn>{index + 1}</TableRowColumn>
                <TableRowColumn>
                  {row.name}
                </TableRowColumn>
              </TableRow>

            ))}
            
          </TableBody>
        </Table>
		  </div>
    )
  }
})

module.exports = TableComponent;
