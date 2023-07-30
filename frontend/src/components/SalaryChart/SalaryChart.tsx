import { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { IUserForTable } from '../../types/index.types';
import { asyncGetEmploee } from '../../pages/EmploeePage/HttpHookForGetEmploee/http.hook';

interface IChart {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        borderColor: string;
        backgroundColor: string;
    }[];
};

interface IChartOption{
    time: string;
    salary: number;
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart Line',
        },
    },
};

const labels = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export const SalaryChart = () => {
    const [data, setData] = useState<IChart>({
        labels: [],
        datasets: [
            {
                label: 'Dataset 1',
                data: [],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ]
    } as IChart);

    function getMiddleSalaries(emploees: IUserForTable[], mounths: string[]) {
        const result:IChartOption[] = [];
        for(let mounth of mounths){
                let k = 0;
                let summSalary = 0;
            for(let emploee of emploees){
                if(mounth === labels[emploee.dateStartWork.getMonth()]){
                    k += 1;
                    summSalary += emploee.salary;
                }
            };
            if(!result.find(el => el.time === mounth)) result.push({time: mounth, salary: Math.round(summSalary / k)}); 
        };
        return result;
    }

    async function getData() {
        const emploee = await asyncGetEmploee();
        let dateArraySort: string[] | number[] = emploee.map(el => el.dateStartWork.getMonth());
        dateArraySort.sort();
        dateArraySort = dateArraySort.map(el => labels[el])
        const values = getMiddleSalaries(emploee, dateArraySort);
        setData({
            labels: values.map(el => el.time),
            datasets: [
                {
                    label: 'Middle salary statisic in mounth',
                    data: values.map(el => el.salary),
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                }
            ]
        })
    };

    useEffect(() => {
        getData()
    }, []);

    return <Line options={options} data={data}/>;
};

