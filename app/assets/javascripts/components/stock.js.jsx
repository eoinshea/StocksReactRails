var Stocks = React.createClass({

    render: function() {
        stocks = this.props.stocks.map( function(stock) {
            return (
                <tr key={stock.id}>
            <td>{stock.price}</td>
            </tr>
            );
        });
        return (
            <div>
            <h1>Stocks</h1>
            <div id="stocks">
            <table>
            <thead>
            <tr>
            <th>Name</th>
            <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {stocks}
            </tbody>
            </table>
            </div>
            </div>
        );
    }
});
