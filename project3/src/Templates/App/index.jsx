// DOING THE ORGANIZATION WITH -> useEffect, useReducer, useContext and useRef
import { Posts } from '../Components';
import { PostsProvider } from '../Contexts/PostsProvider';
import './App,.test';

function App() {
  return (
    <PostsProvider>
      <div>
        <Posts />
      </div>
    </PostsProvider>
  );
}
export default App;
