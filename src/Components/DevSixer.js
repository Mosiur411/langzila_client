import Home from './Home/Home';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import Contact from './Contact/Contact';
import Profile from './Dashboard/Profile';
import NotFound from './NotFound/NotFound';
import Audio from './ClasssRoom/Audio/Audio';
import Video from './ClasssRoom/Video/Video';
import Dashboard from './Dashboard/Dashboard';
import AddReview from './Dashboard/AddReview';
import RequiredAuth from './Auth/RequiredAuth';
import Hard from './Home/Language/Bangla/Hard';
import Easy from './Home/Language/Bangla/Easy';
import { Routes, Route } from 'react-router-dom';
import ClasssRoom from './ClasssRoom/ClasssRoom';
import LeaderBoard from './Dashboard/LeaderBoard';
import Bangla from './Home/Language/Bangla/Bangla';
import Medium from './Home/Language/Bangla/Medium';
import Support from './ClasssRoom/Support/Support';
import Achievements from './Dashboard/Achievements';
import Search from './ClasssRoom/Audio/Search/Search';
import CapitalGames from './CapitalGames/CapitalGames';
import EasyQuiz1 from './Home/Language/Bangla/EasyQuiz/EasyQuiz1';
import EasyQuiz2 from './Home/Language/Bangla/EasyQuiz/EasyQuiz2';
import EasyQuiz3 from './Home/Language/Bangla/EasyQuiz/EasyQuiz3';
import EasyQuiz4 from './Home/Language/Bangla/EasyQuiz/EasyQuiz4';
import EasyQuiz5 from './Home/Language/Bangla/EasyQuiz/EasyQuiz5';
import HindiAudio from './ClasssRoom/Audio/HindiAudio/HindiAudio';
import BanglaAudio from './ClasssRoom/Audio/BanglaAudio/BanglaAudio';
import BanglaVideo from './ClasssRoom/Video/BanglaVideo/BanglaVideo';
import EnglishAudio from './ClasssRoom/Audio/EnglishAudio/EnglishAudio';
import HindiVideo from './ClasssRoom/Video/HindiVideo/HindiVideo';
import EnglishVideo from './ClasssRoom/Video/EnglishVideo/EnglishVideo';
import AskQuestion from './Dashboard/AskQuestion';
import MediumQuiz1 from './Home/Language/Bangla/MediumQuiz/MediumQuiz1';
import MediumQuiz2 from './Home/Language/Bangla/MediumQuiz/MediumQuiz2';
import MediumQuiz3 from './Home/Language/Bangla/MediumQuiz/MediumQuiz3';
import MediumQuiz5 from './Home/Language/Bangla/MediumQuiz/MediumQuiz5';
import MediumQuiz4 from './Home/Language/Bangla/MediumQuiz/MediumQuiz4';
import HardQuiz1 from './Home/Language/Bangla/HardQuiz/HardQuiz1';
import HardQuiz2 from './Home/Language/Bangla/HardQuiz/HardQuiz2';
import HardQuiz3 from './Home/Language/Bangla/HardQuiz/HardQuiz3';
import HardQuiz4 from './Home/Language/Bangla/HardQuiz/HardQuiz4';
import HardQuiz5 from './Home/Language/Bangla/HardQuiz/HardQuiz5';
import EventCard from './Home/UpcomingEvents/EventCard';
import TypeWord from './LearnType/TypeWord';
import Certificate from './Certificate/Certificate';
import AboutUs from './AboutUs/AboutUs';

