import React, { Component } from 'react';
import CanvasJSReact from '../../../../assets/canvasjs.react'
import './LineChart.css'
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class LineChart extends Component {
    render() {
        const options = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light2", // "light1", "dark1", "dark2"
            title: {
                // text: "Bounce Rate by Week of Year"
            },
            axisY: {
                // title: "Bounce Rate",
                includeZero: false,
                suffix: "%",

            },
            axisX: {
                // title: "Week of Year",
                // prefix: "1",
                // interval: 2,
                // valueFormatString: "MMM",
                // interval: 1,
                // intervalType: "month"
            },
            data: [{
                type: "line",
                // toolTipContent: "Week {x}: {y}%",
                dataPoints: [
                    { y: 61, label: "1 Jan" },
                    { y: 64, label: "10 Jan" },
                    { y: 62, label: "13 Jan" },
                    { y: 64, label: "22 Jan" },
                    { y: 64, label: "30 Jan" }

                ]
            }]
        }

        return (
            <div className="wrapper-chart">
                <CanvasJSChart options={options}
                /* onRef={ref => this.chart = ref} */
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        );
    }
}

export default LineChart;                           