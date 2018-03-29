import React from 'react';
import { connect } from 'react-redux';
import { fetchTransaction } from '../actions';
import { withRouter } from 'react-router';
import dateFormat from 'dateformat';
import TransactionRow from '../components/TransactionRow.jsx';

class TransactionPage extends React.Component {
    componentWillMount() {
        let hash = this.props.match.params.hash;
        this.props.dispatch(fetchTransaction(hash));
    }

    render() {
        let transaction = this.props.transaction;

        if (!transaction) {
            return '';
        }

        let date = new Date(transaction.time * 1000);
        let formattedDate = dateFormat(date, 'yyyy-mm-dd H:MM:ss');

        return (
            <React.Fragment>
                <h1>Транзакции</h1>
                <table className="table table-striped table-bordered">
                    <tbody >
                        <TransactionRow transaction={transaction} />
                    </tbody>
                </table>

                <table className="table table-striped table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th colspan="2">Сводные данные</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Размер</td>
                            <td>{transaction.size} (байтов)</td>
                        </tr>
                        <tr>
                            <td>вес</td>
                            <td>{transaction.weight}</td>
                        </tr>

                        <tr>
                            <td>Время поступления</td>
                            <td>
                                {formattedDate}
                            </td>
                        </tr>
                        <tr>
                            <td>Награда за блок</td>
                            <td>{transaction.block_height}</td>
                        </tr>
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}


const mapStateToProps = state => ({
    transaction: state.app.selectedTransaction,
});

export default withRouter(connect(mapStateToProps)(TransactionPage));