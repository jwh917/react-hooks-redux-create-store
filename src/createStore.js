// let state;

// function reducer(state = { count: 0 }, action) {
//   switch (action.type) {
//     case "counter/increment":
//       return { count: state.count + 1 };

//     default:
//       return state;
//   }
// }

// function dispatch(action) {
//   state = reducer(state, action);
//   render();
// }

// function render() {
//   let container = document.getElementById("container");
//   container.textContent = state.count;
// }

// dispatch({ type: "@@INIT" });
// let button = document.getElementById("button");

// button.addEventListener("click", function () {
//   dispatch({ type: "counter/increment" });
// });



function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    render();
  }

  function getState() {
    return state;
  }

  return {
    dispatch,
    getState,
  };
}

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };

    default:
      return state;
  }
}

function render() {
  let container = document.getElementById("container");
  container.textContent = store.getState().count;
}

let store = createStore(reducer);
store.dispatch({ type: "@@INIT" });
let button = document.getElementById("button");

button.addEventListener("click", () => {
  store.dispatch({ type: "counter/increment" });
});