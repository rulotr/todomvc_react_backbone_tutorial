(function(){
 	todomvc.Componentes.item = React.createClass({
	render: function(){
		var marcada = this.props.completed === true ? "completed " : " ";
		var editada = this.props.editando === true ? "editing" : "";
		return(
						<li className={marcada + editada} >
							<div className="view">
								<input	
								      className="toggle" 
								      type="checkbox" 
								      checked ={this.props.completed}
								      onChange={this.props.onSeleccion}
								      editando= {this.props.editando}
								      //readOnly
								/>
								 <label onDoubleClick={this.props.editar}>{this.props.title}</label>
								<button className="destroy" onClick={this.props.onDestroy} />
							</div>
							<input className="edit" />
						</li>
			);
		}
	});
 })();