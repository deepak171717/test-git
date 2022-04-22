import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

const Archart = () => {

    const [state, setState] = useState({



        series: [
            {
            name: 'TEAM B',
            type: 'area',
            data: [44, 55, 41, 67, 22, 43, 21,]
        }, ],
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
                    stops: [0, 100, 100, 100]
                }
            },
            labels: ['02/11/2022', '02/12/2022', '02/13/2022', '02/14/2022', '02/15/2022', '02/16/2022', '02/17/2022'],
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

export default Archart;