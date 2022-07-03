import { useState } from "react";

const Usedata = (Email, Password) => {

  const [E, setEmail] = useState('ruba.almasri@gmail.com');
  const [P, setPass] = useState('ruba1234');
  const [status, setSataus] = useState('');
  const handleLogin = () => {
    if (Email == E && Password == P) {
      setSataus('Done');
    }
    else {
      setSataus('Invalid Email or Password');
    }
  }
  return { status, handleLogin };
};

export default Usedata;