<template>
    <div class="input--radio-list">
        <template v-for="option in items">
            <label>
                <input :required="required" v-model="value" type="radio" :name="name" :value="option?.value"/>
                <span>{{ option?.name }}</span>
            </label>
        </template>
    </div>
</template>

<script>
export default {
    name: "InputRadio",
    emits: ["update:modelValue", "focus", 'blur'],
    props: {
        modelValue: {
            type: Number,
            default: null,
        },
        options: {
            type: Array,
            default: [],
        },
        values: {
            type: Array,
            default: [],
        },
        name: {
            type: String,
            default: "radio-list",
        },
        required: {
            type: Boolean,
            default: null
        }
    },
    computed: {
        items() {
            if(this.options.length) {
                return this.options
            } else if(this.values.length) {
                return this.values
            }
            return []
        },
        value: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit("update:modelValue", value)
            },
        },
    },
}
</script>

<style lang="sass" scoped>
.input--radio-list
    display: flex
    align-items: center
    flex-wrap: wrap
    gap: 20px 32px
    +media-until(600px)
        flex-direction: column
        align-items: flex-start
        gap: 20px 32px

    & > *
        position: relative
        display: flex
        align-items: center
        flex-grow: 1
        +media-until(600px)
            margin: 0
            flex-grow: 1

        & span
            font-size: 14px
            font-weight: 500
            user-select: none
            display: flex
            align-items: center
            cursor: pointer
            position: relative
            border: 1px solid $light-gray
            border-radius: 100px
            padding: 7px 16px
            transition: background-color .3s
            width: 100%

            &::before
                content: ''
                width: 16px
                height: 16px
                border-radius: 50%
                border: 1px solid $blue
                margin-right: 8px

            &::after
                content: ''
                opacity: 0
                transition: opacity .3s
                width: 8px
                height: 8px
                border-radius: 100%
                background-color: $white
                position: absolute
                left: 21px

        & input
            appearance: auto
            opacity: 0
            top: 0
            left: 0
            position: absolute

            &:checked
                & + span
                    color: $white
                    background-color: $blue
                    border-color: $blue

                    &::before
                        border-color: $white

                    &::after
                        opacity: 1


        &:first-child
            margin-left: 0
</style>
