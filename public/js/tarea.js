(function(){
	   todomvc.Modelos.tarea = Backbone.Model.extend({
		initialize: function(){},
		default:{
			id: '',
			title: '',
			completed: false
		},
		cambio: function () {
			this.set({completed: !this.get('completed')});
		},
	});
})();