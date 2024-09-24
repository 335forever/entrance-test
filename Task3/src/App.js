import './App.css';
import PostForm from '../src/components/PostForm'
import List from '../src/components/List'
import PostList from '../src/components/PostList'
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="field-left">
          <PostForm></PostForm>
          <List></List>
        </div>
        <div className="field-right">
          <PostList numberOfPost={3}></PostList>
        </div>
      </div>
    </Provider>
  );
}

export default App;
