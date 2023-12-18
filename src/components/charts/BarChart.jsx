import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
);

const options = {
    responsive: true,
};

const labels = ['Low', 'Medium', 'High', 'Extra High',];

const data = {
    labels,
    datasets: [
        {
            label: 'Worko',
            data: [50, 80, 12, 50,],
            backgroundColor: ["yellow", "orange", "orange", "red",],
        },
        // {
        //   label: 'Dataset 2',
        //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
        // },
    ],
};

function BarChart() {
    return (
        <Bar options={options} data={data} />
    )
}

export default BarChart