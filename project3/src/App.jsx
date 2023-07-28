// Making setInterval Declarative with React Hooks

import { useEffect, useRef, useState } from 'react';

const useMyHook = (cb, delay = 1000) => {
  const savedCb = useRef();

  useEffect(() => {
    savedCb.current = cb;
  }, [cb]);

  useEffect(() => {
    const interval = setInterval(() => {
      savedCb.current();
    }, delay);
    return () => clearInterval(interval);
  }, [delay]);
};

function App() {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [incrementor, setIncrementor] = useState(100);

  useMyHook(() => setCounter((c) => c + 1), delay);

  return (
    <div>
      <h1>
        <a href="https://overreacted.io/making-setinterval-declarative-with-react-hooks/">
          Making setInterval Declarative with React Hooks (Dan Abramov)
        </a>
      </h1>
      <br />
      <h2>Contador: {counter}</h2>
      <h3>Delay: {delay}</h3>
      <button
        onClick={() => {
          setDelay((d) => d + incrementor);
        }}
      >
        +{incrementor}
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          setDelay((d) => d - incrementor);
        }}
      >
        -{incrementor}
      </button>{' '}
      <br />
      <input
        type="number"
        value={incrementor}
        onChange={(e) => setIncrementor(Number(e.target.value))}
      />
    </div>
  );
}
export default App;
//-----------------------------------------------------------------------------

// import P from 'prop-types';
// import { createContext, useContext, useReducer, useRef } from 'react';
// import './App.css';

// //actions.js
// export const actions = {
//   CHANGE_TITLE: '@@changeTitle', // prefix with "@@" to avoid collisions wih
// };

// //data.js
// export const globalState = {
//   title: 'O Título do contexto',
//   body: 'O body do contexto',
//   counter: 0,
// };

// //reducer.jsx
// export const reducer = (state, action) => {
//   switch (action.type) {
//     case actions.CHANGE_TITLE:
//       {
//         console.log('Mudar Título');
//       }
//       return { ...state, title: action.payload };
//   }
//   return { ...state };
// };

// //AppContext.jsx
// const Context = createContext();
// export const AppContext = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, globalState);

//   const changeTitle = (payload) => {
//     dispatch({ type: actions.CHANGE_TITLE, payload });
//   };
//   return <Context.Provider value={{ state, changeTitle }}>{children}</Context.Provider>;
// };

// AppContext.propTypes = {
//   children: P.node,
// };

// //H1/index.jsx
// export const H1 = () => {
//   const context = useContext(Context);
//   const inputRef = useRef();

//   return (
//     <>
//       <h1 onClick={() => context.changeTitle(inputRef.current.value)}>{context.state.title}</h1>
//       <input type="text" name="entrada" ref={inputRef} />
//     </>
//   );
// };

// //App.jsx
// function App() {
//   return (
//     <AppContext>
//       <div>
//         <H1 />
//       </div>
//     </AppContext>
//   );
// }
// export default App;
