(function(){
	var Tareas = Backbone.Collection.extend({
		modelo: todomvc.Modelos.tarea,
	});

	todomvc.Colecciones.tareas = new Tareas();
})();
