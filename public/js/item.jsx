(function(){
 	todomvc.Componentes.item = React.createClass({
	render: function(){
		return(
						<li>
							<div className="view">
								<input	className="toggle" type="checkbox" />
								<label>Tarea 1</label>
								<button className="destroy"  />
							</div>
							<input className="edit" />
						</li>
			);
		}
	});
 })();