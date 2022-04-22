import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

const Areachart3 = () => {

    const [state, setState] = useState({



        series: [
            {
                name: '',
                type: '',
                data: []
            },
            {
                name: 'TEAM B',
                type: 'area',
                data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 22, 55, 43, 21,]
            },
        ],
        options: {
            chart: {
                height: 350,
                type: 'line',
                stacked: true,
            },
            stroke: {
                width: [0, 2, 5],
                curve: 'smooth'
            },
            plotOptions: {
                bar: {
                    columnWidth: '50%'
                }
            },

            fill: {
                opacity: [0.85, 0.25, 1],
                gradient: {
                    inverseColors: true,
                    shade: 'light',
                    type: "vertical",
                    opacityFrom: 0.85,
                    opacityTo: 0.55,
                    stops: []
                }
            },
            labels: ['01/02/2022', '01/04/2022', '01/06/2022', '01/08/2022', '01/10/2022', '01/12/2022', '01/14/2022',
                '01/16/2022', '01/18/2022', '01/20/2022', '01/22/2022', '01/24/2022', '01/26/2022', '01/28/2022', '01/30/2022'
            ],
            markers: {
                size: 0
            },
            xaxis: {
                type: 'datetime'
            },

            tooltip: {
                shared: true,
                intersect: false,
                y: {
                    formatter: function (y) {
                        if (typeof y !== "undefined") {
                            return y.toFixed(0) + " points";
                        }
                        return y;

                    }
                }
            }
        },

    });



    return (
        <>

            <div id="chart">
                <ReactApexChart
                    options={state.options}
                    series={state.series}
                    type="line" height={350} />
            </div>

        </>
    )
}

export default Areachart3