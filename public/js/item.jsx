(function(){
 	todomvc.Componentes.item = React.createClass({
	render: function(){
		var marcada = this.props.completed === true ? "completed" : "";
		return(
						<li className={marcada + " editing"}  >
							<div className="view">
								<input	
								      className="toggle" 
								      type="checkbox" 
								      checked ={this.props.completed}
								      onChange={this.props.onSeleccion}
								      //readOnly
								/>
								 <label onDoubleClick={this.modoEdicion}>{this.props.title}</label>
								<button className="destroy" onClick={this.props.onDestroy} />
							</div>
							<input className="edit" />
						</li>
			);
		}
	});
 })();