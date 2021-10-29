import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import Authcontext from './Context/auth-context';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  /* Por padrão, useEffect roda depois da primeira renderização e depois de toda atualização.
    */
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === '1') {
      setIsLoggedIn(true);
    }
  },
    []
  );

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    /*<Authcontext.Provider> - todos os componentes que estão abaixo dessa tag, terão acesso ao auth context*/
    <Authcontext.Provider value={{
      isLoggedIn: isLoggedIn
    }}>
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </Authcontext.Provider>
  );
}

export default App;
