(function () {
	'use strict';
	TodoMVC.Controls.TodoApp = React.createClass({
			render: function () {					
				var TodoItems =TodoMVC.Controls.TodoItem;
				var Footer =TodoMVC.Controls.TodoFooter;			
				return (				
					<div>
						<header id="header">
							<h1>todos</h1>	
							<input	ref="newField"	id="new-todo" placeholder="What needs to be done?"/>		
						</header>
						<section id="main">
							<input	id="toggle-all"	type="checkbox"	/>
							<ul id="todo-list">
								<TodoItems />
							</ul>
						</section>
						<Footer />
					</div>
				);
			}
		});
		
	var TodoApp = TodoMVC.Controls.TodoApp;
	ReactDOM.render((<TodoApp />),	document.getElementById('todoapp'));
})();
