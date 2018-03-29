import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import blockchainApi from '../api/blockchainApi';
import dateFormat from 'dateformat';

export default class PriceChart extends React.Component {
    constructor(...args) {
        super(...args);
    }

    componentWillMount() {
        this.props.requestChartData();
    }

    formateDates(values) {
        let date = new Date();

        return values.map((value) => {
            date.setTime(value.x * 1000);
            return {
                x: dateFormat(date, 'dd-mm-yyyy'),
                y: value.y
            };
        });
    }

    render() {
        let data = this.formateDates(this.props.data);
        return (
            <ResponsiveContainer width="100%" height={300}>
                <LineChart
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <XAxis dataKey="x" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}