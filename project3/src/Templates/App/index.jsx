// DOING THE ORGANIZATION WITH -> useEffect, useReducer, useContext and useRef
import { Posts } from '../Components';
import { CounterProvider } from '../Contexts/CounterProvider';
import { PostsProvider } from '../Contexts/PostsProvider';
import './App,.test';

function App() {
  return (
    <CounterProvider>
      <PostsProvider>
        <div>
          <Posts />
        </div>
      </PostsProvider>
    </CounterProvider>
  );
}
export default App;
