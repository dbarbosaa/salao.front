
import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Button } from 'react-bootstrap';


//Area Chart Start****

export class BasicAreaChart extends Component<{}, { options: any, series: any, }> {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'series1',
                data: [31, 40, 28, 51, 42, 109, 100],
                color: '#8ba3ea'
            }, {
                name: 'series2',
                data: [11, 32, 45, 32, 34, 52, 41],
                color: '#c1c3f1'
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'area'
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'datetime',
                    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                },
            },


        };
    }

    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
            </div>
        )
    }
};


export class StackedChart extends Component<{}, { options: any, series: any, }> {
    constructor(props) {
        super(props);

        this.state = {

            series: [
                {
                    name: 'South',
                    data: [120, 232, 301, 434, 290, 130, 410]
                },
                {
                    name: 'North',
                    data: [520, 432, 601, 634, 390, 330, 520]
                },
                {
                    name: 'Central',
                    data: [220, 182, 191, 234, 290, 330, 310]
                }
            ],
            options: {
                chart: {
                    type: 'area',
                    height: 350,
                    stacked: true

                },
                colors: ['#f1b7c4', '#8a9ce4', '#c1c2f0'],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        opacityFrom: 0.6,
                        opacityTo: 0.8,
                    }
                },
                legend: {
                    position: 'bottom',
                    horizontalAlign: 'center'
                }
            },


        };
    }

    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
            </div>
        )
    }
};


export class NagetiveArea extends Component<{}, { options: any, series: any, }> {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'north',
                data: [{
                    x: 1996,
                    y: 322
                },
                {
                    x: 1997,
                    y: 324
                },
                {
                    x: 1998,
                    y: 329
                },
                {
                    x: 1999,
                    y: 342
                },
                {
                    x: 2000,
                    y: 348
                },
                {
                    x: 2001,
                    y: 334
                },
                {
                    x: 2002,
                    y: 325
                },
                {
                    x: 2003,
                    y: 316
                },
                {
                    x: 2004,
                    y: 318
                },
                {
                    x: 2005,
                    y: 330
                },
                {
                    x: 2006,
                    y: 355
                },
                {
                    x: 2007,
                    y: 366
                },
                {
                    x: 2008,
                    y: 337
                },
                {
                    x: 2009,
                    y: 352
                },
                {
                    x: 2010,
                    y: 377
                },
                {
                    x: 2011,
                    y: 383
                },
                {
                    x: 2012,
                    y: 344
                },
                {
                    x: 2013,
                    y: 366
                },
                {
                    x: 2014,
                    y: 389
                },
                {
                    x: 2015,
                    y: 334
                }
                ]
            }, {
                name: 'south',
                data: [
                    {
                        x: 1996,
                        y: 162
                    },
                    {
                        x: 1997,
                        y: 90
                    },
                    {
                        x: 1998,
                        y: 50
                    },
                    {
                        x: 1999,
                        y: 77
                    },
                    {
                        x: 2000,
                        y: 35
                    },
                    {
                        x: 2001,
                        y: -45
                    },
                    {
                        x: 2002,
                        y: -88
                    },
                    {
                        x: 2003,
                        y: -120
                    },
                    {
                        x: 2004,
                        y: -156
                    },
                    {
                        x: 2005,
                        y: -123
                    },
                    {
                        x: 2006,
                        y: -88
                    },
                    {
                        x: 2007,
                        y: -66
                    },
                    {
                        x: 2008,
                        y: -45
                    },
                    {
                        x: 2009,
                        y: -29
                    },
                    {
                        x: 2010,
                        y: -45
                    },
                    {
                        x: 2011,
                        y: -88
                    },
                    {
                        x: 2012,
                        y: -132
                    },
                    {
                        x: 2013,
                        y: -146
                    },
                    {
                        x: 2014,
                        y: -169
                    },
                    {
                        x: 2015,
                        y: -184
                    }
                ]
            }],
            options: {
                chart: {
                    type: 'area',
                    height: 350
                },
                colors: ['#f1b7c4', '#8a9ce4'],
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },

                xaxis: {
                    type: 'datetime',
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    }
                },
                yaxis: {
                    tickAmount: 4,
                    floating: false,

                    labels: {
                        style: {
                            colors: '#8e8da4',
                        },
                        offsetY: -7,
                        offsetX: 0,
                    },
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false
                    }
                },
                fill: {
                    opacity: 0.5
                },
                tooltip: {
                    x: {
                        format: "yyyy",
                    },
                    fixed: {
                        enabled: false,
                        position: 'topRight'
                    }
                },
                grid: {
                    yaxis: {
                        lines: {
                            offsetX: -30
                        }
                    },
                    padding: {
                        left: 20
                    }
                }
            },


        };
    }

    render() {
        return (

            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={400} />
            </div>

        );
    }
}

