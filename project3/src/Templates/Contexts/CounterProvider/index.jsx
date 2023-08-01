import P from 'prop-types';
import { CounterContext } from './Context';
import { useReducer } from 'react';
import { reducer } from './Reducer';
import { data } from './Data';

export const CounterProvider = ({ children }) => {
  const [counterState, counterDispatch] = useReducer(reducer, data);

  return (
    <CounterContext.Provider value={{ counterState, counterDispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

CounterProvider.propTypes = {
  children: P.node.isRequired,
};
