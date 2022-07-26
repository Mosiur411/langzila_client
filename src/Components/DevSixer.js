import { Routes, Route } from 'react-router-dom';
import CapitalGames from './CapitalGames/CapitalGames';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';

const DevSixer = ({ show, setShow, theme, setTheme }) => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home show={show} setShow={setShow} them={theme} setTheme={setTheme} />} />
                <Route path='/CapitalGames' element={<CapitalGames show={show} setShow={setShow} them={theme} setTheme={setTheme} />} />
                <Route path='*' element={<NotFound show={show} setShow={setShow} them={theme} setTheme={setTheme} />} />
            </Routes>
        </div>
    );
};

export default DevSixer;