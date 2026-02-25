import './App.css';
import AppRoutes from './components/AppRoutes/AppRoutes';
import { TasksProvider } from './contexts/TasksContext';

function App() {
  return (
    <TasksProvider>
      <div className="wrapper">
        <AppRoutes />
      </div>
    </TasksProvider>
  );
}

export default App;