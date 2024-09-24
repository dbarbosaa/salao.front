import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

//Line Chart
export class LineChart extends Component <{}, { options:any, series:any }> {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        data: [3, 4, 4, 7, 5, 9, 10, 6, 4, 4, 7, 5, 9, 10],
        color: '#8500ff',
      }],
      options: {
        chart: {
          type: 'line',
          width: 100,
          height: 35,
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 1,
          curve: 'straight',
        },
        tooltip: {
          enabled: true,
          marker: {
            show: true
          },
        }
      },
    };
  }

  render() {
    return (


      <div id="chart">
        <ReactApexChart className="chart-dropshadow" options={this.state.options} series={this.state.series} type="line" width={200} height={70} />
      </div>


    );
  }
}

export class ColoredLineChart extends Component <{}, { options:any, series:any }> {
  constructor(props) {
    super(props);

    this.state = {

      series: [{
        data: [3, 4, 4, 7, 5, 9, 10, 6, 4, 4, 7, 5, 9, 10],
        color: '#285cf7',
      }],
      options: {
        chart: {
          type: 'line',
          width: 100,
          height: 35,
          sparkline: {
            enabled: true
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 1,
          curve: 'straight',
        },
        tooltip: {
          enabled: true,
          marker: {
            show: true
          },
        }
      },
    };
  }

  render() {
    return (


      <div id="chart">
        <ReactApexChart className="chart-dropshadow" options={this.state.options} series={this.state.series} type="line" width={200} height={70} />
      </div>


    );
  }
}

//Area chart

export class AreaChart extends Component <{}, { optionsSpark3:any, seriesSpark3:any }> {
  constructor(props) {
    super(props);

    this.state = {

      seriesSpark3: [{
        data: [7, 8, 10, 7, 5, 9, 10, 6, 9, 4, 7, 5, 9, 10, 8],
        color: '#8500ff',
      }],
      optionsSpark3: {
        chart: {
          type: 'area',
          height: 100,
          sparkline: {
            enabled: true
          },
        },
        stroke: {
          width: '1',
          curve: 'straight'
        },
        fill: {
          opacity: 0.3
        },
        xaxis: {
          crosshairs: {
            width: 1
          },
        },
        yaxis: {
          min: 0
        },
      },
    };
  }



  render() {
    return (
      <div id="chart-spark3">
        <ReactApexChart options={this.state.optionsSpark3} series={this.state.seriesSpark3} type="area" width={200} height={70} />
      </div>
    );
  }
}

export class ColoredAreaChart extends Component <{}, { optionsSpark3:any, seriesSpark3:any }> {
  constructor(props) {
    super(props);

    this.state = {

      seriesSpark3: [{
        data: [7, 8, 10, 7, 5, 9, 10, 6, 9, 4, 7, 5, 9, 10, 8],
        color: '#285cf7',
      }],
      optionsSpark3: {
        chart: {
          type: 'area',
          height: 100,
          sparkline: {
            enabled: true
          },
        },
        stroke: {
          width: '1',
          curve: 'straight'
        },
        fill: {
          opacity: 0.3
        },
        xaxis: {
          crosshairs: {
            width: 1
          },
        },
        yaxis: {
          min: 0
        },
      },
    };
  }



  render() {
    return (
      <div id="chart-spark3">
        <ReactApexChart options={this.state.optionsSpark3} series={this.state.seriesSpark3} type="area" width={200} height={70} />
      </div>
    );
  }
}

//BAR CHART 

export class BarChart extends Component <{}, { options5:any, series5:any }> {
  constructor(props) {
    super(props);

    this.state = {

      series5: [{
        data: [3, 4, 4, 7, 5, 9, 10, 6, 4, 4, 7, 5, 9, 10],
        color: '#8500ff'
      }],
      options5: {
        chart: {
          type: 'bar',
          width: 100,
          height: 35,
          sparkline: {
            enabled: true
          }
        },
        plotOptions: {
          bar: {
            columnWidth: '75%'
          }
        },
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        xaxis: {
          crosshairs: {
            width: 2
          },
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          marker: {
            show: false
          }
        }
      },

    };
  }


