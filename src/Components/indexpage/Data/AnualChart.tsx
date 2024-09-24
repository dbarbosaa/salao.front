import { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

import { IHome } from '../../../Interfaces/Home/IHome';

import { currencyMoneyLabel } from '../../../utils/formart';
import { initialHome } from '../../../Context/InitialValuesContext';

export const AnualChart = ({ year }) => {
  const [home, setHome] = useState<IHome>(initialHome);

  const FaturamentoTotal = () => currencyMoneyLabel(home.faturamentoTotalAnual);

  const AnualMensal = [
    {
      name: 'Faturamento',
      data: [
        home.faturamento?.janeiro ?? 0,
        home.faturamento?.fevereiro ?? 0,
        home.faturamento?.marco ?? 0,
        home.faturamento?.abril ?? 0,
        home.faturamento?.maio ?? 0,
        home.faturamento?.junho ?? 0,
        home.faturamento?.julho ?? 0,
        home.faturamento?.agosto ?? 0,
        home.faturamento?.setembro ?? 0,
        home.faturamento?.outubro ?? 0,
        home.faturamento?.novembro ?? 0,
        home.faturamento?.dezembro ?? 0,
      ],
      color: '#0074d9'
    },
  ];

  const AnualMensalOptions: any = {
    legend: {
      position: 'top',
      horizontalAlign: 'left',
    },
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
      width: 3,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return currencyMoneyLabel(val);
        }
      }
    }
  };

  return (
    <>
      <div className="total-revenue pb-0">
        <div>
          <h6>{FaturamentoTotal()}</h6>
        </div>
      </div>
      <div id="chart">
        <ReactApexChart className="sales-bar mt-1" options={AnualMensalOptions} series={AnualMensal} type="bar" height={280} />
      </div>
    </>
  )
}
