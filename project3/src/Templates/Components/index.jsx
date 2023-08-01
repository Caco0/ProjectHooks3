import { useContext, useEffect, useRef } from 'react';
import { PostsContext } from '../Contexts/PostsProvider/Context';
import { loadPosts } from '../Contexts/PostsProvider/Actions';

import { CounterContext } from '../Contexts/CounterProvider/Context';
import { incrementCounter } from '../Contexts/CounterProvider/Action';
import { decrementCounter } from '../Contexts/CounterProvider/Action';

export const Posts = () => {
  const isMounted = useRef(true);

  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;

  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      if (!isMounted.current) {
        dispatch();
      }
    });
    return () => {
      isMounted.current = false;
    };
  }, [postsDispatch]);

  return (
    <div>
      <button onClick={() => incrementCounter(counterDispatch)}>
        Counter {counterState.counter} +
      </button>
      <button onClick={() => decrementCounter(counterDispatch)}>
        Counter {counterState.counter} -
      </button>
      <h1>Olá Posts</h1>
      {postsState.loading && (
        <p>
          <strong>Carregando Posts...</strong>
        </p>
      )}
      {postsState.posts.map((post) => (
        <p key={post.id}> {post.title} </p>
      ))}
    </div>
  );
};
