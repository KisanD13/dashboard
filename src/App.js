import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import DashBoard from './Pages/Dashboard/DashBoard';
import Kanban from './Pages/Kanban/Kanban';
import Users from './Pages/Users/Users';

function App() {
  return (
    <div id='dashboard'>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='dashboard' element={<DashBoard />} />
            <Route path='kanban-trello' element={<Kanban />} />
            <Route path='users' element={<Users />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
