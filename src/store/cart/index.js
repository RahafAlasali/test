export default {
    namespaced: true,
    state: {
        cart: []
    },
    getters: {
        cart(state) {
            return state.cart
        }
    },
    mutations: {
        add(state, payload) {
            const prd = state.cart.find(prd => prd.id == payload.product.id)
            if (!prd) {
                state.cart.push({ ...payload.product, quantity: payload.quantity })
            } else {
                state.cart.find(prd => prd.id == payload.product.id).quantity += 1
            }
        },
        deleteItem(state, product) {
            const index = state.cart.indexOf(product)
            state.cart.splice(index, 1)
        },
        reduceQuantity(state, id) {
            state.cart.find(prd => prd.id == id).quantity -= 1
        },
        increaseQuantity(state, id) {
            state.cart.find(prd => prd.id == id).quantity += 1
        }

    },
    actions: {
        addProductToCart({ commit }, { item, quantity = 1 }) {
            commit('add', { product: item, quantity })
        },
        deleteProduct({ commit }, payload) {
            commit('deleteItem', payload)
        },

        reduceQuantityPrd({ commit }, payload) {
            commit('reduceQuantity', payload)
        },
        increaseQuantityPrd({ commit }, payload) {

            commit('increaseQuantity', payload)
        }
    },
}