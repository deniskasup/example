<template>
    <div class="not-found">
        <div class="wrapper">
            <span>404</span>
            <router-link to="/">На главную</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "NotFound",
    data() {
        return {}
    }
}
</script>

<style lang="sass" scoped>
.not-found
    height: 100%
    flex-grow: 1
    display: flex
    align-items: center

    .wrapper
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center

        & span
            font-size: 120px
            color: $red
            margin-bottom: 15px

        & a
            font-size: 17px


</style>