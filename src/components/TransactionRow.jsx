import React from 'react';
import { Link } from 'react-router-dom';

export default class TransactionRow extends React.Component {
    renderInputs(inputs) {
        return inputs.map((data) => {
            if (!data.prev_out) {
                return (<div><strong>Нет входных данных (новые монеты)</strong></div>);
            }

            return (
                <div>
                    {data.prev_out.addr}
                </div>
            );
        });
    }

    renderOut(out) {
        return out.map((data) => {
            return (
                <div>
                    {data.addr}
                </div>
            );
        });
    }

    render() {
        let transaction = this.props.transaction;
        return (
            <React.Fragment>
                <tr>
                    <td colspan="2">
                        <Link to={`/transaction/${transaction.hash}`}>
                            {transaction.hash}
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td>
                        {this.renderInputs(transaction.inputs)}
                    </td>
                    <td>
                        {this.renderOut(transaction.out)}
                    </td>
                </tr>
            </React.Fragment>
        );
    }
}