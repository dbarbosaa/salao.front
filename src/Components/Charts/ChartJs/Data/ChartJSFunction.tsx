import React from 'react';
import { Chart, ArcElement, Tooltip, Legend, registerables } from 'chart.js';
Chart.register(...registerables, ArcElement, Tooltip, Legend);
import { Line, Bar, Doughnut, Pie } from 'react-chartjs-2';
// import {  } from 'chart.js';

//Line Chart

export const LineOption:any = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            labels: {
                display: false
            }
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
};

export const LineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {

            scales: {
                y: {

                    grid: {
                        display: true,
                        color: 'rgba(227, 229,235,0.1)',
                        drawBorder: false
                    },
                },
                x: {
                    ticks: {
                        beginAtZero: true,
                        fontSize: 11,
                        fontColor: "rgba(227, 229,235,0.1)",
                    },
                    grid: {
                        display: true,
                        color: 'rgba(227, 229,235,0.1)',
                        drawBorder: false
                    },
                }
            },
            label: 'Profits',
            data: [12, 15, 18, 40, 35, 38, 32, 20, 25, 15, 25, 30, 80],
            borderColor: '#f7557a ',
            borderWidth: 1,
            fill: false
        },
        {
            label: 'Expenses',
            data: [10, 20, 25, 55, 50, 45, 35, 30, 45, 35, 55, 40],
            borderColor: '#007bff',
            borderWidth: 1,
            fill: false
        },
    ],
};
export function LineChart() {
    return <Line options={LineOption} data={LineData} height='100px' />;
};

//Area Chart

export const AreaOptions:any = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
            display: false,
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
};

export const AreaData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            label: 'Data1',
            data: [12, 15, 18, 40, 35, 38, 32, 20, 25, 15, 25, 30],
            borderColor: '#f7557a',
            fill: true,
            borderWidth: 1,
        },
        {
            label: 'Data2',
            data: [10, 20, 25, 55, 50, 45, 35, 37, 45, 35, 55, 40, 80],
            borderColor: '#007bff',
            pointHighlightStroke: "#05c3fb",
            fill: true,
            borderWidth: 1,
        },
    ],
};

export function AreaChart() {
    return <Line options={AreaOptions} data={AreaData} height='100px' />;
};

//Stacked BarChart

export const StackOption:any = {
    tooltips: {
        displayColors: true,
        callbacks: {
            mode: 'x',
        },
    },
    plugins: {
        legend: {
            display: false,
            position: 'right',
        }
    },
    scales: {
        x: {
            stacked: true,
            gridLines: {
                display: false,
            }
        },
        y: {
            stacked: true,
            ticks: {
                beginAtZero: true,
            },
            type: 'linear',
        }
    },
    responsive: true,
    maintainAspectRatio: false,
    legend: { position: 'bottom', display: false },
}

export const StackData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
        label: 'Data1',
        backgroundColor: "#007bff",
        data: [10, 24, 20, 25, 35, 50],
        barPercentage: 0.5,
        borderWidth: 1,
    }, {
        label: 'Data2',
        backgroundColor: "#58a2f1",
        data: [10, 24, 20, 25, 35, 50],
        barPercentage: 0.5,
        borderWidth: 1,
    }, {
        label: 'Data3',
        backgroundColor: "#c9e1fb",
        data: [20, 30, 28, 33, 45, 65],
        barPercentage: 0.5,
        borderWidth: 1,
    }],
}
export function StackedBarChart() {
    return <Bar options={StackOption} data={StackData} height='100px' />;
};

//Horizontal Stacked BarChart

export const HoriOption:any = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    tooltips: {
        displayColors: true,
    },
    scales: {
        x: {
            stacked: true,
            gridLines: {
                display: false,
            }
        },
        y: {
            stacked: true,
            ticks: {
                beginAtZero: true,
            },
        }
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
            position: 'right',
        },
        title: {
            display: false,

        },
    },
}

export const HoriData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
        label: 'Data1',
        backgroundColor: "#007bff",
        data: [10, 24, 20, 25, 35, 50],
        fill: true,
        borderWidth: 1,
    }, {
        label: 'Data2',
        backgroundColor: "#58a2f1",
        data: [10, 24, 20, 25, 35, 50],
        fill: true,
        borderWidth: 1,
    }, {
        label: 'Data3',
        backgroundColor: "#c9e1fb",
        data: [20, 30, 28, 33, 45, 65],
        fill: true,
        borderWidth: 1,
    }],
}
export function HoriStackedBarChart() {
    return <Bar options={HoriOption} data={HoriData} height='100px' />;
};

//Colored BarChart Start******

//Solid Color

export const BarOption1:any = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            labels: {
                display: false
            }
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
};

export const BarData1 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
        {
            scales: {
                y: {
                    ticks: {
                        beginAtZero: true,
                        fontSize: 10,
                        max: 80,
                        fontColor: "rgba(171, 167, 167,0.9)",
                    },
                    grid: {
                        display: true,
                        color: 'rgba(171, 167, 167,0.2)',
                        drawBorder: false
                    },
                },
                x: {
                    barPercentage: 0.6,
                    ticks: {
                        beginAtZero: true,
                        fontSize: 11,
                        fontColor: "rgba(171, 167, 167,0.9)",
                    },
                    grid: {
                        display: true,
                        color: 'rgba(171, 167, 167,0.2)',
                        drawBorder: false
                    },
                }
            },
            label: '# of Votes',
            data: [12, 39, 20, 10, 25, 18],
            backgroundColor: '#285cf7 ',
            borderWidth: 1,
            fill: false,
        }
    ],
};
export function Solid() {
    return <Bar options={BarOption1} data={BarData1} />;
};


