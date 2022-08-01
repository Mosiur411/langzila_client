import { Routes, Route } from 'react-router-dom';
import CapitalGames from './CapitalGames/CapitalGames';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import Bangla from './Home/Language/Bangla/Bangla';
import Easy from './Home/Language/Bangla/Easy';
import Medium from './Home/Language/Bangla/Medium';
import Hard from './Home/Language/Bangla/Hard';
import EasyQuiz1 from './Home/Language/Bangla/EasyQuiz/EasyQuiz1';

const DevSixer = ({ show, setShow }) => {
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



                {/* joy */}
                <Route path="/bangla" element={<Bangla />} >
                    <Route path="easy" element={<Easy />} ></Route>
                    <Route path="medium" element={<Medium />} ></Route>
                    <Route path="hard" element={<Hard />} ></Route>
                </Route>

                <Route path='quiz/easyquiz1' element={<EasyQuiz1 />}></Route>
                {/* joy */}


            </Routes>
        </div>
    );
};

export default DevSixer;