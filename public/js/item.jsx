(function(){
	var ESCAPE_KEY = 27;
	var ENTER_KEY = 13;

 	todomvc.Componentes.item = React.createClass({
 	handleKeyDown: function (event) {
			if(event.which === ESCAPE_KEY){				
				this.props.onCancel()
			}
			if (event.which === ENTER_KEY) {				
				this.handleSubmit();
			}
		},
	handleSubmit: function (event) {
		   if(!this.props.editando){
		   	 return;
		   }
		    var node =  ReactDOM.findDOMNode(this.refs.editField);	
			var val = node.value.trim();
			console.log(val)
			if (val) {
				this.props.guardar(val);
				console.log("se guarda");
			} 
		//	return false;
		},
    handleEdit: function () {
			// Le informa al componente padre que hay cambio de celda a editar						
		    // Le pasamos al componente padre la funcion que ejecutara al final
			this.props.editar(function(){
				var node =  ReactDOM.findDOMNode(this.refs.editField);			
					node.focus();
					node.value =this.props.title;
					node.setSelectionRange(node.value.length, node.value.length);				
			}.bind(this));
		},
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
								 <label onDoubleClick={this.handleEdit}>{this.props.title}</label>
								<button className="destroy" onClick={this.props.onDestroy} />
							</div>
							<input 
							   ref="editField"	
							   className="edit" 
							   onKeyDown={this.handleKeyDown}
							   onBlur={this.handleSubmit}
							   />
						</li>
			);
		}
	});
 })();