export class DateTime extends Component<{}, { options: any, series: any, selection:any }> {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                data: [
                    [1327359600000, 30.95],
                    [1327446000000, 31.34],
                    [1327532400000, 31.18],
                    [1327618800000, 31.05],
                    [1327878000000, 31.00],
                    [1327964400000, 30.95],
                    [1328050800000, 31.24],
                    [1328137200000, 31.29],
                    [1328223600000, 31.85],
                    [1328482800000, 31.86],
                    [1328569200000, 32.28],
                    [1328655600000, 32.10],
                    [1328742000000, 32.65],
                    [1328828400000, 32.21],
                    [1329087600000, 32.35],
                    [1329174000000, 32.44],
                    [1329260400000, 32.46],
                    [1329346800000, 32.86],
                    [1329433200000, 32.75],
                    [1329778800000, 32.54],
                    [1329865200000, 32.33],
                    [1329951600000, 32.97],
                    [1330038000000, 33.41],
                    [1330297200000, 33.27],
                    [1330383600000, 33.27],
                    [1330470000000, 32.89],
                    [1330556400000, 33.10],
                    [1330642800000, 33.73],
                    [1330902000000, 33.22],
                    [1330988400000, 31.99],
                    [1331074800000, 32.41],
                    [1331161200000, 33.05],
                    [1331247600000, 33.64],
                    [1331506800000, 33.56],
                    [1331593200000, 34.22],
                    [1331679600000, 33.77],
                    [1331766000000, 34.17],
                    [1331852400000, 33.82],
                    [1332111600000, 34.51],
                    [1332198000000, 33.16],
                    [1332284400000, 33.56],
                    [1332370800000, 33.71],
                    [1332457200000, 33.81],
                    [1332712800000, 34.40],
                    [1332799200000, 34.63],
                    [1332885600000, 34.46],
                    [1332972000000, 34.48],
                    [1333058400000, 34.31],
                    [1333317600000, 34.70],
                    [1333404000000, 34.31],
                    [1333490400000, 33.46],
                    [1333576800000, 33.59],
                    [1333922400000, 33.22],
                    [1334008800000, 32.61],
                    [1334095200000, 33.01],
                    [1334181600000, 33.55],
                    [1334268000000, 33.18],
                    [1334527200000, 32.84],
                    [1334613600000, 33.84],
                    [1334700000000, 33.39],
                    [1334786400000, 32.91],
                    [1334872800000, 33.06],
                    [1335132000000, 32.62],
                    [1335218400000, 32.40],
                    [1335304800000, 33.13],
                    [1335391200000, 33.26],
                    [1335477600000, 33.58],
                    [1335736800000, 33.55],
                    [1335823200000, 33.77],
                    [1335909600000, 33.76],
                    [1335996000000, 33.32],
                    [1336082400000, 32.61],
                    [1336341600000, 32.52],
                    [1336428000000, 32.67],
                    [1336514400000, 32.52],
                    [1336600800000, 31.92],
                    [1336687200000, 32.20],
                    [1336946400000, 32.23],
                    [1337032800000, 32.33],
                    [1337119200000, 32.36],
                    [1337205600000, 32.01],
                    [1337292000000, 31.31],
                    [1337551200000, 32.01],
                    [1337637600000, 32.01],
                    [1337724000000, 32.18],
                    [1337810400000, 31.54],
                    [1337896800000, 31.60],
                    [1338242400000, 32.05],
                    [1338328800000, 31.29],
                    [1338415200000, 31.05],
                    [1338501600000, 29.82],
                    [1338760800000, 30.31],
                    [1338847200000, 30.70],
                    [1338933600000, 31.69],
                    [1339020000000, 31.32],
                    [1339106400000, 31.65],
                    [1339365600000, 31.13],
                    [1339452000000, 31.77],
                    [1339538400000, 31.79],
                    [1339624800000, 31.67],
                    [1339711200000, 32.39],
                    [1339970400000, 32.63],
                    [1340056800000, 32.89],
                    [1340143200000, 31.99],
                    [1340229600000, 31.23],
                    [1340316000000, 31.57],
                    [1340575200000, 30.84],
                    [1340661600000, 31.07],
                    [1340748000000, 31.41],
                    [1340834400000, 31.17],
                    [1340920800000, 32.37],
                    [1341180000000, 32.19],
                    [1341266400000, 32.51],
                    [1341439200000, 32.53],
                    [1341525600000, 31.37],
                    [1341784800000, 30.43],
                    [1341871200000, 30.44],
                    [1341957600000, 30.20],
                    [1342044000000, 30.14],
                    [1342130400000, 30.65],
                    [1342389600000, 30.40],
                    [1342476000000, 30.65],
                    [1342562400000, 31.43],
                    [1342648800000, 31.89],
                    [1342735200000, 31.38],
                    [1342994400000, 30.64],
                    [1343080800000, 30.02],
                    [1343167200000, 30.33],
                    [1343253600000, 30.95],
                    [1343340000000, 31.89],
                    [1343599200000, 31.01],
                    [1343685600000, 30.88],
                    [1343772000000, 30.69],
                    [1343858400000, 30.58],
                    [1343944800000, 32.02],
                    [1344204000000, 32.14],
                    [1344290400000, 32.37],
                    [1344376800000, 32.51],
                    [1344463200000, 32.65],
                    [1344549600000, 32.64],
                    [1344808800000, 32.27],
                    [1344895200000, 32.10],
                    [1344981600000, 32.91],
                    [1345068000000, 33.65],
                    [1345154400000, 33.80],
                    [1345413600000, 33.92],
                    [1345500000000, 33.75],
                    [1345586400000, 33.84],
                    [1345672800000, 33.50],
                    [1345759200000, 32.26],
                    [1346018400000, 32.32],
                    [1346104800000, 32.06],
                    [1346191200000, 31.96],
                    [1346277600000, 31.46],
                    [1346364000000, 31.27],
                    [1346709600000, 31.43],
                    [1346796000000, 32.26],
                    [1346882400000, 32.79],
                    [1346968800000, 32.46],
                    [1347228000000, 32.13],
                    [1347314400000, 32.43],
                    [1347400800000, 32.42],
                    [1347487200000, 32.81],
                    [1347573600000, 33.34],
                    [1347832800000, 33.41],
                    [1347919200000, 32.57],
                    [1348005600000, 33.12],
                    [1348092000000, 34.53],
                    [1348178400000, 33.83],
                    [1348437600000, 33.41],
                    [1348524000000, 32.90],
                    [1348610400000, 32.53],
                    [1348696800000, 32.80],
                    [1348783200000, 32.44],
                    [1349042400000, 32.62],
                    [1349128800000, 32.57],
                    [1349215200000, 32.60],
                    [1349301600000, 32.68],
                    [1349388000000, 32.47],
                    [1349647200000, 32.23],
                    [1349733600000, 31.68],
                    [1349820000000, 31.51],
                    [1349906400000, 31.78],
                    [1349992800000, 31.94],
                    [1350252000000, 32.33],
                    [1350338400000, 33.24],
                    [1350424800000, 33.44],
                    [1350511200000, 33.48],
                    [1350597600000, 33.24],
                    [1350856800000, 33.49],
                    [1350943200000, 33.31],
                    [1351029600000, 33.36],
                    [1351116000000, 33.40],
                    [1351202400000, 34.01],
                    [1351638000000, 34.02],
                    [1351724400000, 34.36],
                    [1351810800000, 34.39],
                    [1352070000000, 34.24],
                    [1352156400000, 34.39],
                    [1352242800000, 33.47],
                    [1352329200000, 32.98],
                    [1352415600000, 32.90],
                    [1352674800000, 32.70],
                    [1352761200000, 32.54],
                    [1352847600000, 32.23],
                    [1352934000000, 32.64],
                    [1353020400000, 32.65],
                    [1353279600000, 32.92],
                    [1353366000000, 32.64],
                    [1353452400000, 32.84],
                    [1353625200000, 33.40],
                    [1353884400000, 33.30],
                    [1353970800000, 33.18],
                    [1354057200000, 33.88],
                    [1354143600000, 34.09],
                    [1354230000000, 34.61],
                    [1354489200000, 34.70],
                    [1354575600000, 35.30],
                    [1354662000000, 35.40],
                    [1354748400000, 35.14],
                    [1354834800000, 35.48],
                    [1355094000000, 35.75],
                    [1355180400000, 35.54],
                    [1355266800000, 35.96],
                    [1355353200000, 35.53],
                    [1355439600000, 37.56],
                    [1355698800000, 37.42],
                    [1355785200000, 37.49],
                    [1355871600000, 38.09],
                    [1355958000000, 37.87],
                    [1356044400000, 37.71],
                    [1356303600000, 37.53],
                    [1356476400000, 37.55],
                    [1356562800000, 37.30],
                    [1356649200000, 36.90],
                    [1356908400000, 37.68],
                    [1357081200000, 38.34],
                    [1357167600000, 37.75],
                    [1357254000000, 38.13],
                    [1357513200000, 37.94],
                    [1357599600000, 38.14],
                    [1357686000000, 38.66],
                    [1357772400000, 38.62],
                    [1357858800000, 38.09],
                    [1358118000000, 38.16],
                    [1358204400000, 38.15],
                    [1358290800000, 37.88],
                    [1358377200000, 37.73],
                    [1358463600000, 37.98],
                    [1358809200000, 37.95],
                    [1358895600000, 38.25],
                    [1358982000000, 38.10],
                    [1359068400000, 38.32],
                    [1359327600000, 38.24],
                    [1359414000000, 38.52],
                    [1359500400000, 37.94],
                    [1359586800000, 37.83],
                    [1359673200000, 38.34],
                    [1359932400000, 38.10],
                    [1360018800000, 38.51],
                    [1360105200000, 38.40],
                    [1360191600000, 38.07],
                    [1360278000000, 39.12],
                    [1360537200000, 38.64],
                    [1360623600000, 38.89],
                    [1360710000000, 38.81],
                    [1360796400000, 38.61],
                    [1360882800000, 38.63],
                    [1361228400000, 38.99],
                    [1361314800000, 38.77],
                    [1361401200000, 38.34],
                    [1361487600000, 38.55],
                    [1361746800000, 38.11],
                    [1361833200000, 38.59],
                    [1361919600000, 39.60],
                ]
            }],
            options: {
                chart: {
                    id: 'area-datetime',
                    type: 'area',
                    height: 350,
                    zoom: {
                        autoScaleYaxis: true
                    }
                },
                colors: ['#8a9ce4'],
                annotations: {
                    yaxis: [{
                        y: 30,
                        borderColor: '#999',
                        label: {
                            show: true,
                            text: 'Support',
                            style: {
                                color: "#fff",
                                background: '#00E396'
                            }
                        }
                    }],
                    xaxis: [{
                        x: new Date('14 Nov 2012').getTime(),
                        borderColor: '#999',
                        yAxisIndex: 0,
                        label: {
                            show: true,
                            text: 'Rally',
                            style: {
                                color: "#fff",
                                background: '#775DD0'
                            }
                        }
                    }]
                },
                dataLabels: {
                    enabled: false
                },
                markers: {
                    size: 0,
                    style: 'hollow',
                },
                xaxis: {
                    type: 'datetime',
                    min: new Date('01 Mar 2012').getTime(),
                    tickAmount: 6,
                },
                tooltip: {
                    x: {
                        format: 'dd MMM yyyy'
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.7,
                        opacityTo: 0.9,
                        stops: [0, 100]
                    }
                },
            },

            selection: 'one_year',

        };
    }


    updateData(timeline) {
        this.setState({
            selection: timeline
        })

        switch (timeline) {
            case 'one_month':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('28 Jan 2013').getTime(),
                    new Date('27 Feb 2013').getTime()
                )
                break
            case 'six_months':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('27 Sep 2012').getTime(),
                    new Date('27 Feb 2013').getTime()
                )
                break
            case 'one_year':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('27 Feb 2012').getTime(),
                    new Date('27 Feb 2013').getTime()
                )
                break
            case 'ytd':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('01 Jan 2013').getTime(),
                    new Date('27 Feb 2013').getTime()
                )
                break
            case 'all':
                ApexCharts.exec(
                    'area-datetime',
                    'zoomX',
                    new Date('23 Jan 2012').getTime(),
                    new Date('27 Feb 2013').getTime()
                )
                break
            default:
        }
    }


    render() {
        return (

            <div id="chart">
                <div className="toolbar text-center">
                    <Button id="one_month"

                        onClick={() => this.updateData('one_month')} className={`${(this.state.selection === 'one_month' ? 'active' : '')}  mb-3 me-2`}>
                        1M
                    </Button>
                    &nbsp;
                    <Button id="six_months"

                        onClick={() => this.updateData('six_months')} className={`${(this.state.selection === 'six_months' ? 'active' : '')}  mb-3 me-2`}>
                        6M
                    </Button>
                    &nbsp;
                    <Button id="one_year"


                        onClick={() => this.updateData('one_year')} className={`${(this.state.selection === 'one_year' ? 'active' : '')}  mb-3 me-2`}>
                        1Y
                    </Button>
                    &nbsp;
                    <Button id="ytd"

                        onClick={() => this.updateData('ytd')} className={`${(this.state.selection === 'ytd' ? 'active' : '')}  mb-3 me-2`}>
                        YTD
                    </Button>
                    &nbsp;
                    <Button id="all"

                        onClick={() => this.updateData('all')} className={`${(this.state.selection === 'all' ? 'active' : '')}  mb-3 me-2`}>
                        ALL
                    </Button>
                </div>

                <div id="chart-timeline">
                    <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
                </div>
            </div>

        );
    }
}


