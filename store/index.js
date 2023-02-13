export const state = () => ({
    list: [1,2,3],
    name: '',
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
    }
  }