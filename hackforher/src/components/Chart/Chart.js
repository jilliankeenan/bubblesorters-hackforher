import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class Chart extends Component {
	// shouldComponentUpdate(nextProps) {
	//     const propsHaveChanged = !deepEqual(this.props.sentimentChartData, nextProps.sentimentChartData);
	//     return propsHaveChanged;
	// }

	// static defaultProps = {
	//     sentimentChartData: {},
	//     displayTitle: true,
	//     displayLegend: true,
	//     legendPosition: 'right',
	// };

	render() {
		const data = {
			labels: [ 'Red', 'Green', 'Yellow' ],
			datasets: [
				{
					data: [ 300, 50, 100 ],
					backgroundColor: [ '#FF6384', '#36A2EB', '#FFCE56' ],
					hoverBackgroundColor: [ '#FF6384', '#36A2EB', '#FFCE56' ]
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
