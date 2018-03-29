import blockchainApi from '../api/blockchainApi';

export const CHANGE_SEARCH_TERM = 'CHANGE_SEARCH_TERM';

export function changeSearchTerm(term) {
    return {
        type: CHANGE_SEARCH_TERM,
        term
    };
}

export const SEARCH_BLOCK_REQUEST = 'SEARCH_BLOCK_REQUEST';

export function searchDataRequest(height) {
    return {
        type: SEARCH_BLOCK_REQUEST,
        height
    };
}

export const SEARCH_BLOCK_RECIVE = 'SEARCH_BLOCK_RECIVE';

export function searchDataRecive(blocks, transaction) {
    return {
        type: SEARCH_BLOCK_RECIVE,
        blocks,
        transaction
    };
}

export function searchBlocksAndTransactions(height) {
    return dispatch => {
        dispatch(searchDataRequest(height));

        return Promise.all([
            blockchainApi.getBlocksByHeight(height),
            blockchainApi.getTransaction(height)
        ]).then((data) => {
            let [blocksData, transaction] = data;
            dispatch(searchDataRecive(blocksData.blocks, transaction));
        });
    };
}

export const INVALIDATE_SEARCH_RESULT = 'INVALIDATE_SEARCH_RESULT';

export function invalidateSearchResult() {
    return {
        type: INVALIDATE_SEARCH_RESULT
    };
}