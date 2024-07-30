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
            state.cart.push({ ...payload.product, quantity: payload.quantity })
        },
        deleteItem(state, product) {
            const index = state.cart.indexOf(product)
            state.cart.splice(index, 1)
        }

    },
    actions: {
        addProductToCart({ commit }, { item, quantity = 1 }) {
            //  if find update quantity
            commit('add', { product: item, quantity })
        },
        deleteProduct({ commit }, { product }) {
            commit('deleteItem', product)
        }

    },
}