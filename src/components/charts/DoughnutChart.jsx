import { Chart as ChartJS, ArcElement, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { doughNut } from '../../data/chartData';

ChartJS.register(ArcElement,);

function DoughnutChart() {
  return (
    <Doughnut data={doughNut} options={{
      responsive: true,
      maintainAspectRatio: true,
      cutout: 33,
    }} />
  )
}

export default DoughnutChart;