import Reflux from 'reflux';
import Actions from '../actions';
import Api from '../utils/api';

var CommentStore = Reflux.createStore({
  listenables: [Actions],
  getImage: function(id){
    Api.get('gallery/' + id + '/comments')
      .then(function(json){
        this.comment = json.data;
        this.triggerChange();
      }.bind(this));
  },
  triggerChange: function() {
    this.trigger('change', this.comment);
  }
});

module.exports = CommentStore;