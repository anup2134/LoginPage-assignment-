import BackGroundImage2x from "/Background2x.png";
import BackGroundImage from "/Background.png";
import Amazon from "/Amazon.png";
import Tree from "/Tree.png";
import Tree2x from "/Tree2x.png";
import ErrorSVG from "./assets/Error.png";
import ErrorSVG2x from "./assets/Error2x.png";

import OAuthButton from "./components/OauthButton";
import { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const Error = () => {
    return (
      <div className="flex gap-x-1 items-center mt-1.5 myriadpro">
        <img src={ErrorSVG} alt="Small" className="block sm:hidden w-4 h-4" />
        <img src={ErrorSVG2x} alt="Large" className="hidden sm:block w-4 h-4" />
        <p className="text-[#EE2D6E] text-[13px]">
          The email field is required
        </p>
      </div>
    );
  };

  return (
    <main className="flex justify-center josefin-sans-400 w-full">
      <img
        src={BackGroundImage}
        alt="Small"
        className="block sm:hidden fixed -z-10"
      />
      <img
        src={BackGroundImage2x}
        alt="Large"
        className="hidden sm:block fixed -z-10"
      />
      <div className="sm:w-[577px] w-[90%] bg-white mt-[81px] rounded-t-[6px]">
        <div
          className="h-[58px] rounded-t-[6px] pt-5"
          style={{ boxShadow: "0px 3px 7px #00000029" }}
        >
          <img src={Amazon} className="w-[90px] h-7 block mx-auto" />
        </div>
        <div className="flex flex-col items-center sm:w-[385px] max-w-[385px] w-full m-auto">
          <h1 className="text-center text-[29px] text-green mb-6 mt-4 leading-[35px]">
            Login
          </h1>
          <img src={Tree} alt="Small" className="block sm:hidden" />
          <img src={Tree2x} alt="Large" className="hidden sm:block h-32" />
          <form className="flex flex-col mt-6 w-full">
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="outline-none bg-transparent border-b-2 border-b-[#E2E8F0] placeholder-green"
            />
            {!validEmail(email) && <Error />}
            <input
              type="password"
              className="outline-none bg-transparent mt-5 border-b-2 border-b-[#E2E8F0] placeholder-green"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button
              className="text-[19px] text-white bg-green mt-6 h-[49px] rounded-full cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Sign In
            </button>
          </form>
          <div className="flex justify-between w-full my-4 text-sm">
            <p>Forgot Password?</p>
            <p className="text-[#D9185F]">New User? Sign Up</p>
          </div>
          <p>or</p>
          <OAuthButton name="GOOGLE" bgColor="bg-[#4285F4]" />
          <OAuthButton name="FACEBOOK" bgColor="bg-[#1877F2]" margin="mt-4" />
        </div>
      </div>
    </main>
  );
}

export default LoginPage;
