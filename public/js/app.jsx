(function(){
 	todomvc.Componentes.app = React.createClass({
	render: function(){
		var TodoFooter = todomvc.Componentes.footer;
		var TodoItem = todomvc.Componentes.item;
		var lista_tareas = this.props.tareas;

		var lista = lista_tareas.map(function(tarea){
			return(<TodoItem title={tarea.title} completed={tarea.completed}/>);
		});

		var faltantes = lista_tareas.reduce(function(acumulador,tarea){
			return tarea.completed ? acumulador : acumulador + 1;
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

	var listado_tareas =[]
	listado_tareas = [
	{title:"Tarea Inicial", completed: false},
	{title:"Tarea 1", completed: false},
	{title:"Tarea 2", completed: true},
	{title:"Tarea 3", completed: false},
	{title:"Tarea 4", completed: false},
	{title:"Tarea 5", completed: false},
	
	]

	var TodoApp = todomvc.Componentes.app;
	ReactDOM.render((<TodoApp tareas={listado_tareas} />),document.getElementById('todoapp'))
 })()