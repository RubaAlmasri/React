import { useState } from "react";



const Usedata = (Email,Password) => {

    const [status, setSataus] = useState('');

  if(Email === 'ruba.almasri@gmail.com' && Password === '1234'){
    setSataus('Done');
  }
  else{
    setSataus('Invalid Email or Password');
  }
  return [status];
};
 
export default Usedata;