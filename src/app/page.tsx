"use client";
import Verification from "./components/verification";
import StepperForm from "./components/form";
import Nav from "./components/nav";
import BottomNav from "./components/bottom-nav";
import { useContext, useState } from "react";
import { otpIsVerified, otpSent, phoneIsVerified } from "./hooks/context";
import OTP from "./components/otp";

export default function Home() {
  const [contextValue, setContextValue] = useState<number>(1);

  return (
    <div>
      {phoneIsVerified.value && otpIsVerified.value && (
        <div>
          <div className="mx-auto max-w-[826px] mt-8 md:py-6">
            <Nav />
          </div>

          <div className="bg-white mx-auto max-w-[826px] p-6 rounded-lg shadow-md">
            <StepperForm />
            {/* <Verification /> */}
          </div>

          <div className="mx-auto max-w-[826px] px-6 md:px-0 mb-16">
            <BottomNav />
          </div>
        </div>
      )}

      {!phoneIsVerified.value && !otpIsVerified.value && !otpSent.value && (
        <div className="bg-white mx-auto max-w-[826px] p-6 rounded-lg shadow-md">
          <Verification />
        </div>
      )}

      {otpSent.value && !otpIsVerified.value && (
        <div className="bg-white mx-auto max-w-[826px] p-6 rounded-lg shadow-md">
          <OTP />
        </div>
      )}
    </div>
  );
}
