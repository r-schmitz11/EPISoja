import { useState, Image } from 'react';
import SwitchPanel from './SwitchPanel';
import { Link } from 'react-router-dom';

function Sign() {
  const [passwordtype, setPasswordtype] = useState("password");

  const toggleChange = () => {
    if (passwordtype === "password")
      setPasswordtype("text");
    else
      setPasswordtype("password");
  }
  return (
    <div className="relative w-[48%] h-3/5 rounded-3xl bg-white mx-auto flex flex-start-1" id="container">
      <div className="relative w-full h-full bg-white rounded-l-3xl float-left grid grid-rows-3 grid-flow-row place-items-center col-start-1">
        <div className="row-start-1">
          <h1 className="text-4xl text-center">Sign In</h1>
        </div>
        <div className="row-start-2">
          <form className="grid grid-rows-2 place-items-center gap-3" method="get" id="sigin">
            <input className="bg-gray-100 rounded-md h-11 w-72 indent-2 text-xl" type="email" placeholder="Email" required></input>
            <div className="grid place-items-end">
            <input className="bg-gray-100 rounded-md h-11 w-72 indent-2 text-xl" type={passwordtype} placeholder="Password" required>
            </input>
            <button className="relative bottom-8 right-2 btn btn-outline-primary" onClick={toggleChange} type = "button">
                     { passwordtype != "password"? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/></svg> :<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.885 14.988l3.104-3.098.011.11c0 1.654-1.346 3-3 3l-.115-.012zm8.048-8.032l-3.274 3.268c.212.554.341 1.149.341 1.776 0 2.757-2.243 5-5 5-.631 0-1.229-.13-1.785-.344l-2.377 2.372c1.276.588 2.671.972 4.177.972 7.733 0 11.985-8.449 11.985-8.449s-1.415-2.478-4.067-4.595zm1.431-3.536l-18.619 18.58-1.382-1.422 3.455-3.447c-3.022-2.45-4.818-5.58-4.818-5.58s4.446-7.551 12.015-7.551c1.825 0 3.456.426 4.886 1.075l3.081-3.075 1.382 1.42zm-13.751 10.922l1.519-1.515c-.077-.264-.132-.538-.132-.827 0-1.654 1.346-3 3-3 .291 0 .567.055.833.134l1.518-1.515c-.704-.382-1.496-.619-2.351-.619-2.757 0-5 2.243-5 5 0 .852.235 1.641.613 2.342z"/></svg> }
            </button>
            </div>
          </form>
        </div>
        <div className="row-start-3">
          <Link to="./Site">
            <button className="bg-[#000] text-white h-10 w-40 hover:scale-105 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-md" form="sigin" value="submit">SIGN IN</button>
          </Link>
        </div>
      </div>
      <div className="relative w-full h-full bg-white rounded-r-3xl float-right grid grid-rows-3 grid-flow-row place-items-center col-start-2">
        <div className="row-start-1">
          <h1 className="text-4xl text-center" id='create'>Create your account</h1>
        </div>
        <div className="row-start-2">
          <form className="grid grid-rows-3 place-items-center gap-3" method="get" id="signup">
            <input className="bg-gray-100 rounded-md h-11 w-72 indent-2 row-start-1 text-xl" type="email" placeholder="Email" required></input>
            <input className="bg-gray-100 rounded-md h-11 w-72 indent-2 row-start-2 text-xl" type="username" placeholder="Username" required></input>
            <input className="bg-gray-100 rounded-md h-11 w-72 indent-2 row-start-3 text-xl" type="password" placeholder="Password" required></input>
          </form>
        </div>
        <div className="row-start-3">
          <Link to="./Site">
            <button className="bg-[#000] text-white h-10 w-40 hover:scale-105 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] rounded-md" form="sigup" value="submit">SIGN UP</button>
          </Link>
        </div>
      </div>
      <SwitchPanel/>
    </div>
  );
}

export default Sign;
