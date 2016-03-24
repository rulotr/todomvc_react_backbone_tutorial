var Backbone = require('backbone') ;

module.exports = Backbone.Model.extend({
		default:{
			id: '',
			title: '',
			completed: false
		},
		cambio: function () {			   
			this.set({completed: !this.get('completed')});
		},
});
