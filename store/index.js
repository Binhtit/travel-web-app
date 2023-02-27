export const state = () => ({
  list: [1, 2, 3],
  name: "",
  cart: [],
});

export const mutations = {
  add(state, value) {
    if (value === null) {
      return;
    }
    state.list.push(value);
  },
  remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1);
  },
  toggle(state, todo) {
    todo.done = !todo.done;
  },
  addCart(state, value) {
    let isHave = false;
    if (value === null) {
      return;
    }
    if (!value.count) {
      value.count = 1;
    }
    if (state.cart.length) {
      state.cart.forEach((c) => {
        if (c.id === value.id) {
          c.count++;
          isHave = true;
        }
      });
    }
    if (!isHave) {
      state.cart.push(value);
    }
  },
  editNumItem(state, value) {
    const {id, type} = value
    if (!state.cart.length || !id || type === undefined) {
      return
    }
    console.log('{id, type}', {id, type});
    state.cart.map((c) => {
      if (c.id === id && (type || !type && c.count > 1 )) {
        type ? c.count ++ : c.count --
      }
    })
  },
  deleteItem(state, value) {
    if (!value) {
      return
    }
    console.log('id', value);
    state.cart.forEach((c, index) => {
      if (c.id === value) {
        state.cart.splice(index, 1);
      }
    })
  }
};
