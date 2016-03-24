var Backbone = require('backbone') ;
var React = require('react') ;
var Tarea = require('../js/tarea')

module.exports = Backbone.Collection.extend({
		model: Tarea,
		siguienteId: function(){
			return this.length ?this.last().get('id') +1 : 1;
		},
		completadas: function () {
			return this.where({completed: true});
		},
	});