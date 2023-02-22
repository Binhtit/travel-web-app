export const state = () => ({
    list: [1,2,3],
    name: '',
    cart: []
  })
  
  export const mutations = {
    add(state, value) {
      if (value === null) {
        return
      }
      state.list.push(value)
    },
    remove(state, { todo }) {
      state.list.splice(state.list.indexOf(todo), 1)
    },
    toggle(state, todo) {
      todo.done = !todo.done
    },
    addCart(state, value) {
      let isHave = false
      if (value === null) {
        return
      }
      if (!value.count) {
        value.count = 1
      }
      if(state.cart.length) {
        state.cart.forEach(c => {
          if(c.id === value.id) {
            c.count ++
            isHave = true
          }
        });
      }
      if (!isHave) {
        state.cart.push(value)
      }
    },
  }
