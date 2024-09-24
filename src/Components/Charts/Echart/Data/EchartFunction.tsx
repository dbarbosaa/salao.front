import React from 'react';
import ReactECharts from 'echarts-for-react';

//Data Attributes

export function DataAttr() {
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line'
            }
        },
        grid: {
            top: '6',
            right: '0',
            bottom: '17',
            left: '25',
        },
        xAxis: [
            {
                type: 'category',
                data: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Sales',
                type: 'bar',
                stack: 'Stack',
                barMaxWidth: 20,
                color: '#f7557a',
                emphasis: {
                    focus: 'series'
                },
                data: [10, 15, 9, 18, 10, 15]
            },
            {
                name: 'Profit',
                type: 'bar',
                stack: 'Stack',
                barMaxWidth: 20,
                color: '#285cf7',
                emphasis: {
                    focus: 'series'
                },
                data: [10, 14, 10, 15, 9, 25]
            },
        ]
    };

    return (<ReactECharts className="chartsh " option={option} />);
};

//Data Attributes2

export function DataAttribute() {
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line'
            }
        },
        grid: {
            top: '6',
            right: '10',
            bottom: '17',
            left: '32',
        },
        xAxis: [
            {
                type: 'value',

            }
        ],
        yAxis: [
            {
                type: 'category',
                data: ['2013', '2014', '2015', '2016', '2017', '2018', '2019'],
            }
        ],
        series: [
            {
                name: 'Sales',
                type: 'bar',
                stack: 'Stack',
                barMaxWidth: 20,
                color: '#f7557a',
                emphasis: {
                    focus: 'series'
                },
                data: [10, 15, 9, 18, 10, 15]
            },
            {
                name: 'Profit',
                type: 'bar',
                stack: 'Stack',
                barMaxWidth: 20,
                color: '#285cf7',
                emphasis: {
                    focus: 'series'
                },
                data: [10, 14, 10, 15, 9, 25]
            },
        ]
    };

    return (<ReactECharts className="chartsh " option={option} />);
};

//BAR CHART

export function BarChart() {
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line'
            }
        },
        grid: {
            top: '6',
            right: '0',
            bottom: '17',
            left: '25',
        },
        xAxis: [
            {
                type: 'category',
                data: ['2014', '2015', '2016', '2017', '2018', '2019'],
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'sales',
                type: 'bar',
                barMaxWidth: 20,
                color: '#f7557a',
                emphasis: {
                    focus: 'series'
                },
                data: [10, 15, 9, 18, 10, 15]
            },
            {
                name: 'growth',
                type: 'bar',
                barMaxWidth: 20,
                color: '#285cf7',
                emphasis: {
                    focus: 'series'
                },
                data: [10, 14, 10, 15, 9, 25]
            },
        ]
    };

    return (<ReactECharts className="chartsh " option={option} />);
};

//VERTICAL BAR CHART

export function VerticalBarChart() {
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line'
            }
        },
        grid: {
            top: '6',
            right: '0',
            bottom: '17',
            left: '25',
        },
        xAxis: [
            {
                type: 'value',

            }
        ],
        yAxis: [
            {
                type: 'category',
                data: ['2014', '2015', '2016', '2017', '2018', '2019'],
            }
        ],
        series: [
            {
                name: 'sales',
                type: 'bar',
                barMaxWidth: 20,
                color: '#f7557a',
                emphasis: {
                    focus: 'series'
                },
                data: [10, 15, 9, 18, 10, 15]
            },
            {
                name: 'growth',
                type: 'bar',
                barMaxWidth: 20,
                color: '#285cf7',
                emphasis: {
                    focus: 'series'
                },
                data: [10, 14, 10, 15, 9, 25]
            },
        ]
    };

    return (<ReactECharts className="chartsh " option={option} />);
};

//Line CHART

export function LineChart() {
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line'
            }
        },
        grid: {
            top: '6',
            right: '0',
            bottom: '17',
            left: '25',
        },
        xAxis: [
            {
                type: 'category',
                data: ['2014', '2015', '2016', '2017', '2018', '2019'],
            }
        ],
        yAxis: [
            {
                type: 'value',

            }
        ],
        series: [
            {
                name: 'sales',
                type: 'line',
                barMaxWidth: 20,
                color: '#f7557a',
                smooth: true,
                emphasis: {
                    focus: 'series'
                },
                data: [10, 15, 9, 18, 10, 15]
            },
            {
                name: 'growth',
                type: 'line',
                barMaxWidth: 20,
                color: '#285cf7',
                smooth: true,
                emphasis: {
                    focus: 'series'
                },
                data: [10, 14, 10, 15, 9, 25]
            },
        ]
    };

    return (<ReactECharts className="chartsh " option={option} />);
};

