import React from 'react';
import TransactionRow from './TransactionRow.jsx';

export default class TransactionList extends React.Component {

    render() {
        let transactions = this.props.transactions.map((transaction) => {
            return (
                <TransactionRow transaction={transaction} />
            );
        });

        return (
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th colspan="2">Транзакции</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions}
                </tbody>
            </table>
        );
    }
}