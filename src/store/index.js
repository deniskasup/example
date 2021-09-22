import {createStore} from 'vuex'
import calculator from "@/store/modules/calculator"

export default createStore({
    state: {
        promptShowed: false,
    },
    mutations: {
        setValue(state, {key, value}) {
            if (!(key in state)) return
            state[key] = value
        }
    },
    actions: {},
    modules: {
        calculator
    }
})
