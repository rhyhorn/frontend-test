import blockchainApi from '../api/blockchainApi';

export const REQUEST_BLOCKS = 'REQUEST_BLOCKS';

function requestBlocks(timestamp) {
    return {
        type: REQUEST_BLOCKS,
        timestamp
    };
}

export const RECIVE_BLOCKS = 'RECIVE_BLOCKS';

function receiveBlocks(blocks) {
    return {
        type: RECIVE_BLOCKS,
        blocks
    };
}

export const REQUEST_BLOCK = 'REQUEST_BLOCK';

function requestBlock(hash) {
    return {
        type: REQUEST_BLOCKS,
        hash
    };
}

export const RECIVE_BLOCK = 'RECIVE_BLOCK';

function receiveBlock(block) {
    return {
        type: RECIVE_BLOCK,
        block
    };
}

export const RECIVE_TRANSACTIONS = 'RECIVE_TRANSACTIONS';

function receiveTransactions(transactions) {
    return {
        type: RECIVE_TRANSACTIONS,
        transactions
    };
}

export const RECIVE_TRANSACTION = 'RECIVE_TRANSACTION';

function receiveTransaction(transaction) {
    return {
        type: RECIVE_TRANSACTION,
        transaction
    };
}

export const RECIVE_CHART_DATA = 'RECIVE_CHART_DATA';

function receiveChartData(data) {
    return {
        type: RECIVE_CHART_DATA,
        data
    };
}

export function fetchBlock(hash) {
    return dispatch => {
        dispatch(requestBlock(hash));

        return blockchainApi
            .getBlock(hash)
            .then((data) => {
                dispatch(receiveBlock(data));
            });
    };
}

export function fetchTransaction(hash) {
    return dispatch => {
        return blockchainApi
            .getTransaction(hash)
            .then((data) => {
                dispatch(receiveTransaction(data));
            });
    };
}

const LAST_BLOCK_COUNT = 1;

export function fetchBlocks(timestamp) {
    return dispatch => {
        dispatch(requestBlocks(timestamp));
        return blockchainApi
            .getBlocks(timestamp)
            .then((data) => {
                dispatch(receiveBlocks(data.blocks));

                return data.blocks;
            });
    };
}

export function fetchBlocksAndTransactions(timestamp = Date.now()) {
    return dispatch => {
        dispatch(requestBlocks(timestamp));
        return blockchainApi
            .getBlocks(timestamp)
            .then((data) => {
                dispatch(receiveBlocks(data.blocks));

                return data.blocks;
            })
            .then((blocks) => {
                let promises = blocks.slice(0, LAST_BLOCK_COUNT)
                    .map(({ hash }) => {
                        return blockchainApi.getBlock(hash);
                    });

                return Promise.all(promises);
            })
            .then((blocksData) => {
                let transactions = blocksData.reduce((accum, block) => {
                    return accum.concat(block.tx);
                }, []);
                dispatch(receiveTransactions(transactions));
            });
    };
}

export function fetchChartData() {
    return dispatch => {
        return blockchainApi
            .getChartData()
            .then((data) => {
                dispatch(receiveChartData(data.values));
            });
    };
}