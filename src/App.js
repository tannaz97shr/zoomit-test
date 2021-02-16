import './App.css';
import {BrowserRouter} from "react-router-dom";

import Posts from './components/Posts';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Posts/>

            </div>
        </BrowserRouter>
    );
}

export default App;
