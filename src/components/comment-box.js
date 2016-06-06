import React from 'react';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

var CommentBox = React.createClass({
	render(){
		console.log(this.props.comments);
		return (
			<div>
				{this.renderComment()}
			</div>
		)
	},
	renderComment(){
		return (
			this.props.comments.slice(0, 20).map(function(comment){
				return (
					<Card>
				    <CardHeader
				      title={comment.ups}
				      subtitle={comment.author}
				      actAsExpander={true}
				      showExpandableButton={true}
				    />
				    <CardText expandable={true}>
				      {comment.comment}
				    </CardText>
				  </Card>
				)
			})
			
		)
	}
});

module.exports = CommentBox;