  render() {
    return (
      <div id="chart-5">
        <ReactApexChart options={this.state.options5} series={this.state.series5} type="bar" height={70} width={200} />
      </div>
    );
  }
}

export class ColoredBarChart extends Component <{}, { options5:any, series5:any }> {
  constructor(props) {
    super(props);

    this.state = {

      series5: [{
        data: [3, 4, 4, 7, 5, 9, 10, 6, 4, 4, 7, 5, 9, 10],
        color: '#285cf7'
      }],
      options5: {
        chart: {
          type: 'bar',
          width: 100,
          height: 35,
          sparkline: {
            enabled: true
          }
        },
        plotOptions: {
          bar: {
            columnWidth: '75%'
          }
        },
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        xaxis: {
          crosshairs: {
            width: 2
          },
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          marker: {
            show: false
          }
        }
      },

    };
  }


  render() {
    return (
      <div id="chart-5">
        <ReactApexChart options={this.state.options5} series={this.state.series5} type="bar" height={70} width={200} />
      </div>
    );
  }
}

//STACKED Bar Chart

export class StackedBarChart extends Component <{}, { options5:any, series5:any }> {
  constructor(props) {
    super(props);

    this.state = {

      series5: [{
        data: [7, 8, 10, 7, 5, 9, 10, 6, 9, 4, 7, 5, 9, 10, 8],
        color: '#8500ff'
      },
      {
        data: [4, 5, 6, 7, 4, 5, 8, 7, 6, 6, 4, 7, 6, 4, 7],
        color: '#285cf7'
      }
      ],
      options5: {
        chart: {
          type: 'bar',
          width: 100,
          height: 35,
          stacked: true,
          sparkline: {
            enabled: true
          }
        },
        plotOptions: {
          bar: {
            columnWidth: '75%'
          }
        },
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        xaxis: {
          crosshairs: {
            width: 2
          },
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          marker: {
            show: false
          }
        }
      },

    };
  }


  render() {
    return (
      <div id="chart-5">
        <ReactApexChart options={this.state.options5} series={this.state.series5} type="bar" height={70} width={200} />
      </div>
    );
  }
}

export class ColoredStackedBarChart extends Component <{}, { options5:any, series5:any }> {
  constructor(props) {
    super(props);

    this.state = {

      series5: [{
        data: [3, 4, 4, 7, 5, 9, 10, 6, 4, 4, 7, 5, 9, 10, 8],
        color: '#00cccc'
      },
      {
        data: [4, 5, 6, 7, 4, 5, 8, 7, 6, 6, 4, 7, 6, 4, 7],
        color: '#285cf7'
      }],
      options5: {
        chart: {
          type: 'bar',
          width: 100,
          height: 35,
          stacked: true,
          sparkline: {
            enabled: true
          }
        },
        plotOptions: {
          bar: {
            columnWidth: '75%'
          }
        },
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        xaxis: {
          crosshairs: {
            width: 2
          },
        },
        tooltip: {
          fixed: {
            enabled: false
          },
          x: {
            show: false
          },
          marker: {
            show: false
          }
        }
      },

    };
  }


  render() {
    return (
      <div id="chart-5">
        <ReactApexChart options={this.state.options5} series={this.state.series5} type="bar" height={70} width={200} />
      </div>
    );
  }
}

//Pie Chart

export class PieChart extends Component <{}, { options3:any, series3:any, color:any }> {
  constructor(props) {
    super(props);

    this.state = {

      series3: [3, 4, 4],
      color: ['#8500ff', '#285cf7', '#3bb001'],
      options3: {
        chart: {
          type: 'pie',
          width: 40,
          height: 40,
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          width: 1
        },
        tooltip: {
          fixed: {
            enabled: false
          },
        }
      },

    };
  }

  render() {
    return (
      <div id="chart-3">
        <ReactApexChart options={this.state.options3} series={this.state.series3} type="pie" height={100} width={100} />
      </div>
    );
  }
}

export class ColoredDonutChart extends Component <{}, { options4:any, series4:any, color:any }> {
  constructor(props) {
    super(props);

    this.state = {
      series4: [3, 4, 4, 7, 5, 9],
      color: ['#8500ff', '#285cf7', '#3bb001', '#00cccc ', '#ffc107', '#3db4ec', '#dc3545'],
      options4: {
        chart: {
          type: 'donut',
          width: 40,
          height: 40,
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          width: 1
        },
        tooltip: {
          fixed: {
            enabled: false
          },
        }
      },
    };
  }
  render() {
    return (
      <div id="chart-4">
        <ReactApexChart options={this.state.options4} series={this.state.series4} type="donut" height={100} width={100} />
      </div>
    );
  }
}