/**
 * Created by eoin on 04/12/16.
 */
var StockForm = React.createClass({
    propTypes: {
        value: React.PropTypes.object.isRequired
    },

    render: function() {
        return (
            React.createElement('form', {className: 'StockForm'},
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'Stock',
                    value: this.props.value.name,
                }),
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'Stock',
                    value: this.props.value.email,
                }),
                React.createElement('button', {type: 'submit'}, "Search Stocks")
            )
        )
    },
});