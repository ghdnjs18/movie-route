import { BrowserRouter } from "react-router-dom";
import App from "./App";

function Browser() {
    return (
        <BrowserRouter basename="/movie-route">
            <App></App>
        </BrowserRouter>
    )
}

export default Browser