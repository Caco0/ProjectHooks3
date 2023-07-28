import P from 'prop-types';
import { createContext, useContext, useReducer, useRef } from 'react';
import './App.css';

//actions.js
export const actions = {
  CHANGE_TITLE: '@@changeTitle', // prefix with "@@" to avoid collisions wih
};

//data.js
export const globalState = {
  title: 'O Título do contexto',
  body: 'O body do contexto',
  counter: 0,
};

//reducer.jsx
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE:
      {
        console.log('Mudar Título');
      }
      return { ...state, title: action.payload };
  }
  return { ...state };
};

//AppContext.jsx
const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload });
  };
  return <Context.Provider value={{ state, changeTitle }}>{children}</Context.Provider>;
};

AppContext.propTypes = {
  children: P.node,
};

//H1/index.jsx
export const H1 = () => {
  const context = useContext(Context);
  const inputRef = useRef();

  return (
    <>
      <h1 onClick={() => context.changeTitle(inputRef.current.value)}>{context.state.title}</h1>
      <input type="text" name="entrada" ref={inputRef} />
    </>
  );
};

//App.jsx
function App() {
  return (
    <AppContext>
      <div>
        <H1 />
      </div>
    </AppContext>
  );
}
export default App;

// const Button = ({ incrementButton }) => {
//   console.log('Filho Renderizou!');
//   return <button onClick={() => incrementButton(100)}> + </button>;
// };

// Button.propTypes = { incrementButton: P.func };

// function App() {
//   const [counter, setCounter] = useState(0);

//   const incrementCounter = useCallback((num) => {
//     setCounter((c) => c + num);
//   }, []);

//   const btn = useMemo(() => {
//     return <Button incrementButton={incrementCounter} />;
//   }, [incrementCounter]);

//   console.log('Pai renderizou');
//   return (
//     <>
//       <div>
//         <p>Teste 1</p>
//         <h1>C1: {counter}</h1>
//         {btn}
//       </div>
//     </>
//   );
// }
