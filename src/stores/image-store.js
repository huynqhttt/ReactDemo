import Api from'../utils/api';
import Reflux from 'reflux';
import Actions from '../actions';
import _ from 'lodash';

var ImageStore = Reflux.createStore({
	listenables: [Actions],
	getImages(topicId){
		return  Api.get('topics/' + topicId)
		.then(function(json){
			this.images = _.reject(json.data, function(image) {
				return image.is_album
			});
			this.triggerChange();
		}.bind(this))
		.catch(function(err){
			console.log(err);
		});
	},
	getImage: function(id) {
	    Api.get('gallery/image/' + id)
	      .then(function(json){
	        if(this.images){
	          this.images.push(json.data);
	        } else {
	          this.images = [json.data];
	        }
	        
	        this.triggerChange();
	      }.bind(this));
	  },
	  find: function(id){
	    var image = _.find(this.images, {id: id});

	    if(image) {
	      return image
	    } else {
	      this.getImage(id);
	      return null
	    }
	  },
	triggerChange: function(){
		this.trigger('change', this.images);
	}
});

module.exports = ImageStore;
