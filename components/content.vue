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
import {handleChartProcess} from "~/components/chart/handleChartProcess"

const lineChart = ref(null)
const doughnutChart = ref(null)

onMounted(() =>{
    handleChartProcess(lineChart, doughnutChart)
})
</script>