<template>
    <div class="content">
        <div class="content-title">
        {{ translate("wallet") }}
        </div>
        <wallet></wallet>
        <div class="content-charts">
            <div class="charts-wrapper">
            <canvas class="line-chart" ref="lineChart"></canvas>
            </div>
            <div class="charts-wrapper">
            <canvas class="doughnut-chart" ref="doughnutChart"></canvas>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .line-chart{
        width: 700px;
    }

    .content{
        padding: 35px 20px;
        &-title{
            margin-bottom: 1rem;
            font-size: 1.25rem;
            font-weight: 600;
        }

        &-charts{
            display: flex;
            align-items: center;
        }
    }
</style>

<script setup lang="ts">
import Chart from "chart.js/auto"
import { translate } from "~/utils/translate";

const lineChart = ref(null)
const doughnutChart = ref(null)

onMounted(() => {
    new Chart(lineChart.value!, {
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
                data: Array.from({length: 12}, () => Math.random() * 10000),
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

    new Chart(doughnutChart.value!, {
        type: 'doughnut',
        data: {
            labels: [`Bitcoin`, `USD`, `TR`, 'Gold', 'Ethereum'],
            datasets: [{
                backgroundColor: ['#FF95D4', '#C29CFD', '#F2C63C', '#6CE4FE', '#7186FF'],
                data: Array.from({length: 5}, () => Math.random() * 1000)
                }],
                },
    })  
})
</script>