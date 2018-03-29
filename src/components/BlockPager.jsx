import React from 'react';

export default class BlockPager extends React.Component {
    constructor(...args) {
        super(...args);

        this.handleNextClick = this.handleClick.bind(this, 1);
        this.handlePrevClick = this.handleClick.bind(this, -1);
    }

    handleClick(dirrection, event) {
        event.preventDefault();

        let oldDate = new Date(this.props.date);
        let newDate = new Date(
            oldDate.getFullYear(),
            oldDate.getMonth(),
            oldDate.getDate() + dirrection
        );
        this.props.onDateChange(newDate.valueOf());
    }

    render() {
        let formattedDate = (new Date(this.props.date)).toLocaleDateString();
        return (
            <div className="blocks-pager text-center">
                <a className="blocks-pager__prev" href="#" onClick={this.handlePrevClick}>Previous</a>
                Blocks mined on: {formattedDate}
                <a className="blocks-pager__next" href="#" onClick={this.handleNextClick}>Next</a>
            </div>
        );
    }
}
