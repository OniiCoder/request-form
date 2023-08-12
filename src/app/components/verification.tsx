"use client";

import { otpHasBeenSent, phoneHasBeenVerified } from "../hooks/context";

export default function Verification() {
  return (
    <div className="mt-8 flex flex-col items-center gap-4 pb-4">
      <div className="flex flex-col text-center">
        <span className="text-2xl font-bold">Kindly verify your identity</span>
        <span className="text-sm text-grayColor">
          Please enter your phone number, so we send you a verification code.
        </span>
      </div>

      <div className="flex flex-col">
        <div className="mb-2 text-sm font-medium">Phone Number</div>
        <input
          className="w-[323px] min-h-[40px] flex items-center justify-between py-2 px-3 text-left text-black bg-white border-2 rounded-md border-lighterGray focus:ring-primary-500 focus:border-primary-500 text-sm font-medium"
          type="number"
          placeholder="Enter your phone number"
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          onClick={otpHasBeenSent}
          className="h-[40px] inline-flex justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          Verify Phone Number
        </button>
      </div>
    </div>
  );
}
