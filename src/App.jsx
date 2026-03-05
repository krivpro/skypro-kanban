import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRoutes from './components/AppRoutes/AppRoutes';
import { TasksProvider } from './contexts/TasksContext';
import { useThemeMode } from './contexts/ThemeContext';

function App() {
  const { themeName } = useThemeMode();

  return (
    <TasksProvider>
      <div className="wrapper">
        <AppRoutes />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={themeName === 'dark' ? 'dark' : 'light'}
        />
      </div>
    </TasksProvider>
  );
}

export default App;