import {Menu,Form, Container,Message} from 'semantic-ui-react';
import React from 'react';
import {useHistory} from 'react-router-dom';
import firebase from '../utils/firebase';
import 'firebase/auth';
function Signin(){
    const [activeItem,setActiveItem] = React.useState("register");
    const [email ,setEmail] = React.useState('');
    const [password ,setpassword] = React.useState('');
    const history = useHistory();
    const [errorMessage,setErrorMessage] = React.useState("");
    const [isLoading,setIsLoading] = React.useState(false);
    function onSubmit(){
        setIsLoading(true);
        if (activeItem === 'register'){
            firebase
            .auth()
            .createUserWithEmailAndPassword(email,password)
            .then(()=>{
                history.push('/');
                setIsLoading(flase);
            })
            .catch((error)=>{
                switch(error.code){
                    case "auth/email-already-in-use":
                        setErrorMessage("信箱已存在");
                        break;
                    case "auth/invalid-email":
                        setErrorMessage("信箱格式不正確");
                        break;
                    case "auth/weak-password":
                        setErrorMessage("密碼強度不足");
                        break;
                    default:
                }
                setIsLoading(flase);
            });
        }
        else if(activeItem === 'signin'){
            firebase
            .auth()
            .signInWithEmailAndPassword(email,password)
            .then(()=>{
                history.push('/');
                setIsLoading(flase);
            })
            .catch((error)=>{
                switch(error.code){
                    case "auth/user-not-found":
                        setErrorMessage("信箱不存在");
                        break;
                    case "auth/invalid-email":
                        setErrorMessage("信箱格式不正確");
                        break;
                    case "auth/wrong-password":
                        setErrorMessage("密碼不正確");
                        break;
                    default:
                }
                setIsLoading(flase);
            });
        }
    }
    return (
        <Container>
            <Menu widths="2">
                <Menu.Item active={activeItem === 'register'} 
                    onClick = {()=>setActiveItem('register')}>註冊</Menu.Item>
                <Menu.Item active={activeItem === 'signin'} 
                    onClick = {()=>setActiveItem('signin')}>登入</Menu.Item>
            </Menu>
            <Form onSubmit = {onSubmit}>
                <Form.Input 
                    label = "信箱" 
                    value = {email} 
                    onChange = {(e)=>setEmail(e.target.value)} 
                    placeholder ="請輸入信箱"/>
                <Form.Input 
                    label = "密碼" 
                    value = {password} 
                    onChange = {(e)=>setpassword(e.target.value)} 
                    placeholder ="請輸入密碼"
                    type = "password"/>
                {errorMessage && <Message negative>{errorMessage}</Message>}
                <Form.Button >
                    {activeItem === 'register' && '註冊'}
                    {activeItem === 'signin' && '登入'}
                </Form.Button>

            </Form>
        </Container>  
    );
}
export default Signin;