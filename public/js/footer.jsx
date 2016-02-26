 (function(){
 	todomvc.Componentes.footer = React.createClass({
	render: function(){
		var faltantes = this.props.faltantes;
        var singular_plural = this.props.faltantes === 1 ? 'item' : 'items'
        var completadas = this.props.completadas;

        var botonCompleto = completadas>0 ? (<button	id="clear-completed"> Clear completed </button>) : null;
		return(
				<footer id="footer">
					<span id="todo-count">
						<strong>{faltantes} </strong> {singular_plural} left
					</span>
					<ul id="filters">
						<li><a	href="#/">All</a></li>
						<span> </span>
						<li><a	href="#/active">Active</a></li>
						<span> </span>
						<li><a	href="#/completed">	Completed</a></li>
					</ul>
                    {botonCompleto}	
			   	</footer>
			);
		}
	});
 })();