const DevSixer = ({ show, setShow }) => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home show={show} setShow={setShow} />} />
        <Route path='/about' element={<AboutUs show={show} setShow={setShow} />} />
        <Route path='/CapitalGames' element={<CapitalGames show={show} setShow={setShow} />} />
        <Route path='*' element={<NotFound show={show} setShow={setShow} />} />
        <Route index element={<Home show={show} setShow={setShow} />} />
        <Route path="/signIn" element={<SignIn></SignIn>} />
        <Route path="/signUp" element={<SignUp></SignUp>} />
        <Route index path="/contact" element={<Contact show={show} setShow={setShow} />} />
        <Route index path="/certificate" element={<Certificate show={show} setShow={setShow} />} />
        <Route index path="/support" element={<Support show={show} setShow={setShow} />} />
        <Route path='/support' element={<Support></Support>} />
        <Route path='/classroom' element={<ClasssRoom />} />
        <Route path='/eventCrad/:id' element={<EventCard />} />+





        <Route path="/" element={<Home show={show} setShow={setShow} />} />
        <Route
          path="/CapitalGames"
          element={<CapitalGames show={show} setShow={setShow} />}
        />
        <Route path="*" element={<NotFound show={show} setShow={setShow} />} />
        <Route index element={<Home show={show} setShow={setShow} />} />
        <Route path="/signIn" element={<SignIn></SignIn>} />
        <Route path="/signUp" element={<SignUp></SignUp>} />
        <Route
          index
          path="/contact"
          element={<Contact show={show} setShow={setShow} />}
        />
        <Route
          index
          path="/certificate"
          element={<Certificate show={show} setShow={setShow} />}
        />
        <Route
          index
          path="/support"
          element={<Support show={show} setShow={setShow} />}
        />
        <Route path="/support" element={<Support></Support>} />
        <Route path="/classroom" element={<ClasssRoom />} />

        <Route path="/typelearn" element={<TypeWord></TypeWord>} />
        <Route path="/classroom" element={<ClasssRoom />} />

        {/* joy */}
        <Route path="/audio" element={<Audio />}>
          <Route path="search" element={<Search />}></Route>
          <Route path="banglaaudio" element={<BanglaAudio />}></Route>
          <Route path="englishaudio" element={<EnglishAudio />}></Route>
          <Route path="hindiaudio" element={<HindiAudio />}></Route>
        </Route>

        <Route path="/video" element={<Video />}>
          <Route path="banglavideo" element={<BanglaVideo />}></Route>
          <Route path="hindivideo" element={<HindiVideo />}></Route>
          <Route path="englishvideo" element={<EnglishVideo />}></Route>
        </Route>

        <Route path="/bangla" element={<Bangla />}>
          <Route path="easy" element={<Easy />}></Route>
          <Route path="medium" element={<Medium />}></Route>
          <Route path="hard" element={<Hard />}></Route>
        </Route>

        <Route path="quiz/easyquiz1" element={<EasyQuiz1 />}></Route>
        <Route path="quiz/easyquiz2" element={<EasyQuiz2 />}></Route>
        <Route path="quiz/easyquiz3" element={<EasyQuiz3 />}></Route>
        <Route path="quiz/easyquiz4" element={<EasyQuiz4 />}></Route>
        <Route path="quiz/easyquiz5" element={<EasyQuiz5 />}></Route>
        {/* joy */}


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


        <Route path='medium/mediumquiz1' element={<MediumQuiz1 />}></Route>
        <Route path='medium/mediumquiz2' element={<MediumQuiz2 />}></Route>
        <Route path='medium/mediumquiz3' element={<MediumQuiz3 />}></Route>
        <Route path='medium/mediumquiz4' element={<MediumQuiz4 />}></Route>
        <Route path='medium/mediumquiz5' element={<MediumQuiz5 />}></Route>


        <Route path='hard/hardquiz1' element={<HardQuiz1 />}></Route>
        <Route path='hard/hardquiz2' element={<HardQuiz2 />}></Route>
        <Route path='hard/hardquiz3' element={<HardQuiz3 />}></Route>
        <Route path='hard/hardquiz4' element={<HardQuiz4 />}></Route>
        <Route path='hard/hardquiz5' element={<HardQuiz5 />}></Route>
        {/* joy */}



        {/* Arfat */}
        <Route path="/dashboard" element={<RequiredAuth><Dashboard /></RequiredAuth>} >
          <Route index element={<Profile></Profile>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route path="achievements" element={<Achievements></Achievements>}></Route>
          <Route path="certificates" element={<Certificate></Certificate>}></Route>
          <Route path="leaderboard" element={<LeaderBoard></LeaderBoard>}></Route>
          <Route path="ask" element={<AskQuestion></AskQuestion>}></Route>
        </Route>
        {/* Arfat */}

      </Routes>
    </div>
  );
};

export default DevSixer;
