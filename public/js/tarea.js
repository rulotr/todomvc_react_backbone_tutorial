(function(){
	   todomvc.Modelos.tarea = Backbone.Model.extend({
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