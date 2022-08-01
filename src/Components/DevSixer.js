import { Routes, Route } from 'react-router-dom';
import CapitalGames from './CapitalGames/CapitalGames';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';

const DevSixer = ({ show, setShow}) => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home show={show} setShow={setShow} />} />
                <Route path='/CapitalGames' element={<CapitalGames show={show} setShow={setShow} />} />
                <Route path='*' element={<NotFound show={show} setShow={setShow} />} />
                <Route index element={<Home show={show} setShow={setShow} />} />
                <Route path="/signIn" element={<SignIn></SignIn>} />
                <Route path="/signUp" element={<SignUp></SignUp>} />
                <Route index path="/contact" element={<Contact show={show} setShow={setShow} />} />
            </Routes>
        </div>
    );
};

export default DevSixer;