//Transparency

export const BarOption2:any = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            labels: {
                display: false
            }
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
};

export const BarData2 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
        {
            scales: {
                y: {
                    ticks: {
                        beginAtZero: true,
                        fontSize: 10,
                        max: 80,
                        fontColor: "rgba(171, 167, 167,0.9)",
                    },
                    grid: {
                        display: true,
                        color: 'rgba(171, 167, 167,0.2)',
                        drawBorder: false
                    },
                },
                x: {
                    barPercentage: 0.6,
                    ticks: {
                        beginAtZero: true,
                        fontSize: 11,
                        fontColor: "rgba(171, 167, 167,0.9)",
                    },
                    grid: {
                        display: true,
                        color: 'rgba(171, 167, 167,0.2)',
                        drawBorder: false
                    },
                }
            },
            label: '# of Votes',
            data: [12, 39, 20, 10, 25, 18],
            backgroundColor: 'rgba(0,123,255,.5)',
            borderWidth: 1,
            fill: false,
        }
    ],
};
export function Transparency() {
    return <Bar options={BarOption2} data={BarData2} />;
};


//GRADIENT

export const BarOption3:any = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            labels: {
                display: false
            }
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
};

export const BarData3 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
        {
            scales: {
                y: {
                    ticks: {
                        beginAtZero: true,
                        fontSize: 10,
                        max: 80,
                        fontColor: "rgba(171, 167, 167,0.9)",
                    },
                    grid: {
                        display: true,
                        color: 'rgba(171, 167, 167,0.2)',
                        drawBorder: false
                    },
                },
                x: {
                    barPercentage: 0.6,
                    ticks: {
                        beginAtZero: true,
                        fontSize: 11,
                        fontColor: "rgba(171, 167, 167,0.9)",
                    },
                    grid: {
                        display: true,
                        color: 'rgba(171, 167, 167,0.2)',
                        drawBorder: false
                    },
                }
            },
            label: '# of Votes',
            data: [12, 39, 20, 10, 25, 18],
            backgroundColor: ["#f10075","#285cf7","#f7557a","#673ab7","#7987a1","#7571f9"],
            borderWidth: 1,
            fill: false,
        }
    ],
};
export function Gradient() {

    return <Bar options={BarOption3} data={BarData3} />;
};

//Colored BarChart End******


//HORIZONTAL BAR CHART

export const Baroptions:any = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
            display: false,
        },
        title: {
            display: false,
            text: 'Chart.js Horizontal Bar Chart',
        },
    },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

export const Bardata = {
    labels,
    datasets: [
        {
            label: '# of Votes',
            data: [12, 39, 20, 10, 25, 18, 80],
            backgroundColor: ['#285cf7', '#f10075', '#f7557a', '#673ab7', '#ffc107', '#7987a1'],
        }
    ],
};

export function HoriBarChart() {
    return <Bar options={Baroptions} data={Bardata} height='120px' />;
}

//HORIZONTAL GROUPED BAR CHART


export const BarGroupedOptions:any = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    tooltips: {
        displayColors: true,
    },
    scales: {
        x: {
            stacked: false,
            gridLines: {
                display: false,
            }
        },
        y: {
            stacked: false,
            ticks: {
                beginAtZero: true,
            },
        }
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
            position: 'right',
        },
        title: {
            display: false,

        },
    },
}

export const BarGroupedData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
        label: '# of Votes',
        data: [12, 39, 20, 10, 25, 18],
        backgroundColor: ['#285cf7', '#f10075', '#673ab7', '#ffc107', '#7987a1', '#7571f9']
    },
    {
        data: [22, 30, 25, 30, 20, 40, 80],
        backgroundColor: 'rgba(0,123,255,.5)'
    }
    ],
}
export function HoriGroupedChart() {
    return <Bar options={BarGroupedOptions} data={BarGroupedData} height='100px' />;
};

//Doughnut CHART

export const DoughnutOptions:any = {

    plugins: {
        legend: {
            display: false,
            position: 'right',
        },
    }
}
export const Doughnutdata = {

    labels: [ 'Blue', 'Red', 'Purple', 'Info', 'Green'],
    datasets: [
        {
            label: '# of Votes',

            data: [20, 20, 30, 5, 25],
            backgroundColor: ['#285cf7', '#f10075', '#8500ff', '#7987a1', '#74de00']
        },
    ],
};

export function DoughnutChart() {
    return <Doughnut data={Doughnutdata} options={DoughnutOptions} />;
}

//Pie Chart

export const PieOptions:any = {

    plugins: {
        legend: {
            display: false,
            position: 'right',
        },
    }
}


export const PieData = {
    labels: [ 'Blue', 'Red', 'Purple', 'Info', 'Green'],
    datasets: [
        {
            label: '# of Votes',
            data: [20, 20, 30, 5, 25],
            backgroundColor: ['#285cf7', '#f10075', '#8500ff', '#7987a1', '#74de00']
        },
    ],
};

export function PieChart() {
    return <Pie data={PieData} options={PieOptions} />;
}
