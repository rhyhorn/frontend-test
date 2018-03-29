import React from 'react';
import BlockInfo from '../components/BlockInfo.jsx';
import { fetchBlock } from '../actions';

import { connect } from 'react-redux';

class BlockPage extends React.Component {
    constructor(...args) {
        super(...args);
    }

    componentWillMount() {
        let hash = this.props.match.params.hash;
        this.props.dispatch(fetchBlock(hash));
    }

    render() {
        return (
            this.props.block !== null
                ? <BlockInfo block={this.props.block} />
                : ''
        );
    }
}

const mapStateToProps = state => ({
    block: state.app.selectedBlock
});

export default connect(mapStateToProps)(BlockPage);