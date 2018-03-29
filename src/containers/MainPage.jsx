import React from 'react';

import BlockList from '../components/BlockList.jsx';
import TransactionList from '../components/TransactionList.jsx';

import SearchBlock from '../containers/SearchBlockContainer.jsx';
import PriceChart from '../containers/PriceChartContainer.jsx';

import blockchainApi from '../api/blockchainApi';
import { connect } from 'react-redux';
import { fetchBlocksAndTransactions } from '../actions';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(fetchBlocksAndTransactions());
    }

    render() {
        return (
            <div>
                <PriceChart />
                <BlockList blocks={this.props.blocks.slice(0, 10)} />
                <TransactionList transactions={this.props.transactions.slice(0, 10)} />

                <SearchBlock />

            </div>
        );
    }
}

const mapStateToProps = state => ({
    blocks: state.app.blocks,
    transactions: state.app.transactions,
});

export default connect(mapStateToProps)(MainPage);