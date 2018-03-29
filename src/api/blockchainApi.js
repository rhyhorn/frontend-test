const DOMAIN = 'https://blockchain.info/ru';

function buildRequestUrl(url, params = '') {
    return `${DOMAIN}${url}?format=json&cors=true${params}`;
}

function makeRequest(url, params = '') {
    return fetch(buildRequestUrl(url, params))
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            return response.json();
        });
}

export default {
    getBlocks(timestamp = Date.now()) {
        return makeRequest(`/blocks/${timestamp}`);
    },
    getBlocksByHeight(height) {
        return new Promise((resolve) => {
            resolve(require('../mock/searchResult.json'));
        });

        // return makeRequest(`/block-height/${height}`);
    },
    getBlock(blockHash) {
        return makeRequest(`/rawblock/${blockHash}`);
    },
    getTransaction(transactionHash) {
        return fetch(buildRequestUrl(`/rawtx/${transactionHash}`))
            .then((response) => {
                if (!response.ok) {
                    return null;
                }

                return response.json();
            });
    },
    getChartData() {
        return makeRequest('/charts/market-price', '&timespan=2months');
    }
};