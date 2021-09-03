import './App.css';
import {TodoContextProvider} from './context/TodoContext'
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <h1>Euro Msg Frontend Case</h1>
        <Dashboard/>
      </TodoContextProvider>
    </div>
  );
}

export default App;
