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
import EasyQuiz2 from './Home/Language/Bangla/EasyQuiz/EasyQuiz2';
import EasyQuiz3 from './Home/Language/Bangla/EasyQuiz/EasyQuiz3';
import EasyQuiz4 from './Home/Language/Bangla/EasyQuiz/EasyQuiz4';
import EasyQuiz5 from './Home/Language/Bangla/EasyQuiz/EasyQuiz5';
import Support from './Support/Support';
import ClasssRoom from './ClasssRoom/ClasssRoom';
import Audio from './ClasssRoom/Audio/Audio';
import Search from './ClasssRoom/Audio/Search/Search';
import BanglaAudio from './ClasssRoom/Audio/BanglaAudio/BanglaAudio';
import EnglishAudio from './ClasssRoom/Audio/EnglishAudio/EnglishAudio';
import HindiAudio from './ClasssRoom/Audio/HindiAudio/HindiAudio';

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

                <Route path='/support' element={<Support></Support>} />
                <Route path='/classroom' element={<ClasssRoom />} />



                {/* joy */}
                <Route path='/audio' element={<Audio />} >
                    <Route path="search" element={<Search />} ></Route>
                    <Route path="banglaaudio" element={<BanglaAudio />} ></Route>
                    <Route path="englishaudio" element={<EnglishAudio />} ></Route>
                    <Route path="hindiaudio" element={<HindiAudio />} ></Route>
                </Route>




                <Route path="/bangla" element={<Bangla />} >
                    <Route path="easy" element={<Easy />} ></Route>
                    <Route path="medium" element={<Medium />} ></Route>
                    <Route path="hard" element={<Hard />} ></Route>
                </Route>

                <Route path='quiz/easyquiz1' element={<EasyQuiz1 />}></Route>
                <Route path='quiz/easyquiz2' element={<EasyQuiz2 />}></Route>
                <Route path='quiz/easyquiz3' element={<EasyQuiz3 />}></Route>
                <Route path='quiz/easyquiz4' element={<EasyQuiz4 />}></Route>
                <Route path='quiz/easyquiz5' element={<EasyQuiz5 />}></Route>
                {/* joy */}


            </Routes>
        </div>
    );
};

export default DevSixer;