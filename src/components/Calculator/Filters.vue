<template>
    <div class="calc-filters">
        <div class="calc-filters__item" v-for="filter in filters" :key="filter.id">
            <div class="calc-filters__item-top">
                <div class="calc-filters__item-title">
                    <div class="calc-filters__item-title-img">
                        <img :src="filter.icon" alt="">

                    </div>
                    {{ filter.name }}
                </div>
            </div>

            <div class="calc-filters__content">
                <template v-if="filter.type === 'slider'">
                    <div class="calc-filters__slider">
                        <Slider :min="filter.values[0].value" :max="filter.values[1].value" :tooltips="false" :key="filter.fieldName" :name="filter.fieldName"
                                v-model="fields[filter.fieldName]"/>
                        <div class="calc-filters__slider-value"> {{ fields[filter.fieldName] }}</div>
                    </div>
                </template>
                <template v-else-if="filter.type === 'step-slider'">
                    <div class="calc-filters__slider consumption">
                        <Slider :max="filter.values.length - 1" :key="filter.fieldName" :name="filter.fieldName" :tooltips="false" v-model="fields[filter.fieldName]"/>
                        <div class="consumption__labels">
                            <span v-for="value in filter.values" :key="value.name">{{ value.name }}</span>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <component :values="filter.values" :key="filter.fieldName" :name="filter.fieldName" v-model="fields[filter.fieldName]"
                               :is="inputComponent(filter.type)"></component>
                </template>
            </div>
        </div>

    </div>
    <button @click.prevent="calc" class="submit-button">
        <svg width="15" height="20" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M23.9082 0H4.09264C2.18302 0 0.629395 1.55363 0.629395 3.46324V32.5368C0.629395 34.4464 2.18302 36 4.09264 36H23.9082C25.8179 36 27.3715 34.4464 27.3715 32.5368V3.46324C27.3715 1.55363 25.8179 0 23.9082 0ZM5.37612 5.98331C5.37612 5.40084 5.84834 4.92863 6.43081 4.92863H21.57C22.1525 4.92863 22.6247 5.40084 22.6247 5.98331V8.06583C22.6247 8.6483 22.1525 9.12052 21.57 9.12052H6.43081C5.84834 9.12052 5.37612 8.6483 5.37612 8.06583V5.98331ZM8.92697 29.666C8.92697 30.2484 8.45475 30.7207 7.87228 30.7207H6.43088C5.84841 30.7207 5.37619 30.2484 5.37619 29.666V28.6667C5.37619 28.0842 5.84841 27.612 6.43088 27.612H7.87228C8.45475 27.612 8.92697 28.0842 8.92697 28.6667V29.666ZM8.92697 23.4243C8.92697 24.0068 8.45475 24.479 7.87228 24.479H6.43088C5.84841 24.479 5.37619 24.0068 5.37619 23.4243V22.425C5.37619 21.8426 5.84841 21.3704 6.43088 21.3704H7.87228C8.45475 21.3704 8.92697 21.8426 8.92697 22.425V23.4243ZM15.8622 29.666C15.8622 30.2484 15.39 30.7207 14.8076 30.7207H13.3662C12.7836 30.7207 12.3115 30.2484 12.3115 29.666V28.6667C12.3115 28.0842 12.7836 27.612 13.3662 27.612H14.8076C15.39 27.612 15.8622 28.0842 15.8622 28.6667V29.666ZM15.8622 23.4243C15.8622 24.0068 15.39 24.479 14.8076 24.479H13.3662C12.7836 24.479 12.3115 24.0068 12.3115 23.4243V22.425C12.3115 21.8426 12.7836 21.3704 13.3662 21.3704H14.8076C15.39 21.3704 15.8622 21.8426 15.8622 22.425V23.4243ZM15.8622 17.1826C15.8622 17.7652 15.39 18.2373 14.8076 18.2373H6.43081C5.84834 18.2373 5.37612 17.7651 5.37612 17.1826V16.1833C5.37612 15.6009 5.84834 15.1286 6.43081 15.1286H14.8076C15.39 15.1286 15.8622 15.6009 15.8622 16.1833V17.1826ZM22.7975 29.666C22.7975 30.2484 22.3253 30.7207 21.7428 30.7207H20.3014C19.719 30.7207 19.2467 30.2484 19.2467 29.666V28.6667C19.2467 28.0842 19.719 27.612 20.3014 27.612H21.7428C22.3253 27.612 22.7975 28.0842 22.7975 28.6667V29.666ZM22.7975 23.4243C22.7975 24.0068 22.3253 24.479 21.7428 24.479H20.3014C19.719 24.479 19.2467 24.0068 19.2467 23.4243V22.425C19.2467 21.8426 19.719 21.3704 20.3014 21.3704H21.7428C22.3253 21.3704 22.7975 21.8426 22.7975 22.425V23.4243ZM22.7975 17.1826C22.7975 17.7652 22.3253 18.2373 21.7428 18.2373H20.3014C19.719 18.2373 19.2467 17.7651 19.2467 17.1826V16.1833C19.2467 15.6009 19.719 15.1286 20.3014 15.1286H21.7428C22.3253 15.1286 22.7975 15.6009 22.7975 16.1833V17.1826Z"
            />
        </svg>

        Рассчитать
    </button>
