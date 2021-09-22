import Fetch from "@/utils/Fetch"
import {useToast} from "vue-toastification"

const toast = useToast()
export default {
    namespaced: true,

    state: {
        filters: {},
    },
    mutations: {
        setValue(state, {key, value}) {
            if (!(key in state)) return
            state[key] = value
        }
    },
    actions: {
        async loadFilters({commit}) {
            let response = await Fetch('calculator/filter/list/')
            if (response?.success) {
                commit('setValue', {
                    key: 'filters',
                    value: response.data

                })
            } else {
                toast.error(response?.message || 'Ошибка при загрузке фильтров')
            }
        }
    },

}