//Bar Chart  Start******

// Basic Chart

export class BasicBarChart extends Component<{}, { options: any, series: any }> {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
                color: '#26a0fc'
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 350
                },
                plotOptions: {
                    bar: {
                        borderRadius: 4,
                        horizontal: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                }
            },


        };
    }



    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={400} />
            </div>

        )
    }
};

// Grouped Bar Chart

export class GroupedBarChart extends Component <{}, { options: any, series: any }> {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                data: [44, 55, 41, 64, 22, 43, 21],
                color: '#26a0fc'
            }, {
                data: [53, 32, 33, 52, 13, 44, 32],
                color: '#ff6178'
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 430
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        dataLabels: {
                            position: 'top',
                        },
                    }
                },
                dataLabels: {
                    enabled: true,
                    offsetX: -6,
                    style: {
                        fontSize: '12px',
                        colors: ['#fff']
                    }
                },
                stroke: {
                    show: true,
                    width: 1,
                    colors: ['#fff']
                },
                tooltip: {
                    shared: true,
                    intersect: false
                },
                xaxis: {
                    categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
                },
            },


        };
    }



    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={400} />
            </div>
        )
    }
};

// Stacked Bar

export class StackedBar extends Component<{}, { options: any, series: any }> {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Data 1',
                data: [44, 55, 41, 37, 22, 43, 21]
            }, {
                name: 'Data 2',
                data: [53, 32, 33, 52, 13, 43, 32]
            }, {
                name: 'Data 3',
                data: [12, 17, 11, 9, 15, 11, 20]
            }, {
                name: 'Data 4',
                data: [9, 7, 5, 8, 6, 9, 4]
            }, {
                name: 'Data 5',
                data: [25, 12, 19, 32, 25, 24, 10]
            }],
            options: {
                dataLabels: {
                    enabled: false,
                },
                chart: {
                    type: 'bar',
                    height: 350,
                    stacked: true,
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ['#fff']
                },

                xaxis: {
                    categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
                    labels: {
                        formatter: function (val) {
                            return val + "K"
                        }
                    }
                },
                yaxis: {
                    title: {
                        text: undefined
                    },
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val + "K"
                        }
                    }
                },
                fill: {
                    opacity: 1
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'left',
                    offsetX: 40
                }
            },


        };
    }

    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={430} />
            </div>

        )
    }
};


