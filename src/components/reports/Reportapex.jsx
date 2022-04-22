import React, { useState } from "react";
import Chart from 'react-apexcharts'

const RChart = () => {

    const [state, setstate] = useState({
        series: [
            {
                data: [
                    {
                        x: '',
                        y: [
                            new Date('2019-03-12').getTime(),
                            new Date('2019-03-18').getTime()
                        ],
                        fillColor: '#FF4560'
                    }
                ]
            }
        ],
        options: {
            chart: {
                height: 350,
                type: 'rangeBar'
            },
            plotOptions: {
                bar: {
                    horizontal: true
                }
            },
            xaxis: {
                type: 'datetime'
            }
        },


    })

    return (
        <div id="chart">
            <Chart
                options={state.options}
                series={state.series}
                type="rangeBar"
                height={80}
                width={"100%"}
            />
        </div>
    );

}

export default RChart;