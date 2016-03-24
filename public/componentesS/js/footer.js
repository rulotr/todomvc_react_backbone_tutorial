var React = require('backbone');

module.exports = React.createClass({
	displayName: 'exports',

	render: function () {
		var faltantes = this.props.faltantes;
		var singular_plural = this.props.faltantes === 1 ? 'item' : 'items';
		var completadas = this.props.completadas;

		var botonCompleto = completadas > 0 ? React.createElement(
			'button',
			{ id: 'clear-completed', onClick: this.props.onlimpiarCompletadas },
			' Clear completed '
		) : null;
		return React.createElement(
			'footer',
			{ id: 'footer' },
			React.createElement(
				'span',
				{ id: 'todo-count' },
				React.createElement(
					'strong',
					null,
					faltantes,
					' '
				),
				' ',
				singular_plural,
				' left'
			),
			React.createElement(
				'ul',
				{ id: 'filters' },
				React.createElement(
					'li',
					null,
					React.createElement(
						'a',
						{ href: '#/' },
						'All'
					)
				),
				React.createElement(
					'span',
					null,
					' '
				),
				React.createElement(
					'li',
					null,
					React.createElement(
						'a',
						{ href: '#/active' },
						'Active'
					)
				),
				React.createElement(
					'span',
					null,
					' '
				),
				React.createElement(
					'li',
					null,
					React.createElement(
						'a',
						{ href: '#/completed' },
						' Completed'
					)
				)
			),
			botonCompleto
		);
	}
});