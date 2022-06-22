import {Menu, Search} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import React from 'react';

import firebase  from './utils/firebase';
import 'firebase/auth';
function Header(){
    const [user,setUsesr] = React.useState(null);
    React.useEffect(()=>{
        firebase.auth().onAuthStateChanged((currentUser)=>{
            setUsesr(currentUser);
        });
    },[]);
    return <Menu>
        <Menu.Item as={Link} to="/">Instagram</Menu.Item>
        <Menu.Item>
            <Search/>
        </Menu.Item>
        <Menu.Menu position = "right">
            {user ? (<>
               < Menu.Item as={Link} to="/new-post">
                    上傳新貼文
                </Menu.Item>
                < Menu.Item as={Link} to="/chat">
                    聊天
                </Menu.Item>
                < Menu.Item onClick={()=> firebase.auth().signOut()}>
                    登出
                </Menu.Item>
            </>):(<Menu.Item as={Link} to="/signin">
                註冊/登入
            </Menu.Item>)}
        </Menu.Menu>
        
    </Menu>;
}
export default Header;