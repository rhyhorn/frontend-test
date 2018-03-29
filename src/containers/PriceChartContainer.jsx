import React from 'react';
import PriceChart from '../components/PriceChart.jsx';
import { connect } from 'react-redux';
import { fetchChartData } from '../actions';

const mapStateToProps = state => ({
    data: state.app.chartData
});

const mapDispatchToProps = dispatch => ({
    requestChartData: () => dispatch(fetchChartData())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PriceChart);