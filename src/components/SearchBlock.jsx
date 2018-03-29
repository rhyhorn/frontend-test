import React from 'react';
import BlockList from '../components/BlockList.jsx';
import TransactionList from '../components/TransactionList.jsx';

export default class SearchBlock extends React.Component {
    constructor(...args) {
        super(...args);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount() {
        this.props.onInvalidateSearchResult();
    }

    handleChange(event) {
        this.props.onSearchTermChange(event.target.value);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSearch(this.props.value);
    }

    render() {
        return (
            <React.Fragment>
                <form className="search-form"
                    onSubmit={this.handleSubmit}
                >
                    <div className="form-row">
                        <div className="col-10">
                            <input
                                className="form-control"
                                placeholder="Hash"
                                value={this.props.value}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="col">
                            <button type="submit" className="btn btn-primary btn-block">
                                Submit
                        </button>
                        </div>
                    </div>
                </form>

                {this.props.blocks.length > 0
                    ? <BlockList blocks={this.props.blocks} />
                    : ''
                }

                {this.props.transaction != null
                    ? <TransactionList transactions={[this.props.transaction]} />
                    : ''
                }

            </React.Fragment>
        );
    }
}