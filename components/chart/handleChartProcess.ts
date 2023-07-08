import Chart from "chart.js/auto"
import { translate } from "~/utils/translate";

export const handleChartProcess = (lineChart: Ref, doughnutChart: Ref) => {
    new Chart(lineChart.value, {
        type: 'line',
        data: {
            labels: [
                `${translate("january")}`,
                `${translate("february")}`,
                `${translate("march")}`,
                `${translate("may")}`,
                `${translate("june")}`,
                `${translate("july")}`,
                `${translate("august")}`,
                `${translate("september")}`,
                `${translate("october")}`,
                `${translate("november")}`,
                `${translate("december")}`,
            ],
            datasets: [{
                label: `${translate("wallet.total.title")}`,
                data: Array.from({ length: 12 }, () => Math.random() * 10000),
                borderWidth: 1,
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(doughnutChart.value, {
        type: 'doughnut',
        data: {
            labels: [`Bitcoin`, `USD`, `TR`, 'Gold', 'Ethereum'],
            datasets: [{
                backgroundColor: ['#FF95D4', '#C29CFD', '#F2C63C', '#6CE4FE', '#7186FF'],
                data: Array.from({ length: 5 }, () => Math.random() * 1000)
            }],
        },
    })
}