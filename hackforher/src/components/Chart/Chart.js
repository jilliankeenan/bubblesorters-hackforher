import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class Chart extends Component {
	// shouldComponentUpdate(nextProps) {
	//     const propsHaveChanged = !deepEqual(this.props.sentimentChartData, nextProps.sentimentChartData);
	//     return propsHaveChanged;
	// }

	static defaultProps = {
	    displayLegend: true,
	    legendPosition: 'right',
	};

	render() {
		const data = {
			labels: [ 'Bugs', 'Features'],
			datasets: [
				{
					data: [ 3, 3 ],
					backgroundColor: [ '#df19a1', '#1566e0'],
					hoverBackgroundColor: [ '#FF6384', '#36A2EB' ]
				}
			]
		};

		return (
			<Doughnut
				data={data}
				height={20}
				width={40}
				options={{
					responsive: true,
					maintainAspectRatio: true,
					title: {
						display: this.props.displayTitle,
						fontSize: 25
					},
					legend: {
						display: this.props.displayLegend,
						position: this.props.legendPosition
					}
				}}
			/>
		);
	}
}

export default Chart;
