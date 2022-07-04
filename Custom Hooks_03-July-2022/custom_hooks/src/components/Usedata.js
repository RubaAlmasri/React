import { useState } from "react";

const Usedata = (Email, Password) => {

  const [E, setEmail] = useState('ruba.almasri@gmail.com');
  const [P, setPass] = useState('ruba1234');
  const [logged, setLogged] = useState(false);

  const [status, setSataus] = useState('');

  const handleLogin = () => {
    if (Email == E && Password == P) {
      setSataus('Done');
      setLogged(true);

    }
    else {
      setSataus('Invalid Email or Password');
      setLogged('false');

    }
  }
  return { status, logged, handleLogin };
};

export default Usedata;