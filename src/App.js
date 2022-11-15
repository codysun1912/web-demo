import './App.css';
import Navbar from './components/Navbar';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Chat from './components/Chat';


function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="max-w-[728px] mx-auto text-center">
      <session className="flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative" >
        <Navbar />
        {user ? <Chat /> : null}

      </session>
    </div>
  );
}

export default App;