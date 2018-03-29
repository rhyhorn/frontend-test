import {
    REQUEST_BLOCKS,
    RECIVE_BLOCKS,
    RECIVE_BLOCK,
    RECIVE_TRANSACTIONS,
    RECIVE_TRANSACTION,
    RECIVE_CHART_DATA
} from '../actions';

let defaultState = {
    blocks: [],
    transactions: [],
    selectedBlock: null,
    selectedTransaction: null,
    selectedDate: Date.now(),
    chartData: [],
    searchTerm: '',
    searchResult: []
};

const app = (state = defaultState, action) => {
    switch (action.type) {
        case RECIVE_BLOCKS: {
            return Object.assign({}, state, {
                blocks: action.blocks
            });
        }
        case RECIVE_BLOCK: {
            return Object.assign({}, state, {
                selectedBlock: action.block
            });
        }
        case RECIVE_TRANSACTIONS: {
            return Object.assign({}, state, {
                transactions: action.transactions
            });
        }
        case RECIVE_TRANSACTION: {
            return Object.assign({}, state, {
                selectedTransaction: action.transaction
            });
        }
        case REQUEST_BLOCKS: {
            return Object.assign({}, state, {
                selectedDate: action.timestamp,
                blocks: []
            });
        }
        case RECIVE_CHART_DATA: {
            return Object.assign({}, state, {
                chartData: action.data
            });
        }
        default:
            return state;
    }
};

export default app;