// Bar Chart with Nagetive Values

export class BarNagetiveValue extends Component<{}, { options: any, series: any }> {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Positive Value',
                data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5,
                    3.9, 3.5, 3
                ]
            },
            {
                name: 'Nagetive Value',
                data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4,
                -4.1, -4, -4.1, -3.4, -3.1, -2.8
                ]
            }
            ],
            options: {
                chart: {
                    type: 'bar',
                    height: 440,
                    stacked: true
                },
                colors: ['#008FFB', '#FF4560'],
                plotOptions: {
                    bar: {
                        horizontal: true,
                        barHeight: '80%',
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: 1,
                    colors: ["#fff"]
                },

                grid: {
                    xaxis: {
                        lines: {
                            show: false
                        }
                    }
                },
                yaxis: {
                    min: -5,
                    max: 5,
                    title: {
                        // text: 'Age',
                    },
                },
                tooltip: {
                    shared: false,
                    x: {
                        formatter: function (val) {
                            return val
                        }
                    },
                    y: {
                        formatter: function (val) {
                            return Math.abs(val) + "%"
                        }
                    }
                },

                xaxis: {
                    categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54',
                        '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9',
                        '0-4'
                    ],
                    title: {
                        text: 'Percent'
                    },
                    labels: {
                        formatter: function (val) {
                            return Math.abs(Math.round(val)) + "%"
                        }
                    }
                },
            },


        };
    }

    render() {
        return (

            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={430} />
            </div>
        )
    }
};

