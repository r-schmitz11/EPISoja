import SwitchPanel from './SwitchPanel';
import { Link } from 'react-router-dom';

function Sign() {
  return (
    <div className="relative w-[48%] h-3/5 rounded-3xl bg-white mx-auto flex flex-start-1" id="container">
      <div className="relative w-full h-full bg-white rounded-l-3xl float-left grid grid-rows-3 grid-flow-row place-items-center col-start-1">
        <div className="row-start-1">
          <h1 className="text-4xl text-center">Sign In</h1>
        </div>
        <div className="row-start-2">
          <form className="grid grid-rows-2 place-items-center gap-3" method="get" id="sigin">
            <input className="bg-gray-100 rounded-md h-11 w-72 indent-2 text-xl" type="email" placeholder="Email" required></input>
            <input className="bg-gray-100 rounded-md h-11 w-72 indent-2 text-xl" type="password" placeholder="Password" required></input>
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
