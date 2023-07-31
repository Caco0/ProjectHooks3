import { useContext, useEffect, useRef } from 'react';
import { PostsContext } from '../Contexts/PostsProvider/Context';
import { loadPosts } from '../Contexts/PostsProvider/Actions';

export const Posts = () => {
  const isMounted = useRef(true);
  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

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
