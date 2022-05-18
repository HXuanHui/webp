// import logo from './logo.svg';
import './App.css';


const userName= <input />;

const password=<input />;

const  login =(<button>登入</button>)

function App() {
  return (
    <div className="App">
      <h1>CGU Login</h1>
      <div className='UserName'>
        User Name {userName}
      </div>
      <div className='Password'>
        Password
        {password}
      </div>
      {login}
    </div>
  );
}

export default App;
