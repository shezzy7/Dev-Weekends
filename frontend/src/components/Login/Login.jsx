import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import  styles from '../../styles/style.js'
import {Link} from 'react-router-dom';
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-9">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login to your Account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none blcok w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:border-blue-500 sm:text-auto"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={visible? 'text' : 'password'}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none blcok w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:border-blue-500 sm:text-auto"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(!visible)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(!visible)}
                  />
                )}
              </div>
            </div>

                <div className={`${styles.noramlFlex} justify-between`}>
                    <div className={`${styles.noramlFlex} `}>
                        <input type="checkbox" name="remeber-me" id="remember-me" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                        <label htmlFor="remeber-me" className="text-sm text-gray-900 ml-2">
                            Remeber me
                        </label>
                    </div>
                    <div className="text-sm">
                        <a href=".forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
                            Forgot Password
                        </a>
                    </div>
                </div>

                <div>
                    <button type="button"
                    className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600  hover:bg-blue-700">
                      Submit

                    </button>
                </div>
                <div className={`${styles.noramlFlex} w-full`}>
                  <h4>Didn't have an account?</h4>
                  <Link to='/signup' className='text-blue-600 pl-2'>Sign-Up</Link>
                </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
