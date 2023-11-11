import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//icons
import { ReactComponent as Facebook } from "../../assets/imgs/facebook.svg";
import { ReactComponent as Google } from "../../assets/imgs/google.svg";
import { ReactComponent as Github } from "../../assets/imgs/github.svg";
import { ReactComponent as Logo } from "../../assets/illustrations/favicon.svg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useAppDispatch } from "../../hooks/hooks";
import { login } from "../../features/auth/auth-slice";

export default function Login() {
  const [isPassword, setIsPassword] = useState<boolean>(true);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const demoAuth = () => {
    dispatch(login());
    navigate("/");
  };

  return (
    <div className="md:grid md:grid-cols-2 md:justify-between min-h-screen">
      <div className="hidden min-h-screen bg-gray-900 md:flex justify-center items-center">
        <Logo className="w-32 h-32 text-main" />
      </div>
      <div className="w-full flex flex-col justify-center max-w-lg m-auto p-8 min-h-screen">
        <div>
          <h2 className="text-3xl text-gray-900 font-bold">Hello Again!</h2>
          <p className="text-gray-500 my-4">
            Welcome back! Please login to your account
          </p>
          <form>
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              id="email"
              className="w-full border border-gray-300 text-dark rounded-md text-base p-4 pr-16 my-2  focus:outline-main"
            />
            <div className="relative">
              <input
                type={isPassword ? "password" : "text"}
                placeholder="Password"
                name="password"
                id="password"
                className="w-full border border-gray-300 text-dark rounded-md text-base p-4 pr-16 my-2 focus:outline-main"
              />
              {isPassword ? (
                <AiFillEye
                  className="text-gray-400 absolute text-xl top-1/2 -translate-y-1/2 right-4 hover:cursor-pointer hover:text-dark"
                  onClick={() => setIsPassword(false)}
                />
              ) : (
                <AiFillEyeInvisible
                  className="text-gray-400 absolute text-xl top-1/2 -translate-y-1/2 right-4 hover:cursor-pointer hover:text-dark"
                  onClick={() => setIsPassword(true)}
                />
              )}
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div>
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember Me</label>
              </div>
              <Link
                to="/forgot-password"
                className="font-semibold text-main underline"
              >
                Forgot Password?
              </Link>
            </div>
            <button className="w-full mt-4 text-lg py-4 border-0 bg-main rounded-md text-white font-semibold">
              Sign in
            </button>
            <button
              className="w-full mt-4 text-lg py-4 border-0 bg-blue-500 rounded-md text-white font-semibold"
              onClick={demoAuth}
            >
              Demo?
            </button>
            <div className="flex items-center gap-8 mt-8">
              <div className="w-full h-[1px] bg-gray-400"></div>
              <p className="text-gray-500 whitespace-nowrap">
                or log in using{" "}
              </p>
              <div className="w-full h-[1px] bg-gray-400"></div>
            </div>

            <div className="flex gap-4 justify-center mt-8">
              <Google className="py-4 px-5 border border-gray-300 rounded-md w-24 h-16 hover:cursor-pointer hover:border-main" />
              <Facebook className="py-4 px-5 border border-gray-300 rounded-md w-24 h-16 hover:cursor-pointer hover:border-main" />
              <Github className="py-4 px-5 border border-gray-300 rounded-md w-24 h-16 hover:cursor-pointer hover:border-main" />
            </div>

            <div className="mt-12 text-gray-500 text-center">
              <p>
                Don't have an account.{" "}
                <Link
                  to="/create-account"
                  className="font-semibold text-main underline"
                >
                  Sign up now!
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
