<template>
    <div ref="root" class="calc-results">
        <div class="wrapper">
            <h2 class="calc-results__title">Результаты расчета</h2>
            <div class="calc-results__top">
                <div class="calc-results__top-info">
                    <span>Lorem ipsum.</span>
                    — Lorem ipsum dolor sit amet, consectetur.
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deserunt earum, maiores minus mollitia voluptates!</p>
            </div>

            <div class="calc-results__cards">
                <SomethingCard v-for="something in somethingsList" :something="something"/>
                <div class="calc-results__picked-wrap">
                    <div v-if="amountNeeded" class="calc-results__picked">
                        test
                        <span>12 / {{ amountNeeded }} </span>
                        test
                    </div>
                </div>
            </div>

            <NecessaryProducts/>
        </div>
    </div>
</template>

<script>
import SomethingCard from "@/components/SomethingCard"
import NecessaryProducts from "@/components/NecessaryProducts"

export default {
    name: "Results",
    props: {
        somethingsList: {
            type: Array,
            default: () => [],

        },
        amountNeeded: {
            type: Number,
            default: null
        }
    },
    components: {NecessaryProducts, SomethingCard},
    mounted() {
        this.$refs.root.scrollIntoView({
            behavior: 'smooth'
        })
    },
    data() {
        return {}
    }
}
</script>

<style lang="sass">
.calc-results
    box-shadow: inset 0px 4px 30px rgba(0, 24, 51, 0.05)
    width: 100%
    display: flex
    flex-direction: column
    align-items: center
    padding-top: 100px
    padding-bottom: 50px
    +until-tablet
        padding-top: 50px

    & > .wrapper
        display: flex
        flex-direction: column
        align-items: center
        width: 100%

    &__picked
        display: flex
        align-items: center
        justify-content: center
        flex-direction: column
        width: 177px
        height: 177px
        background-color: rgba(111, 140, 172, 0.1)
        border-radius: 50%
        text-align: center
        color: $blue
        top: 50px
        transform: translate(50%, 0)
        position: sticky
        margin-left: auto
        +media-until(1900px)
            transform: none
        +media-until(1450px)
            width: 130px
            height: 130px
        +until-tablet
            display: none
            width: 100px
            height: 100px

        &-wrap
            width: 100%
            height: 100%
            position: absolute
            top: -80px
            right: 0
            pointer-events: none
            z-index: 2
            +until-tablet
                top: -50px
                right: 5px
                font-size: 11px

        & span
            font-size: 32px
            line-height: 1.25
            margin: 12px 0
            text-align: center
            +media-until(1450px)
                font-size: 26px
                margin: 10px 0
            +until-tablet
                font-size: 18px
                margin: 7px 0

    &__title
        text-align: center
        margin-bottom: 75px
        +until-desktop
            margin-bottom: 60px
        +until-tablet
            margin-bottom: 40px

    &__top
        border-radius: 30px
        border: 1px solid $light-gray
        width: 100%
        padding: 32px 40px
        max-width: 655px
        display: flex
        flex-direction: column
        align-items: center
        margin-bottom: 50px
        +until-desktop
            padding: 20px 35px
            margin-bottom: 65px
        +until-tablet
            padding: 20px

        &-info
            display: flex
            align-items: center
            font-size: 17px
            margin-bottom: 20px
            +until-tablet
                font-size: 14px
            +media-until(500px)
                flex-direction: column
                text-align: center

            & span
                flex-shrink: 0
                border-radius: 100px
                margin-right: 12px
                padding: 12px 20px
                border: 1px solid $blue
                +media-until(500px)
                    margin-bottom: 10px
                    text-align: center

        & > p
            color: $dark-gray
            text-align: center

    &__cards
        position: relative
        width: 100%
        display: grid
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))
        grid-gap: 52px 62px
        margin-bottom: 50px
        +until-tablet
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))
            grid-gap: 30px

        & .something-card
            +until-tablet
                border-radius: 0
                left: 50%
                position: relative
                transform: translateX(-50%)
                display: grid
                grid-template-columns: 1fr 1fr
                grid-gap: 10px 15px
            +media-until(450px)
                width: 100vw

            &__img
                +until-tablet
                    margin-bottom: 0
                    grid-row: span 3

            &__title, &__volume, &__composition
                +until-tablet
                    text-align: left
                    margin-bottom: 0

            &__buttons
                +until-tablet
                    justify-content: space-between
                    grid-column: span 2
</style>