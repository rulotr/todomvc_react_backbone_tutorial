
var React    = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
var BackboneReact = require('backbone-react-component');
var TodoItem = require('../js/item.jsx');
var TodoFooter = require('../js/footer.jsx');

var ENTER_KEY = 13;
var ALL_TODOS = 'all';
var ACTIVE_TODOS = 'active';
var COMPLETED_TODOS = 'completed';

 	//todomvc.Componentes.app 
module.exports = React.createClass({
 		componentWillMount: function(){ // Se lanza antes de que se renderice el componente 		
 			Backbone.React.Component.mixin.on(this,{collections:{miColleccion: todomvc.Colecciones.tareas }});
 		},
 		componentWillUnmount: function(){  // Se lanza antes de que el componente se elimine 		
 			Backbone.React.Component.mixin.off(this);
 		},
 		componentDidMount: function(){		
 			var Router = Backbone.Router.extend({	 		
			routes: {
				'': 'all',
				'active': 'active',
				'completed': 'completed'
			},
	
			all:this.setState.bind(this,{queMostrar: ALL_TODOS}),
			active:this.setState.bind(this,{queMostrar: ACTIVE_TODOS}),
			completed:this.setState.bind(this,{queMostrar: COMPLETED_TODOS})
			});

 			var appRouter = new Router();
			//Comenzamos a monitorizar nuestras rutas
			Backbone.history.start();
		},
 	getInitialState: function () {
			return {editando: null};
		},	
 	nuevaTarea: function(event){
 		if(event.which != ENTER_KEY){
 			return;
 		}
 		var nuevoValor = ReactDOM.findDOMNode(this.refs.newField).value;
 		if(nuevoValor){
 			var siguienteId = todomvc.Colecciones.tareas.siguienteId();
 			todomvc.Colecciones.tareas.add({id: siguienteId, title: nuevoValor, completed:false});
 			ReactDOM.findDOMNode(this.refs.newField).value = '';
 		}
 	},
 	guardar: function (tarea, texto) {
			tarea.set({title: texto})
			this.setState({editando: null});
		},	
 	delete: function(tarea){
			todomvc.Colecciones.tareas.remove(tarea);
		},
	marcarTodos: function (event) {
			var checked = event.target.checked;
			todomvc.Colecciones.tareas.forEach(function (tarea) {
				tarea.set('completed', checked);
			});
		},
	limpiarCompletadas: function () {
			todomvc.Colecciones.tareas.completadas().forEach(function (tarea) {
				todomvc.Colecciones.tareas.remove(tarea);
			});
		},
	editar: function (tarea,callbackHijo) {
			console.log("editando tarea " + tarea.get('id'));	
			this.setState({editando: tarea.get('id')},callbackHijo);	
		},
	cancel: function () {
			this.setState({editando: null});
		},
	render: function(){
		var lista_tareas = this.props.tareas;

		var lista = lista_tareas.map(function(tarea){		
			 if(this.state.queMostrar===ACTIVE_TODOS && tarea.get('completed')===true){
				return ;
			 }
			 if(this.state.queMostrar===COMPLETED_TODOS && tarea.get('completed')===false){
			 	return ;
			 }


			return(<TodoItem 
				        title={tarea.get('title')} 
				        completed={tarea.get('completed')}
				        onDestroy={this.delete.bind(this,tarea)}
				        onSeleccion={tarea.cambio.bind(tarea)} 
				        key={tarea.get('id')}
				        editar = {this.editar.bind(this, tarea)}
				        editando = {this.state.editando === tarea.get('id')}
				        onCancel={this.cancel}
				        guardar = {this.guardar.bind(this,tarea)}
				         />);
		},this);        
		var faltantes = lista_tareas.reduce(function(acumulador,tarea){
			return tarea.get('completed') ? acumulador : acumulador + 1;
		},0);

        var completadas = lista_tareas.length - faltantes;

		return(
			<div>
				<header id="header">
					<h1>todos</h1>
					<input	
					   ref="newField"	
					   id="new-todo" 
					   onKeyDown={this.nuevaTarea}
					   placeholder="What needs to be done?"/>		
				</header>
				<section id="main">
					<input	
					    id="toggle-all"	
					    type="checkbox"	
					    onChange={this.marcarTodos}
					/>
						<ul id="todo-list">
						  {lista}
						</ul>
				</section>

				<TodoFooter faltantes={faltantes} completadas={completadas} onlimpiarCompletadas={this.limpiarCompletadas} />
		
			</div>
			);
		}
	});

