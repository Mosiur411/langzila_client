import Home from "./Home/Home";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import Contact from "./Contact/Contact";
import NotFound from "./NotFound/NotFound";
import Audio from "./ClasssRoom/Audio/Audio";
import Video from "./ClasssRoom/Video/Video";
import Hard from "./Home/Language/Bangla/Hard";
import Easy from "./Home/Language/Bangla/Easy";
import { Routes, Route } from "react-router-dom";
import ClasssRoom from "./ClasssRoom/ClasssRoom";
import Bangla from "./Home/Language/Bangla/Bangla";
import Medium from "./Home/Language/Bangla/Medium";
import Support from "./ClasssRoom/Support/Support";
import Certificate from "./Certificate/Certificate";
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
import RequiredAuth from "./Auth/RequiredAuth";
import Dashboard from "./Dashboard/Dashboard";
import Profile from "./Dashboard/Profile";
import AddReview from "./Dashboard/AddReview";
import Achievements from "./Dashboard/Achievements";
import LeaderBoard from "./Dashboard/LeaderBoard";
import DashboardInfo from "./Dashboard/DashboardInfo";
import AskQuestion from "./Dashboard/AskQuestion";
import TypeWord from "./LearnType/TypeWord";

const DevSixer = ({ show, setShow }) => {
  return (
    <div>
      <Routes>
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
            path="leaderboard"
            element={<LeaderBoard></LeaderBoard>}
          ></Route>
          <Route path="ask" element={<AskQuestion></AskQuestion>}></Route>
        </Route>
        {/* Arfat */}
      </Routes>
    </div>
  );
};

export default DevSixer;
