(function(){
 	todomvc.Componentes.item = React.createClass({
	render: function(){
		var marcada = this.props.completed === true ? "completed" : "";
		return(
						<li className={marcada}>
							<div className="view">
								<input	className="toggle" type="checkbox" checked ={this.props.completed}/>
								 <label>{this.props.title}</label>
								<button className="destroy"  />
							</div>
							<input className="edit" />
						</li>
			);
		}
	});
 })();