//Column Chart Start****

// Basic Column Chart

export class BasicColumn extends Component<{}, { options: any, series: any }> {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Data 1',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
                color: '#0074d9'
            }, {
                name: 'Data 2',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
                color: '#dc3545'
            }, {
                name: 'Data 3',
                data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
                color: '#fd7e14'
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 350
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '55%',
                        endingShape: 'rounded'
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                },
                fill: {
                    opacity: 1
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return "$ " + val + " thousands"
                        }
                    }
                }
            },


        };
    }

    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
            </div>

        )
    }
};


// Stacked Column Chart

export class StackedColumn extends Component<{}, { options: any, series: any }> {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Data A',
                data: [44, 55, 41, 67, 22, 43]
            }, {
                name: 'Data B',
                data: [13, 23, 20, 8, 13, 27]
            }, {
                name: 'Data C',
                data: [11, 17, 15, 15, 21, 14]
            }, {
                name: 'Data D',
                data: [21, 7, 25, 13, 22, 8]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 350,
                    stacked: true,
                    toolbar: {
                        show: true
                    },
                    zoom: {
                        enabled: true
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0
                        }
                    }
                }],
                plotOptions: {
                    bar: {
                        horizontal: false,
                        borderRadius: 10
                    },
                },
                xaxis: {
                    type: 'datetime',
                    categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
                        '01/05/2011 GMT', '01/06/2011 GMT'
                    ],
                },
                legend: {
                    position: 'right',
                    offsetY: 40
                },
                fill: {
                    opacity: 1
                }
            },


        };
    }



    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
            </div>
        )
    }
};


