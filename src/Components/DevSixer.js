import {Routes,Route } from 'react-router-dom';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import Home from './Home/Home';

const DevSixer = ({ show, setShow, theme, setTheme }) => {
    return (
        <div>
            <Routes>
                <Route index element={<Home show={show} setShow={setShow} them={theme} setTheme={setTheme} />} />
                <Route path="/signIn" element={<SignIn></SignIn>} />
                <Route path="/signUp" element={<SignUp></SignUp>} />
            </Routes>
        </div>
    );
};

export default DevSixer;