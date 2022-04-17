import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import SideBar from './SideBar';
import Mail from './Mail';
import EmailList from './component/EmailList';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import SendMail from './component/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './component/Login';
import { auth } from './firebase';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if(user) {
        dispatch(login({
          displayName:user.displayName,
          email:user.email,
          photoUrl:user.photoURL
        }))
      }
    })
  },[])
  return (
    <Router>
      {!user ?(
        <Login />
      ):(
      <div className="App">
        <Header />

        <div className="app__body">
          <SideBar />

          <Switch>
            <Route path='/mail' >
              <Mail />
            </Route>
            <Route path='/'>
              <EmailList />
            </Route>
          </Switch>
        </div>
        
        {sendMessageIsOpen&& <SendMail />}
    </div>
      )}
      
    </Router>
    
  );
}

export default App;
