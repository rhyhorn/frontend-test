import React from 'react';
import SearchBlock from '../components/SearchBlock.jsx';
import { connect } from 'react-redux';

import {
    changeSearchTerm,
    searchBlocksAndTransactions,
    invalidateSearchResult
} from '../actions/search.js';

const mapStateToProps = state => ({
    value: state.search.term,
    blocks: state.search.blocks,
    transaction: state.search.transaction
});

const mapDispatchToProps = dispatch => ({
    onSearchTermChange: (term) => {
        dispatch(changeSearchTerm(term));
    },
    onSearch: (height) => {
        dispatch(searchBlocksAndTransactions(height));
    },
    onInvalidateSearchResult: () => {
        dispatch(invalidateSearchResult());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBlock);