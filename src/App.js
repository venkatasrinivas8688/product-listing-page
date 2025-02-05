import { Routes,Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute';

const App=() =>(
    <div>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route element={<ProtectedRoute/>}>
                <Route path="/" element={<Home/>}/>
            </Route>   
        </Routes>
    </div>
)

export default App;
