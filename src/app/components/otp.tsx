"use client";

import { phoneHasBeenVerified } from "../hooks/context";

export default function OTP() {
  return (
    <div className="mt-8 flex flex-col items-center gap-4 pb-4">
      <div className="container mx-auto">
        <div className="max-w-sm mx-auto md:max-w-lg">
          <div className="w-full">
            <div className="bg-white h-64 pb-3 rounded text-center">
              <h1 className="text-2xl font-bold">Enter Verification Code</h1>
              <div className="flex flex-col mt-2">
                <span className="text-sm text-grayColor">
                  We have sent a code to +233 12 345 6789
                </span>
              </div>

              <div
                id="otp"
                className="flex flex-row justify-center text-center px-2 mt-5"
              >
                <input
                  className="m-2 border h-10 w-10 text-center form-control rounded"
                  type="text"
                  id="first"
                  maxLength={1}
                />
                <input
                  className="m-2 border h-10 w-10 text-center form-control rounded"
                  type="text"
                  id="second"
                  maxLength={1}
                />
                <input
                  className="m-2 border h-10 w-10 text-center form-control rounded"
                  type="text"
                  id="third"
                  maxLength={1}
                />
                <input
                  className="m-2 border h-10 w-10 text-center form-control rounded"
                  type="text"
                  id="fourth"
                  maxLength={1}
                />
              </div>

              <div className="flex justify-center text-center mt-5">
                <a className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer">
                  <span className="font-bold">Resend OTP</span>
                  <i className="bx bx-caret-right ml-1"></i>
                </a>
              </div>
              <div className="mt-4 flex justify-center">
                <button
                  type="submit"
                  onClick={phoneHasBeenVerified}
                  className="h-[40px] inline-flex justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
