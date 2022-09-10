import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import './layout/Header/Header';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';

function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route
                    exact
                    path='/'
                    element={<Home />}
                ></Route>
                <Route
                    exact
                    path='/contact'
                    element={<Contact />}
                ></Route>
                <Route
                    path='*'
                    element={<Navigate replace to='/' />}>
                </Route>
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
