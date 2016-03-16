(function(){
	var ENTER_KEY = 13;
 	todomvc.Componentes.app = React.createClass({
 		componentWillMount: function(){ 
 			Backbone.React.Component.mixin.on(this,{collections:{miColleccion: todomvc.Colecciones.tareas }});
 		},
 		componentWillUnmount: function(){
 			Backbone.React.Component.mixin.off(this);
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
	render: function(){
		var TodoFooter = todomvc.Componentes.footer;
		var TodoItem = todomvc.Componentes.item;
		var lista_tareas = this.props.tareas;

		var lista = lista_tareas.map(function(tarea){
			return(<TodoItem 
				        title={tarea.get('title')} 
				        completed={tarea.get('completed')}
				        onDestroy={this.delete.bind(this,tarea)}
				        onSeleccion={tarea.cambio.bind(tarea)} 
				        key={tarea.get('id')} />);
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
					<input	id="toggle-all"	type="checkbox"	/>
						<ul id="todo-list">
							{lista}
						</ul>
				</section>

				<TodoFooter faltantes={faltantes} completadas={completadas} />
		
			</div>
			);
		}
	});

	todomvc.Colecciones.tareas.add({id:1, title:"Tarea Inicial", completed: false});
	todomvc.Colecciones.tareas.add({id:2, title:"Tarea 1", completed:true});

	var TodoApp = todomvc.Componentes.app;
	ReactDOM.render((<TodoApp tareas={todomvc.Colecciones.tareas} />),document.getElementById('todoapp'))
 })()