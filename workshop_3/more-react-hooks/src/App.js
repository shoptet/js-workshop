import WarmUp from "./WarmUp";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import UseState from "./UseState";
import UseState2 from "./UseState2";
import Dependencies from "./Dependencies";
import Refs from "./Refs";

function App() {
    return (
        <BrowserRouter>
            <ul>
                <li>
                    <Link to="/">Warm-up + refs</Link>
                </li>
                <li>
                    <Link to="/refs">Another use of refs</Link>
                </li>
                <li>
                    <Link to="/usestate">useState</Link>
                </li>
                <li>
                    <Link to="/usestate2">useState 2</Link>
                </li>
                <li>
                    <Link to="/dependencies">Dependencies</Link>
                </li>
            </ul>

            <Routes>
                <Route path="/" element={<WarmUp />} />
                <Route path="/refs" element={<Refs />} />
                <Route path="/usestate" element={<UseState />} />
                <Route path="/usestate2" element={<UseState2 />} />
                <Route path="/dependencies" element={<Dependencies />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
