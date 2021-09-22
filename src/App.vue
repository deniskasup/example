<template>
    <Header/>
    <main>
        <router-view v-slot="{ Component }">
            <component :is="Component"/>
        </router-view>
    </main>


    <Footer/>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import {mapActions} from "vuex"

export default {
    components: { Footer, Header},
    data() {
        return {}
    },
    mounted() {
        this.loadCalcFilters()
    },
    methods: {
        ...mapActions({
            loadCalcFilters: 'calculator/loadFilters'
        })
    }
}
</script>

<style lang="sass">
@import "@/assets/sass/main"
#app
    min-height: 100%
    display: flex
    flex-direction: column

    & main
        padding: 50px 0 0
        flex-grow: 1
        display: flex
        flex-direction: column
        position: relative
        +until-tablet
            padding: 35px 0 0


</style>