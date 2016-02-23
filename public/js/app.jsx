(function(){
 	todomvc.Componentes.app = React.createClass({
	render: function(){
		var TodoFooter = todomvc.Componentes.footer;
		var TodoItem = todomvc.Componentes.item;
		return(
			<div>
				<header id="header">
					<h1>todos</h1>
					<input	ref="newField"	id="new-todo" placeholder="What needs to be done?"/>		
				</header>
				<section id="main">
					<input	id="toggle-all"	type="checkbox"	/>
						<ul id="todo-list">
							<TodoItem/>
							<TodoItem/>
							<TodoItem/>
						</ul>
				</section>

				<TodoFooter/>
		
			</div>
			);
		}
	});

	var TodoApp = todomvc.Componentes.app;
	ReactDOM.render((<TodoApp/>),document.getElementById('todoapp'))
 })()