// Column Chart with Negative Values

export class ColumnNegativeValue extends Component<{}, { options: any, series: any }> {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07,
                    5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -
                    48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4
                ]
            }],
            options: {
                chart: {
                    type: 'bar',
                    height: 350
                },
                plotOptions: {
                    bar: {
                        colors: {
                            ranges: [{
                                from: -100,
                                to: -46,
                                color: '#F15B46'
                            }, {
                                from: -45,
                                to: 0,
                                color: '#FEB019'
                            }]
                        },
                        columnWidth: '80%',
                    }
                },
                dataLabels: {
                    enabled: false,
                },
                yaxis: {
                    labels: {
                        formatter: function (y) {
                            return y.toFixed(0) + "%";
                        }
                    }
                },
                xaxis: {
                    type: 'datetime',
                    categories: [
                        '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
                        '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
                        '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01',
                        '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01',
                        '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01',
                        '2013-07-01', '2013-08-01', '2013-09-01'
                    ],
                    labels: {
                        rotate: -90
                    }
                }
            },


        };
    }

    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
            </div>
        )
    }
};

// Column with Markers

export class ColumnMarker extends Component<{}, { options: any, series: any }> {
    constructor(props) {
        super(props);

        this.state = {

            series: [
                {
                    name: 'Actual',
                    data: [
                        {
                            x: '2011',
                            y: 1292,
                            goals: [
                                {
                                    name: 'Expected',
                                    value: 1400,
                                    strokeHeight: 5,
                                    strokeColor: '#775DD0'
                                }
                            ]
                        },
                        {
                            x: '2012',
                            y: 4432,
                            goals: [
                                {
                                    name: 'Expected',
                                    value: 5400,
                                    strokeHeight: 5,
                                    strokeColor: '#775DD0'
                                }
                            ]
                        },
                        {
                            x: '2013',
                            y: 5423,
                            goals: [
                                {
                                    name: 'Expected',
                                    value: 5200,
                                    strokeHeight: 5,
                                    strokeColor: '#775DD0'
                                }
                            ]
                        },
                        {
                            x: '2014',
                            y: 6653,
                            goals: [
                                {
                                    name: 'Expected',
                                    value: 6500,
                                    strokeHeight: 5,
                                    strokeColor: '#775DD0'
                                }
                            ]
                        },
                        {
                            x: '2015',
                            y: 8133,
                            goals: [
                                {
                                    name: 'Expected',
                                    value: 6600,
                                    strokeHeight: 13,
                                    strokeWidth: 0,
                                    strokeLineCap: 'round',
                                    strokeColor: '#775DD0'
                                }
                            ]
                        },
                        {
                            x: '2016',
                            y: 7132,
                            goals: [
                                {
                                    name: 'Expected',
                                    value: 7500,
                                    strokeHeight: 5,
                                    strokeColor: '#775DD0'
                                }
                            ]
                        },
                        {
                            x: '2017',
                            y: 7332,
                            goals: [
                                {
                                    name: 'Expected',
                                    value: 8700,
                                    strokeHeight: 5,
                                    strokeColor: '#775DD0'
                                }
                            ]
                        },
                        {
                            x: '2018',
                            y: 6553,
                            goals: [
                                {
                                    name: 'Expected',
                                    value: 7300,
                                    strokeHeight: 2,
                                    strokeDashArray: 2,
                                    strokeColor: '#775DD0'
                                }
                            ]
                        }
                    ]
                }
            ],
            options: {
                chart: {
                    height: 350,
                    type: 'bar'
                },
                plotOptions: {
                    bar: {
                        columnWidth: '60%'
                    }
                },
                colors: ['#00E396'],
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: true,
                    showForSingleSeries: true,
                    customLegendItems: ['Actual', 'Expected'],
                    markers: {
                        fillColors: ['#00E396', '#775DD0']
                    }
                }
            },


        };
    }

    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
            </div>


        );
    }
}

