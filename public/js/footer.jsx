 (function(){
 	todomvc.Componentes.footer = React.createClass({
	render: function(){
		return(
				<footer id="footer">
					<span id="todo-count">
						<strong>1 </strong> item left
					</span>
					<ul id="filters">
						<li><a	href="#/">All</a></li>
						<span> </span>
						<li><a	href="#/active">Active</a></li>
						<span> </span>
						<li><a	href="#/completed">	Completed</a></li>
					</ul>
                    <button	id="clear-completed"> Clear completed </button>		
			   	</footer>
			);
		}
	});
 })();