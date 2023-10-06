import React,{useEffect, useState} from 'react';
import './Navbar.css';
import logo from './logo.ico';
import SearchBar from './SearchBar/SearchBar';
import {RiVideoAddLine} from 'react-icons/ri';
import {BiUserCircle} from 'react-icons/bi';
import {IoMdNotificationsOutline} from 'react-icons/io';
import { Link } from 'react-router-dom';
import {GoogleLogin} from 'react-google-login';
import {gapi} from 'gapi-script';
import {useDispatch,useSelector} from 'react-redux';
import { login } from '../../actions/auth';
import Auth from '../../Pages/Auth/Auth';

function Navbar({toggleDrawer,setEditCreateChannelBtn}) {
  const [AuthBtn, setAuthBtn] = useState(false);
  const [failureCount, setFailureCount] = useState(0);
  const [countDown, setCountDown] = useState(0);
  const [isLoginDisabled, setIsLoginDisabled] = useState(false);
  //const CurrentUser = null;
  // const CurrentUser = {
  //   result:{
  //     email:"xyz@gmail.com",
  //     joinedOn:"2222-07-15T09:57:23.489Z",
  //   },
  // };
 const CurrentUser = useSelector((state) => state.currentUserReducer)
  console.log(CurrentUser)
  useEffect(() => {
    function start(){
      gapi.client.init({
        clientId:"1067243389850-bd047meotd2s4tbf0ifprflj9eerc1kf.apps.googleusercontent.com",
        scope:"email",
      });
    }
    gapi.load("client:auth2",start);
  },
  []);

  const dispatch = useDispatch();
  const onSuccess = (response) => {
    const Email = response.profileObj.email;
    console.log(Email);
    setFailureCount(0);
    dispatch(login({email:Email}))
  }; 

  useEffect(() => {
    if (failureCount === 3) {
      alert('Failed 3 times. Be careful!');
    }

    if (failureCount === 5) {
      alert('Account is blocked. Try again later.');
      // Disable login button or show countdown timer
      // You may want to send a request to the server to block the account.
      setCountDown(30);
      setIsLoginDisabled(true); // Disable the login button
      const countdownInterval = setInterval(() => {
        setCountDown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      // When the countdown is over, reset the login attempts and enable the button
      setTimeout(() => {
        clearInterval(countdownInterval);
        setFailureCount(0);
        setIsLoginDisabled(false);
        setCountDown(0);
      }, 3600000);
    }
  }, [failureCount]); // Use the updated failureCount value in useEffect

  const handleLogin = () => {
    const isLoginSuccessful = false;
    if(!isLoginSuccessful){
      setFailureCount((prevCount) => prevCount + 1);
    }else{
      setFailureCount(0);
    }
  }

  const onFailure = (response) => {
    setFailureCount((prevCount) => prevCount + 1);
    console.log("Failed",response);
  };
  return (
    <>
    <div className='Container_Navbar'>
        <div className="Burger_Logo_Navbar">
            <div className="burger" onClick={()=>toggleDrawer()}>
                <p></p>
                <p></p>
                <p></p>
            </div>
            <Link to={'/'} className='logo_div_Navbar'>
                <img src={logo} alt="" />
                <p className='logo_title_navbar'>YouTube</p>
            </Link>
        </div>
        <SearchBar />
        <RiVideoAddLine size={22} className={"vid_bell_Navbar"}/>
        <div className="apps_Box">
          <div className="appBox"></div>
          <div className="appBox"></div>
          <div className="appBox"></div>
          <div className="appBox"></div>
          <div className="appBox"></div>
          <div className="appBox"></div>
          <div className="appBox"></div>
          <div className="appBox"></div>
          <div className="appBox"></div>
        </div>
        <IoMdNotificationsOutline size={22} className='vid_bell_Navbar'/>
        <div className="Auth_cont_Navbar">
          {
            CurrentUser ? (<>
            <div className='Chanel_logo_App' onClick={()=>setAuthBtn(true)}>
              <p className="fstChar_logo_App">
                {
                  CurrentUser.result.name?(
                    <>
                    {CurrentUser.result.name.charAt(0).toUpperCase()}
                    </>
                  ):(<>
                    {CurrentUser.result.email.charAt(0).toUpperCase()}
                  </>)
                }
              </p>
            </div>
            </>):(<>
              {
                countDown ? (<>
                <p><b style={{color:"white"}}>Blocked</b></p>
                </>):(<>
                  <GoogleLogin
            clientId="1067243389850-bd047meotd2s4tbf0ifprflj9eerc1kf.apps.googleusercontent.com"
            onSuccess={onSuccess}
            onFailure={onFailure}
            render={(renderProps) => (
              <p onClick={renderProps.onClick} className="Auth_Btn">
              <BiUserCircle 
              onClick={handleLogin}
              disabled={isLoginDisabled}
              size={22}/>
              <b>Sign in</b>
          </p>
            )}
            />
                </>)
              }
            </>)
          }
        </div>
    </div>
    {
      AuthBtn&&
      <Auth
       setAuthBtn={setAuthBtn}
        User = {CurrentUser}
        setEditCreateChannelBtn={setEditCreateChannelBtn}
      />
    }
    </>
  );
}

export default Navbar;