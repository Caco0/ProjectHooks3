import { useReducer } from 'react';
import { PostsContext } from './Context';
import { reducer } from './Reducer';
import { data } from './Data';
import P from 'prop-types';

export const PostsProvider = ({ children }) => {
  const [postsState, postsDispatch] = useReducer(reducer, data);
  return (
    <PostsContext.Provider value={{ postsState, postsDispatch }}>{children}</PostsContext.Provider>
  );
};
PostsProvider.propTypes = {
  children: P.node.isRequired,
};
