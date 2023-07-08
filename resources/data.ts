const money = ref(15000000)

export const getMoney = computed(() =>{
    return String(money.value).substring(0,3) + ',' + String(money.value).substring(3,6) + ',' + String(money.value).substring(6)
})

export const data = {
    "january": Math.random() * 15000000
}