// Line Chart Start*******

// Basic Chart

export class BasicChart extends Component<{}, { options: any, series: any }> {
    constructor(props) {
        super(props);

        this.state = {

            series: [{

                data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
                color: '#26a0fc'
            }],
            options: {
                chart: {
                    height: 225,
                    type: 'line',
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },

                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                },
                tooltip: {

                    color: '#000'
                }
            },

        };
    }
    render() {
        return (

            <div id="chart">

                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />

            </div>

        )
    }
};

// Stepline chart

export class Stepline extends Component<{}, { options: any, series: any }> {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58],
                color: '#2d7dec'
            }],
            options: {
                chart: {
                    type: 'line',
                    height: 350
                },
                stroke: {
                    curve: 'stepline',
                },
                dataLabels: {
                    enabled: false
                },
                markers: {
                    hover: {
                        sizeOffset: 4
                    }
                }
            },


        };
    }
    render() {
        return (

            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
            </div>

        )
    }
};

// Dashed line Chart with Gradient color

export class Dashedline extends Component<{}, { options: any, series: any }> {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Sales',
                data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                },
                forecastDataPoints: {
                    count: 7
                },
                stroke: {
                    width: 5,
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'datetime',
                    categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
                    tickAmount: 10,
                    labels: {
                        formatter: function (value, timestamp, opts) {
                            return opts.dateFormatter(new Date(timestamp), 'dd MMM')
                        }
                    }
                },
                title: {
                    style: {
                        fontSize: "16px",
                        color: '#666'
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        gradientToColors: ['#FDD835'],
                        shadeIntensity: 1,
                        type: 'horizontal',
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100, 100, 100]
                    },
                },
                yaxis: {
                    min: -10,
                    max: 40
                }
            },


        };
    }



    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
            </div>

        )
    }
};

// Real time Chart


export class Annotation extends Component<{}, { options: any, series: any }> {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    id: 'areachart-2'
                },
                annotations: {
                    yaxis: [{
                        y: 49,
                        borderColor: '#00E396',
                        label: {
                            borderColor: '#00E396',
                            style: {
                                color: '#fff',
                                background: '#00E396',
                            },
                            text: 'Support',
                        }
                    }, {
                        y: 69,
                        y2: 91,
                        borderColor: '#000',
                        fillColor: '#FEB019',
                        opacity: 0.2,
                        label: {
                            borderColor: '#333',
                            style: {
                                fontSize: '10px',
                                color: '#333',
                                background: '#FEB019',
                            },
                            text: 'Y-axis range',
                        }
                    }],
                    xaxis: [{
                        x: new Date('27 Nov').getTime(),
                        strokeDashArray: 0,
                        borderColor: '#775DD0',
                        label: {
                            borderColor: '#775DD0',
                            style: {
                                color: '#fff',
                                background: '#775DD0',
                            },
                            text: 'Anno Test',
                        }
                    }, {
                        x: new Date('8 Dec').getTime(),
                        x2: new Date('12 Dec').getTime(),
                        fillColor: '#B3F7CA',
                        opacity: 0.4,
                        label: {
                            borderColor: '#B3F7CA',
                            style: {
                                fontSize: '10px',
                                color: '#fff',
                                background: '#00E396',
                            },
                            offsetY: -10,
                            text: 'X-axis range',
                        }
                    }]
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                grid: {
                    padding: {
                        right: 30,
                        left: 20
                    }
                },

                labels: ['13 Nov', '16 Nov', '19 Nov', '22 Nov', '25 Nov', '28 Nov', '17 Dec', '22 Dec', '27 Dec'],
                xaxis: {
                    type: 'datetime',
                },
            },


        };
    }



    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
            </div>


        );
    }
}


