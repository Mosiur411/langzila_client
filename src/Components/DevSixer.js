import Home from "./Home/Home";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import Contact from "./Contact/Contact";
import Profile from "./Dashboard/Profile";
import NotFound from "./NotFound/NotFound";
import Audio from "./ClasssRoom/Audio/Audio";
import Video from "./ClasssRoom/Video/Video";
import Dashboard from "./Dashboard/Dashboard";
import AddReview from "./Dashboard/AddReview";
import RequiredAuth from "./Auth/RequiredAuth";
import Hard from "./Home/Language/Bangla/Hard";
import Easy from "./Home/Language/Bangla/Easy";
import { Routes, Route } from "react-router-dom";
import ClasssRoom from "./ClasssRoom/ClasssRoom";
import LeaderBoard from "./Dashboard/LeaderBoard";
import Bangla from "./Home/Language/Bangla/Bangla";
import Medium from "./Home/Language/Bangla/Medium";
import Support from "./ClasssRoom/Support/Support";
import Achievements from "./Dashboard/Achievements";
import Search from "./ClasssRoom/Audio/Search/Search";
import CapitalGames from "./CapitalGames/CapitalGames";
import EasyQuiz1 from "./Home/Language/Bangla/EasyQuiz/EasyQuiz1";
import EasyQuiz2 from "./Home/Language/Bangla/EasyQuiz/EasyQuiz2";
import EasyQuiz3 from "./Home/Language/Bangla/EasyQuiz/EasyQuiz3";
import EasyQuiz4 from "./Home/Language/Bangla/EasyQuiz/EasyQuiz4";
import EasyQuiz5 from "./Home/Language/Bangla/EasyQuiz/EasyQuiz5";
import HindiAudio from "./ClasssRoom/Audio/HindiAudio/HindiAudio";
import BanglaAudio from "./ClasssRoom/Audio/BanglaAudio/BanglaAudio";
import BanglaVideo from "./ClasssRoom/Video/BanglaVideo/BanglaVideo";
import EnglishAudio from "./ClasssRoom/Audio/EnglishAudio/EnglishAudio";
import HindiVideo from "./ClasssRoom/Video/HindiVideo/HindiVideo";
import EnglishVideo from "./ClasssRoom/Video/EnglishVideo/EnglishVideo";
import AskQuestion from "./Dashboard/AskQuestion";
import MediumQuiz1 from "./Home/Language/Bangla/MediumQuiz/MediumQuiz1";
import MediumQuiz2 from "./Home/Language/Bangla/MediumQuiz/MediumQuiz2";
import MediumQuiz3 from "./Home/Language/Bangla/MediumQuiz/MediumQuiz3";
import MediumQuiz5 from "./Home/Language/Bangla/MediumQuiz/MediumQuiz5";
import MediumQuiz4 from "./Home/Language/Bangla/MediumQuiz/MediumQuiz4";
import HardQuiz1 from "./Home/Language/Bangla/HardQuiz/HardQuiz1";
import HardQuiz2 from "./Home/Language/Bangla/HardQuiz/HardQuiz2";
import HardQuiz3 from "./Home/Language/Bangla/HardQuiz/HardQuiz3";
import HardQuiz4 from "./Home/Language/Bangla/HardQuiz/HardQuiz4";
import HardQuiz5 from "./Home/Language/Bangla/HardQuiz/HardQuiz5";
import EventCard from "./Home/UpcomingEvents/EventCard";
import TypeWord from "./LearnType/TypeWord";
import Certificate from "./Certificate/Certificate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyBoocking from "./Dashboard/MyBoocking";
import Assignment from "./Assignment/Assignment";
import Assignemnt1Quiz from "./Assignment/Assignemnt1Quiz/Assignemnt1Quiz";
import Assignemnt2Quiz from "./Assignment/Assignemnt2Quiz/Assignemnt2Quiz";
import Assignemnt3Quiz from "./Assignment/Assignemnt3Quiz/Assignemnt3Quiz";
import Translator from "./LanguageTranslator/Translator";
import Canvas from "./Canvas/Canvas";
import Hindi from "./Home/Language/Hindi/Hindi";
import HindiEasy from "./Home/Language/Hindi/HindiEasy";
import HindiMedium from "./Home/Language/Hindi/HindiMedium";
import HindiHard from "./Home/Language/Hindi/HindiHard";
import HindiEasyQ1 from "./Home/Language/Hindi/HindiEasyQ/HindiEasyQ1";
import HindiEasyQ2 from "./Home/Language/Hindi/HindiEasyQ/HindiEasyQ2";
import HindiEasyQ3 from "./Home/Language/Hindi/HindiEasyQ/HindiEasyQ3";
import HindiEasyQ4 from "./Home/Language/Hindi/HindiEasyQ/HindiEasyQ4";
import HindiMediumQ1 from "./Home/Language/Hindi/HIndiMedium/HindiMediumQ1";
import HindiMediumQ2 from "./Home/Language/Hindi/HIndiMedium/HindiMediumQ2";
import HindiMediumQ3 from "./Home/Language/Hindi/HIndiMedium/HindiMediumQ3";
import HindiMediumQ4 from "./Home/Language/Hindi/HIndiMedium/HindiMediumQ4";
import HindiHardQ1 from "./Home/Language/Hindi/HindiHard/HindiHardQ1";
import HindiHardQ2 from "./Home/Language/Hindi/HindiHard/HindiHardQ2";
import HindiHardQ3 from "./Home/Language/Hindi/HindiHard/HindiHardQ3";
import HindiHardQ4 from "./Home/Language/Hindi/HindiHard/HindiHardQ4";
import HindiHardQ5 from "./Home/Language/Hindi/HindiHard/HindiHardQ5";
import English from "./Home/Language/English/English";
import EnglishEasy from "./Home/Language/English/EnglishEasy";
import EnglishMedium from "./Home/Language/English/EnglishMedium";
import EnglishHard from "./Home/Language/English/EnglishHard";
import EnglishEasyQ1 from "./Home/Language/English/EnglishEasy/EnglishEasyQ1";
import EnglishEasyQ5 from "./Home/Language/English/EnglishEasy/EnglishEasyQ5";
import EnglishEasyQ4 from "./Home/Language/English/EnglishEasy/EnglishEasyQ3";
import EnglishEasyQ3 from "./Home/Language/English/EnglishEasy/EnglishEasyQ3";
import EnglishEasyQ2 from "./Home/Language/English/EnglishEasy/EnglishEasyQ2";
import AboutUs from "./AboutUs/AboutUs";
import PlayGames from "./PlayGames/PlayGames";
import TicTacToe from "./PlayGames/TicTacToe";
import ChessBoardUI from "./PlayGames/ChessBoardUI";
import Courses from "./Courses/Courses";
import MakeAdmin from "./Dashboard/MakeAdmin";
import Community from "./Community/Community";
import Addquestion from "./Community/Addquestion";
import Questionpage from "./Community/Questionpage";
import Voice from "./Voice/Voice";
import Speech from "./Voice/Speech";
import Cart from "./Courses/Cart";
import Todo from "./Todo/Todo";
const DevSixer = ({ show, setShow }) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home show={show} setShow={setShow} />} />
        <Route
          path="/about"
          element={<AboutUs show={show} setShow={setShow} />}
        />
        <Route
          path="/courses"
          element={<Courses show={show} setShow={setShow} />}
        />
        <Route path="/cart" element={<Cart show={show} setShow={setShow} />} />
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
        <Route path="texttovoice" element={<Voice />}></Route>
        <Route path="voicetotext" element={<Speech />}></Route>
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
        <Route
          path="/playGames"
          element={<PlayGames show={show} setShow={setShow} />}
        />
        <Route
          path="/playGames/ticTacToe"
          element={<TicTacToe show={show} setShow={setShow} />}
        />
        <Route
          path="/playGames/chessboardUI"
          element={<ChessBoardUI show={show} setShow={setShow} />}
        />
        <Route path="/eventCrad/:id" element={<EventCard />} />+
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
        <Route path="/eventCrad/:id" element={<EventCard />} />
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
        <Route path="/eventCrad/:id" element={<EventCard />} />+
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

        <Route path="/typelearn" element={<TypeWord></TypeWord>} />

        <Route path="/translator" element={<Translator />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/canvas" element={<Canvas />}></Route>


        <Route path="/forum" element={<Community />}></Route>
        <Route path="/addquestion" element={<Addquestion />}></Route>
        <Route path="/question/:id" element={<Questionpage />}></Route>
        {/* joy */}
        {/* JOy ClassRoom */}

        <Route path="/classroom" element={<ClasssRoom />} />
        <Route path="/support" element={<Support></Support>} />

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
        <Route path="/assignment" element={<Assignment />}>
          <Route path="assignment1quiz" element={<Assignemnt1Quiz />}></Route>
          <Route path="assignment2quiz" element={<Assignemnt2Quiz />}></Route>
          <Route path="assignment3quiz" element={<Assignemnt3Quiz />}></Route>
        </Route>
        {/* JOy ClassRoom */}

        {/* JOy Bangla Quiz */}
        <Route path="/bangla" element={<Bangla />}>
          <Route path="easy" element={<Easy />}></Route>
          <Route path="medium" element={<Medium />}></Route>
          <Route path="hard" element={<Hard />}></Route>
        </Route>
        {/* joy Bangla Quiz Card */}
        <Route path="quiz/easyquiz1" element={<EasyQuiz1 />}></Route>
        <Route path="quiz/easyquiz2" element={<EasyQuiz2 />}></Route>
        <Route path="quiz/easyquiz3" element={<EasyQuiz3 />}></Route>
        <Route path="quiz/easyquiz4" element={<EasyQuiz4 />}></Route>
        <Route path="quiz/easyquiz5" element={<EasyQuiz5 />}></Route>
        <Route path="medium/mediumquiz1" element={<MediumQuiz1 />}></Route>
        <Route path="medium/mediumquiz2" element={<MediumQuiz2 />}></Route>
        <Route path="medium/mediumquiz3" element={<MediumQuiz3 />}></Route>
        <Route path="medium/mediumquiz4" element={<MediumQuiz4 />}></Route>
        <Route path="medium/mediumquiz5" element={<MediumQuiz5 />}></Route>
        <Route path="hard/hardquiz1" element={<HardQuiz1 />}></Route>
        <Route path="hard/hardquiz2" element={<HardQuiz2 />}></Route>
        <Route path="hard/hardquiz3" element={<HardQuiz3 />}></Route>
        <Route path="hard/hardquiz4" element={<HardQuiz4 />}></Route>
        <Route path="hard/hardquiz5" element={<HardQuiz5 />}></Route>
        {/* joy Bangla Quiz Card */}



        {/* JOy Hindi Quiz */}
        <Route path="/hindi" element={<Hindi />}>
          <Route path="hindieasy" element={<HindiEasy />}></Route>
          <Route path="hindimedium" element={<HindiMedium />}></Route>
          <Route path="hindihard" element={<HindiHard />}></Route>
        </Route>

        {/* joy Hindi Quiz Card */}
        <Route path="hindiquiz/hindieasyQ1" element={<HindiEasyQ1 />}></Route>
        <Route path="hindiquiz/hindieasyQ2" element={<HindiEasyQ2 />}></Route>
        <Route path="hindiquiz/hindieasyQ3" element={<HindiEasyQ3 />}></Route>
        <Route path="hindiquiz/hindieasyQ4" element={<HindiEasyQ4 />}></Route>

        <Route path="hindimedium/mediumquiz1" element={<HindiMediumQ1 />}></Route>
        <Route path="hindimedium/mediumquiz2" element={<HindiMediumQ2 />}></Route>
        <Route path="hindimedium/mediumquiz3" element={<HindiMediumQ3 />}></Route>
        <Route path="hindimedium/mediumquiz4" element={<HindiMediumQ4 />}></Route>

        <Route path="hindihard/hindihardquiz1" element={<HindiHardQ1 />}></Route>
        <Route path="hindihard/hindihardquiz2" element={<HindiHardQ2 />}></Route>
        <Route path="hindihard/hindihardquiz3" element={<HindiHardQ3 />}></Route>
        <Route path="hindihard/hindihardquiz4" element={<HindiHardQ4 />}></Route>
        <Route path="hindihard/hindihardquiz5" element={<HindiHardQ5 />}></Route>

        {/* joy Hindi Quiz Card */}


        {/* JOy English Quiz */}
        <Route path="/english" element={<English />}>
          <Route path="englisheasy" element={<EnglishEasy />}></Route>
          <Route path="englishmedium" element={<EnglishMedium />}></Route>
          <Route path="englishhard" element={<EnglishHard />}></Route>
        </Route>

        {/* joy English Quiz Card */}
        <Route path="englishquiz/englisheasyQ1" element={<EnglishEasyQ1 />}></Route>
        <Route path="englishquiz/englisheasyQ2" element={<EnglishEasyQ2 />}></Route>
        <Route path="englishquiz/englisheasyQ3" element={<EnglishEasyQ3 />}></Route>
        <Route path="englishquiz/englisheasyQ4" element={<EnglishEasyQ4 />}></Route>
        <Route path="englishquiz/englisheasyQ5" element={<EnglishEasyQ5 />}></Route>

        <Route path="hindimedium/mediumquiz1" element={<HindiMediumQ1 />}></Route>
        <Route path="hindimedium/mediumquiz2" element={<HindiMediumQ2 />}></Route>
        <Route path="hindimedium/mediumquiz3" element={<HindiMediumQ3 />}></Route>
        <Route path="hindimedium/mediumquiz4" element={<HindiMediumQ4 />}></Route>

        <Route path="hindihard/hindihardquiz1" element={<HindiHardQ1 />}></Route>
        <Route path="hindihard/hindihardquiz2" element={<HindiHardQ2 />}></Route>
        <Route path="hindihard/hindihardquiz3" element={<HindiHardQ3 />}></Route>
        <Route path="hindihard/hindihardquiz4" element={<HindiHardQ4 />}></Route>
        <Route path="hindihard/hindihardquiz5" element={<HindiHardQ5 />}></Route>

        {/* joy English Quiz Card */}
        {/* joy Quiz*/}


        {/* Arfat */}
        <Route
          path="/dashboard"
          element={
            <RequiredAuth>
              <Dashboard />
            </RequiredAuth>
          }
        >
          <Route index element={<Profile></Profile>}></Route>
          <Route path="review" element={<AddReview></AddReview>}></Route>
          <Route
            path="achievements"
            element={<Achievements></Achievements>}
          ></Route>
          <Route
            path="certificates"
            element={<Certificate></Certificate>}
          ></Route>
          <Route
            path="leaderboard"
            element={<LeaderBoard></LeaderBoard>}
          ></Route>
          <Route path="ask" element={<AskQuestion></AskQuestion>}></Route>
          <Route path="myboocking" element={<MyBoocking></MyBoocking>}></Route>
          <Route path="alluser" element={<MakeAdmin></MakeAdmin>}></Route>
        </Route>
        {/* Arfat */}
      </Routes>
      <ToastContainer />
    </div>
  );
};

export default DevSixer;
