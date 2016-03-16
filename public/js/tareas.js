(function(){
	var Tareas = Backbone.Collection.extend({
		modelo: todomvc.Modelos.tarea,
		siguienteId: function(){
			return this.length ? todomvc.Colecciones.tareas.last().get('id') +1 : 1;
		},
	});

	todomvc.Colecciones.tareas = new Tareas();
})();
