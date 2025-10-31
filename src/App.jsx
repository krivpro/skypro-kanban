import './App.css';
import PopupExit from './components/PopupExit/PopupExit';
import PopupNewCard from './components/PopupNewCard/PopupNewCard';
import PopupBrowse from './components/PopupBrowse/PopupBrowse';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="wrapper">
      {/* Pop-up компоненты */}
      <PopupExit />
      <PopupNewCard />
      <PopupBrowse />
      
      {/* Основные компоненты */}
      <Header />
      <Main />
    </div>
  );
}

export default App;