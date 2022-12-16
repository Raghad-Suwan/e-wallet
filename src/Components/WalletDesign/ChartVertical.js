
import React, { useState } from 'react';
import { Chart } from 'primereact/chart';
 import './ChartsAndDraw.css';


const BarChartDemo = () => {
    const [basicData] = useState({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label:'Deposit',
                backgroundColor: '#207c8a',
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label:'Withdraw',
                backgroundColor: '#FAAF5B',
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    });



    const getLightTheme = () => {
        let basicOptions = {
            maintainAspectRatio: false,
            aspectRatio:1,
            plugins: {
                legend: {
                    labels: {
                        color: '#000000'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#000000'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#000000'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };

      

        let multiAxisOptions = {
            maintainAspectRatio: false,
            aspectRatio: .8,
            plugins: {
                legend: {
                    labels: {
                        color: '#207c8a'
                    }
                },
                tooltips: {
                    mode: 'index',
                    intersect: true
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#207c8a'
                    },
                    grid: {
                        color: '#FAAF5B'
                    }
                },
                y: {
                    type:'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        min: 0,
                        max:100,
                        color: '#207c8a'
                    },
                    grid: {
                        color: '#FAAF5B'
                    }
                },
                y1: {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    grid: {
                        drawOnChartArea: false,
                        color: '#ebedef'
                    },
                    ticks: {
                        min: 0,
                        max: 100,
                        color: '#ebedef'
                    }
                }
            }
        };

        return {
            basicOptions,
            multiAxisOptions
        }
    }

    const { basicOptions} = getLightTheme();

    return (

        
         <div className="chart-malak">
             <Chart type="bar" data={basicData} options={basicOptions}/>
         </div>
     
 );
}
export default BarChartDemo;  