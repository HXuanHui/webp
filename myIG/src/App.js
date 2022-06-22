import { BrowserRouter,Switch,Route } from "react-router-dom";

import Header from "./Header";
import Signin from "./pages/Signin";
import Post from "./pages/Post";
import NewPost from "./pages/Newpost";

function App(){
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path = "/" exact><Post/></Route>
                <Route path = "/signin" exact ><Signin/></Route>
                <Route path= "/new-post" exact><NewPost/></Route>
            </Switch>
        </BrowserRouter>
    );
    
}

export default App;