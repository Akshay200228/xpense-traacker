import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import { fetchUser, userAccessToken } from "./utils/fetchUser";
import Signin from './components/Signin'

// import aos
import Aos from 'aos';
// import aos css
import 'aos/dist/aos.css';

// import components
import Header from './components/Header';


const App = () => {
  // initialize aos
  Aos.init({
    duration: 1500,
    offset: 100,
  });


  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = userAccessToken();
    if (!accessToken) {
      navigate("/login", { replace: true });
    } else {
      const [userInfo] = fetchUser();
      setUser(userInfo);
    }
  }, []);

  return (
    <div className='overflow-hidden'>
      <Routes>
        <Route path="signin" element={<Signin />} />
        <Route path="/*" element={<Header user={user} />} />
      </Routes>
    </div>
  );
};

export default App;