//Mixed Chart Start

// Line Column Chart

export class LineColumn extends Component<{}, { options: any, series: any }> {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Data 1',
                type: 'column',
                data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
                color: '#285cf7'
            }, {
                name: 'Data 2',
                type: 'line',
                data: [201, 352, 752, 320, 257, 160, 440, 505, 414, 671, 227],
                color: '#f7557a'
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                },
                stroke: {
                    width: [0, 4]
                },
                dataLabels: {
                    enabled: false,
                    enabledOnSeries: [1]
                },
                labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
                xaxis: {
                    type: 'datetime'
                },
                yaxis: [{


                }]
            },


        };
    }
    render() {
        return (


            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
            </div>
        )
    }
};


// Multiple Y-Axis

export class MultipleSeries extends Component<{}, { options: any, series: any }> {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Data 1',
                type: 'column',
                data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
                color: '#f7557a'
            }, {
                name: 'Data 2',
                type: 'column',
                data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
                color: '#285cf7'
            }, {
                name: 'Data 3',
                type: 'line',
                data: [20, 29, 37, 36, 44, 45, 50, 58],
                color: '#4ecc48'
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    stacked: false
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    width: [1, 1, 4]
                },
                xaxis: {
                    categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
                },
                yaxis: [
                    {
                        axisTicks: {
                            show: true,
                        },
                        axisBorder: {
                            show: true,
                            color: '#008FFB'
                        },
                        labels: {
                            style: {
                                colors: '#008FFB',
                            }
                        },
                        title: {
                            text: "Y-axis series 1",
                            style: {
                                color: '#008FFB',
                            }
                        },
                        tooltip: {
                            enabled: true
                        }
                    },
                    {
                        seriesName: 'Income',
                        opposite: true,
                        axisTicks: {
                            show: true,
                        },
                        axisBorder: {
                            show: true,
                            color: '#00E396'
                        },
                        labels: {
                            style: {
                                colors: '#00E396',
                            }
                        },
                        title: {
                            text: "Y-axis series 2",
                            style: {
                                color: '#00E396',
                            }
                        },
                    },
                    {
                        seriesName: 'Revenue',
                        opposite: true,
                        axisTicks: {
                            show: true,
                        },
                        axisBorder: {
                            show: true,
                            color: '#FEB019'
                        },
                        labels: {
                            style: {
                                colors: '#FEB019',
                            },
                        },
                        title: {
                            text: "Y-axis series 3",
                            style: {
                                color: '#FEB019',
                            }
                        }
                    },
                ],
                tooltip: {
                    fixed: {
                        enabled: true,
                        position: 'topLeft',
                        offsetY: 30,
                        offsetX: 60
                    },
                },
                legend: {
                    horizontalAlign: 'left',
                    offsetX: 40
                }
            },


        };
    }

    render() {
        return (

            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
            </div>

        );
    }
}


// Line & Area


export class LineandAreaChart extends Component<{}, { options: any, series: any }> {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Data A',
                type: 'area',
                data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33],
                color: '#285cf7'
            }, {
                name: 'Data B',
                type: 'line',
                data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43],
                color: '#f7557a'
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                },
                stroke: {
                    curve: 'smooth'
                },
                fill: {
                    type: 'solid',
                    opacity: [0.35, 1],
                },
                labels: ['Dec 01', 'Dec 02', 'Dec 03', 'Dec 04', 'Dec 05', 'Dec 06', 'Dec 07', 'Dec 08', 'Dec 09 ', 'Dec 10', 'Dec 11'],
                markers: {
                    size: 0
                },
                yaxis: [


                ],
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


        };
    }

    render() {
        return (

            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
            </div>

        );
    }
}


// Line Column Area

export class LineColumnArea extends Component<{}, { options: any, series: any }> {
    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Data A',
                type: 'column',
                data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                color: '#f7557a'
            }, {
                name: 'Data B',
                type: 'area',
                data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                color: '#285cf7'
            }, {
                name: 'Data C',
                type: 'line',
                data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                color: '#4ecc48'
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    stacked: false,
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
                        inverseColors: false,
                        shade: 'light',
                        type: "vertical",
                        opacityFrom: 0.85,
                        opacityTo: 0.55,
                        stops: [0, 100, 100, 100]
                    }
                },
                labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
                    '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],

                markers: {
                    size: 0
                },
                xaxis: {
                    type: 'datetime'
                },
                yaxis: {

                    min: 0
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
        };
    }

    render() {
        return (

            <div id="chart">
                <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
            </div>


        );
    }
}