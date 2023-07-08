<script setup lang="ts">
import {translate} from "~/utils/translate"
import {getMoney} from "~/resources/data"
</script>

<template>
    <div class="wallet">
        <div class="wallet-title">
            {{ translate("wallet.total.title") }}
        </div>
        <div class="wallet-value">
            {{ getMoney }}
        </div>
    </div>
</template>

<style lang="scss">
    .wallet{
        &-title{
            font-size: 16px;
            color:#101531 ;
            font-weight: 500;
        }

        &-value{
            font-weight: 600;
            font-size: 26px;
        }
    }
</style>