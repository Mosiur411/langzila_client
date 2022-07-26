import {Routes,Route } from 'react-router-dom';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import { Routes, Route } from 'react-router-dom';
import Contact from './Contact/Contact';
import Home from './Home/Home';

const DevSixer = ({ show, setShow, theme, setTheme }) => {
    return (
        <div>
            <Routes>
                <Route index element={<Home show={show} setShow={setShow} them={theme} setTheme={setTheme} />} />
                <Route path="/signIn" element={<SignIn></SignIn>} />
                <Route path="/signUp" element={<SignUp></SignUp>} />
                <Route index path="/contact" element={<Contact show={show} setShow={setShow} them={theme} setTheme={setTheme} />} />
            </Routes>
        </div>
    );
};

export default DevSixer;