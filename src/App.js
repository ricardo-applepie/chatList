import logo from './logo.svg';
import './App.css';
import { app } from './config/config';
import PopUpChatWindow from './components/popUpChatWindow/PopUPChatWindow';
import ChatMessages from './components/chatMessages/ChatMessages';

function App() {
  return (
    <div className="App">
      <div>
        <ChatMessages />
      </div>
      <PopUpChatWindow />
    </div>
  );
}

export default App;
