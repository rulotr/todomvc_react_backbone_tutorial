 var etiqueta=React.createElement('label',null,'Tarea 2');
 var caja = React.createElement('input',{className: 'toggle'})	
 var boton = React.createElement('button',{className:'destroy'})
 var Tarea = React.createElement('div',{className:'view'},caja,etiqueta,boton)
 var cajaEditable = React.createElement('input',{className:"edit"})
 var Lista = React.createElement('li',null,Tarea,cajaEditable)
 ReactDOM.render(Lista,document.getElementById('todo-list'))