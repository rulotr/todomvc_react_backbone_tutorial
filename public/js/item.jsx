(function(){
 	todomvc.Componentes.item = React.createClass({
 		getInitialState: function () {
			return {editText: this.props.title};
		},
 		handleEdit: function () {
			this.props.onEdit(function () {
				var node = ReactDOM.findDOMNode(this.refs.editField);
				// //app.node =node;
				// console.log(this.refs.editField);
				 node.focus();
				 node.setSelectionRange(node.value.length, node.value.length);
			}.bind(this));
			//}.bind(this));
			this.setState({editText: this.props.todo.title});
		},

	render: function(){
		var marcada  = this.props.completed === true ? "completed " : "";
		var editable = this.props.editing === true ? "editing" : ""
		return(
						<li className={marcada + editable} >
							<div className="view">
								<input	className="toggle" type="checkbox" checked ={this.props.completed}/>
								 <label onDoubleClick={this.handleEdit}>{this.props.title}</label>
								<button className="destroy"  />
							</div>
							<input	className="edit"  ref="editField" value={this.state.editText} readOnly />
						</li>
			);
		}
	});
 })();