//VERTICAL Line CHART

export function VerticalLineChart() {
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line'
            }
        },
        grid: {
            top: '6',
            right: '0',
            bottom: '17',
            left: '25',
        },
        xAxis: [
            {
                type: 'value',

            }
        ],
        yAxis: [
            {
                type: 'category',
                data: ['2014', '2015', '2016', '2017', '2018', '2019'],
            }
        ],
        series: [
            {
                name: 'sales',
                type: 'line',
                barMaxWidth: 20,
                color: '#f7557a',
                smooth: true,
                emphasis: {
                    focus: 'series'
                },
                data: [10, 15, 9, 18, 10, 15]
            },
            {
                name: 'growth',
                type: 'line',
                barMaxWidth: 20,
                color: '#285cf7',
                smooth: true,
                emphasis: {
                    focus: 'series'
                },
                data: [10, 14, 10, 15, 9, 25]
            },
        ]
    };

    return (<ReactECharts className="chartsh " option={option} />);
};

//Data Attributes3

export function DataLineChart() {
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line'
            }
        },
        grid: {
            top: '6',
            right: '0',
            bottom: '17',
            left: '25',
        },
        xAxis: [
            {
                type: 'category',
                data: ['2013', '2014', '2015', '2016', '2017', '2018'],
            }
        ],
        yAxis: [
            {
                type: 'value',
            }
        ],
        series: [
            {
                name: 'sales',
                type: 'line',
                barMaxWidth: 20,
                color: '#f7557a',
                emphasis: {
                    focus: 'series'
                },
                data: [10, 15, 9, 18, 10, 15]
            }
        ]
    };

    return (<ReactECharts className="chartsh " option={option} />);
};

//Data Attributes4

export function SmoothLineChart() {
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line'
            }
        },
        grid: {
            top: '6',
            right: '0',
            bottom: '17',
            left: '25',
        },
        xAxis: [
            {
                type: 'category',
                data: ['2013', '2014', '2015', '2016', '2017', '2018'],
            }
        ],
        yAxis: [
            {
                type: 'value',
            }
        ],
        series: [
            {
                name: 'sales',
                type: 'line',
                barMaxWidth: 20,
                color: '#285cf7',
                smooth: true,
                emphasis: {
                    focus: 'series'
                },
                data: [10, 15, 9, 18, 10, 15]
            }
        ]
    };

    return (<ReactECharts className="chartsh " option={option} />);
};

//Data Attributes5

export function DataChart() {
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line'
            }
        },
        toolbox: {
            show: true,
            feature: {
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        calculable: true,
        grid: {
            x: 40,
            y: 20,
            x2: 40,
            y2: 20
        },
        xAxis: [
            {
                type: 'category',
                data: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            }
        ],
        yAxis: [
            {
                type: 'value',
            }
        ],
        series: [
            {
                name: 'View Price',
                type: 'bar',
                barMaxWidth: 20,
                color: '#285cf7',
                smooth: true,
                emphasis: {
                    focus: 'series'
                },
                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                markPoint: {
                    data: [
                        { type: 'max', name: 'Max' },
                        { type: 'min', name: 'Min' }
                    ]
                },
                markLine: {
                    data: [{ type: 'average', name: '' }]
                }
            },
            {
                name: 'Purchased Price',
                type: 'bar',
                barMaxWidth: 20,
                color: '#f7557a',
                smooth: true,
                emphasis: {
                    focus: 'series'
                },
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                markPoint: {
                    data: [
                        { name: 'Purchased Price', value: 182.2, xAxis: 7, yAxis: 183 },
                        { name: 'Purchased Price', value: 2.3, xAxis: 11, yAxis: 3 }
                    ]
                },
                markLine: {
                    data: [{ type: 'average', name: '' }]
                }
            }
        ]
    };

    return (<ReactECharts className="chartsh " option={option} />);
};