</template>

<script>
import InputRadio from "@/components/forms/Inputs/InputRadio"
import Slider from '@vueform/slider'
import InputCheckboxes from "@/components/forms/Inputs/InputCheckboxes"
import {mapState} from "vuex"

export default {
    name: "Filters",
    components: {InputCheckboxes, InputRadio, Slider},
    emits: [
      'calc'
    ],
    data() {
        return {
            fields: {},

        }
    },
    created() {
        this.fields = this.defaultFields
    },
    watch: {
        defaultFields(val) {
            this.fields = val
        }
    },
    computed: {
        ...mapState({
            filters: (state) => state.calculator.filters.fields,
            defaultFields: (state) => state.calculator.filters.default
        }),

        inputComponent() {
            return (filter) => {
                switch (filter) {
                    case 'interval':
                    case 'slider':
                    case 'step-slider':
                        return 'slider'
                    case 'checkbox':
                        return 'input-checkboxes'
                    case 'radio':
                        return 'input-radio'
                }
            }
        }
    },

    methods: {
        calc() {
            this.$emit('calc', this.fields)
        }
    }

}
</script>

<style lang="sass">

.calc-filters
    margin-bottom: 50px
    width: 100%
    display: grid
    grid-template-columns: 1fr 1fr
    grid-gap: 60px
    +until-desktop
        grid-template-columns: 100%
        grid-gap: 30px

    & + .submit-button
        margin-bottom: 60px
        +until-tablet
            margin-bottom: 35px

    &__slider
        width: 100%
        display: flex
        align-items: center

        &.consumption
            flex-direction: column

            & .consumption__labels
                width: 100%
                display: flex
                align-items: center
                justify-content: space-between
                margin-top: 15px

            & .slider
                &-target
                    width: 100%

                &-horizontal
                    height: 20px

                &-base
                    background-color: transparent

                &-connects
                    background-color: var(--slider-bg, rgba(111, 140, 172, .2))
                    clip-path: polygon(0 40%, 100% 0, 100% 100%, 0 60%)

                &-handle
                    width: 32px
                    height: 32px
                    +until-tablet
                        width: 24px
                        top: -3px
                        right: -10px
                        height: 24px

        & .slider-target
            flex-grow: 1

        &-value
            position: relative
            margin-left: 40px
            padding: 7px 12px
            border: 1px solid $light-gray
            border-radius: 50px
            min-width: 90px
            display: flex
            justify-content: center

            &::before
                position: absolute
                content: ''
                width: 6px
                background-color: white
                height: 6px
                border-left: 1px solid $light-gray
                border-bottom: 1px solid $light-gray
                transform: rotate(45deg)
                left: -4px
                top: 14px

    &__item
        background: $white
        box-shadow: 3px 3px 26px rgba(0, 24, 51, 0.05)
        border-radius: 30px
        overflow: hidden
        +until-tablet
            border-radius: 0
            width: 100vw
            position: relative
            left: 50%
            transform: translateX(-50%)

        &-top
            width: 100%
            padding: 13px 52px
            background: rgba(111, 140, 172, .1)
            +until-desktop
                padding: 10px 35px
            +until-tablet
                padding: 10px 20px

        &-title
            display: flex
            align-items: center
            font-size: 17px
            +until-tablet
                font-size: 15px

            &-img
                flex-shrink: 0
                margin-right: 12px

    &__content
        padding: 32px 52px
        border-radius: 0 0 30px 30px
        +until-desktop
            padding: 20px 35px
        +until-tablet
            padding: 20px
</style>