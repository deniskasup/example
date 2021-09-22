<template>
    <section class="calculator">
        <div class="wrapper">
            <h1 class="calculator__title">Lorem ipsum.</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, aut commodi cum deserunt distinctio dolorem doloribus enim eos et expedita incidunt labore, laboriosam laudantium nobis quasi quos saepe sapiente suscipit.
            </p>

            <CalcFilters @calc="loadSomethings"/>
        </div>
        <CalcResults v-if="somethingsList.length" :amountNeeded="amountNeeded" :somethingsList="somethingsList"/>
    </section>
</template>

<script>
import CalcFilters from "@/components/Calculator/Filters"
import '@/assets/sass/plugins/slider.css'
import CalcResults from "@/components/Calculator/Results"
import Fetch from "@/utils/Fetch"
import {useToast} from "vue-toastification"

const toast = useToast()
export default {
    name: "Calculator",
    components: {CalcResults, CalcFilters},
    data() {
        return {
            somethingsList: [],
            amountNeeded: null,
            loading: false,
        }
    },
    methods: {
        async loadSomethings(filter) {
            let body = new FormData()
            if (filter) {
                Object.entries(filter).forEach(item => {
                    let [key, value] = item
                    if (Array.isArray(value)) {
                        value.forEach(element => {
                            body.append(key + '[]', element)
                        })
                    } else {
                        body.append(key, value.toString())
                    }
                })
            } else {
                return
            }

            let response = await Fetch('catalog/filter/', {
                method: "POST",
                body
            })
            if (response.success) {
                this.somethingsList = response.data.items
                this.amountNeeded = response.data.amountNeed
            } else {
                toast.error(response.message)
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.calculator
    min-height: 100%
    flex-grow: 1

    & > .wrapper
        display: flex
        flex-direction: column
        align-items: center

        & > p
            max-width: 550px
            text-align: center
            margin-bottom: 50px

    &__title
        text-align: center
        margin-bottom: 20px


</style>