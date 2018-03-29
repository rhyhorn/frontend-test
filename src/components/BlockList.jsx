import React from 'react';

import { Link } from 'react-router-dom';
import dateFormat from 'dateformat';

export default class BlockList extends React.Component {
    constructor(...args) {
        super(...args);
        this.dateObject = new Date();
    }

    formateDate(date) {
        this.dateObject.setTime(date * 1000);

        return dateFormat(this.dateObject, 'yyyy-mm-dd H:MM:ss');
    }

    render() {
        let blocks = this.props.blocks.map((block) => {
            return (
                <tr key={block.hash}>
                    <td>{block.height}</td>
                    <td className="blocks-table__hash">
                        <Link to={`/block/${block.hash}`}>{block.hash}</Link>
                    </td>
                    <td>{this.formateDate(block.time)}</td>
                </tr>
            );
        });

        return (
            <table className="table table-striped table-bordered blocks-table">
                <thead className="thead-dark">
                    <tr>
                        <th>Высота</th>
                        <th>Hash</th>
                        <th>Время</th>
                    </tr>
                </thead>
                <tbody>
                    {blocks}
                </tbody>
            </table>
        );
    }
}
