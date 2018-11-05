import React, {Component} from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import rootReducer from "./reducers";
import { addDataPoint } from "./actions";

import plotLine from "./plotLine.js"


class Plot extends Component {

	constructor(props) {
		super(props);
//		this.state = { 	counter : 0,
//						data : [],
//						plotData : [], };
	}
/*
	addDataPoint() {
		const counter = this.state.counter;
		const data = this.state.data.slice();
		const plotData = this.state.plotData.slice();
		const randomDataPoint = Math.round(Math.random() * 100) / 10;
		if (data.length <= 15) {
			this.setState({
				counter : counter + 1,
				data : data.concat(randomDataPoint),
				plotData : plotData.concat([{ "x" : counter + 1, "y" : randomDataPoint }]),
			});
		} else {
			this.setState({
				counter : counter + 1,
				data : data.slice(1).concat(randomDataPoint),
				plotData : plotData.slice(1).concat([{ "x" : counter + 1, "y" : randomDataPoint }]),

			});
		}
	}
*/

	plotLine() {
		console.log(this.props.counter);
		console.log(this.props.plotData);
		plotLine(this.props.plotData, 'viz_container');
	}

	componentDidMount() {
		setInterval(() => this.props.addPoint(Math.round(Math.random() * 100) / 10), 1000);
		setInterval(() => this.plotLine(), 1000);
	}

	render() {

		return (
			<React.Fragment>
				<div id="viz_container"></div>
		    </React.Fragment>

		);
	}
}

Plot.propTypes = {
	counter : PropTypes.number.isRequired,
	plotData : PropTypes.array.isRequired,
}

function mapStateToProps(state) {
	return {
		counter : state.counter,
		plotData : state.plotData,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		addPoint : (newPoint) => dispatch(addDataPoint(newPoint)),
	}
}





export default connect(mapStateToProps, mapDispatchToProps) (Plot);










