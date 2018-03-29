import {
    CHANGE_SEARCH_TERM,
    SEARCH_BLOCK_RECIVE,
    INVALIDATE_SEARCH_RESULT
} from '../actions/search.js';

let defaultState = {
    term: '',
    blocks: [],
    transaction: null
};

const search = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_SEARCH_TERM: {
            return Object.assign({}, state, {
                term: action.term
            });
        }
        case SEARCH_BLOCK_RECIVE: {
            return Object.assign({}, state, {
                blocks: action.blocks,
                transaction: action.transaction,
            });
        }
        case INVALIDATE_SEARCH_RESULT:
            return Object.assign({}, state, {
                term: '',
                blocks: [],
                transaction: null
            });
        default:
            return state;
    }
};

export default search;