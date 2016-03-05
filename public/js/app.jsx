(function(){
 	todomvc.Componentes.app = React.createClass({
 		componentWillMount: function(){ 
 			Backbone.React.Component.mixin.on(this,{collections:{miColleccion: todomvc.Colecciones.tareas }});
 		},
 		componentWillUnmount: function(){
 			Backbone.React.Component.mixin.off(this);
 		},
 		edit: function (tarea, callback) {
			// refer to todoItem.jsx `handleEdit` for the reason behind the callback
			this.setState({tarea_editable: tarea.get('id')});
		},
	render: function(){
		var TodoFooter = todomvc.Componentes.footer;
		var TodoItem = todomvc.Componentes.item;
		var lista_tareas = this.props.tareas;

		var lista = lista_tareas.map(function(tarea){
			return(
				    <TodoItem 
					title={tarea.get('title')} 
		            completed={tarea.get('completed')} 
		            onEdit={this.edit.bind(this, tarea)}
		            editing={this.state.tarea_editable === tarea.get('id')} 
		            key={tarea.get('id')}/>);
		},this);

		var faltantes = lista_tareas.reduce(function(acumulador,tarea){
			return tarea.get('completed') ? acumulador : acumulador + 1;
		},0);

        var completadas = lista_tareas.length - faltantes;

		return(
			<div>
				<header id="header">
					<h1>todos</h1>
					<input	ref="newField"	id="new-todo" placeholder="What needs to be done?"/>		
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