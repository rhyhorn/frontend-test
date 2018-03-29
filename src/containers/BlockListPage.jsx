import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchBlocks } from '../actions';

import BlockList from '../components/BlockList.jsx';
import BlockPager from '../components/BlockPager.jsx';

class BlockListPage extends React.Component {
    constructor(...args) {
        super(...args);

        this.handleDateChange = this.handleDateChange.bind(this);
    }

    componentWillMount() {
        let timestamp = this.props.match.params.timestamp || Date.now();
        this.props.dispatch(fetchBlocks(timestamp));
    }

    handleDateChange(timestamp) {
        this.props.dispatch(fetchBlocks(timestamp));
    }

    render() {
        return (
            <div>
                <BlockPager 
                    date={this.props.date} 
                    onDateChange={this.handleDateChange}
                />
                <BlockList blocks={this.props.blocks} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    blocks: state.app.blocks,
    date: state.app.selectedDate
});

export default withRouter(connect(mapStateToProps)(BlockListPage));