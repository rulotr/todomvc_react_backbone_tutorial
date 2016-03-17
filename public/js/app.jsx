(function(){
	var ENTER_KEY = 13;
 	todomvc.Componentes.app = React.createClass({
 		componentWillMount: function(){ 
 			Backbone.React.Component.mixin.on(this,{collections:{miColleccion: todomvc.Colecciones.tareas }});
 		},
 		componentWillUnmount: function(){
 			Backbone.React.Component.mixin.off(this);
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
		var TodoFooter = todomvc.Componentes.footer;
		var TodoItem = todomvc.Componentes.item;
		var lista_tareas = this.props.tareas;

		var lista = lista_tareas.map(function(tarea){
			return(<TodoItem 
				        title={tarea.get('title')} 
				        completed={tarea.get('completed')}
				        onDestroy={this.delete.bind(this,tarea)}
				        onSeleccion={tarea.cambio.bind(this,tarea)} 
				        key={tarea.get('id')}
				        editar = {this.editar.bind(this, tarea)}
				        editando = {this.state.editando === tarea.get('id')}
				        onCancel={this.cancel}
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

	todomvc.Colecciones.tareas.add({id:1, title:"Tarea Inicial", completed: false});
	todomvc.Colecciones.tareas.add({id:2, title:"Tarea 1", completed:true});

	var TodoApp = todomvc.Componentes.app;
	ReactDOM.render((<TodoApp tareas={todomvc.Colecciones.tareas} />),document.getElementById('todoapp'))
 })()