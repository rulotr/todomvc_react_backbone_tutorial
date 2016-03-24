var $        = require('jquery');
var React = require('react') ;
var ReactDOM = require('react-dom') ;
var Tareas = require('../js/tareas.js');
var App    = require('../js/app.jsx');

$(function() {
			
	todomvc = {};

	todomvc ={
		Componentes: {},
		Modelos:{},
		Colecciones:{}
	}

	
   todomvc.Colecciones.tareas = new Tareas();
   todomvc.Colecciones.tareas.add({id:1, title:"Tarea Inicial", completed: false});
   todomvc.Colecciones.tareas.add({id:2, title:"Tarea 1", completed:true});

   ReactDOM.render((<App tareas={todomvc.Colecciones.tareas} />),document.getElementById('todoapp'))
});

//npm install --global babel-cli
//npm install -g babel-preset-react
//browserify -t [babelify --presets [react] ] main.jsx -o bundle.js