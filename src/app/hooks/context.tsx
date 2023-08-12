import { signal } from "@preact/signals-react";

export const level = signal(1);
export const phoneIsVerified = signal(false);
export const otpIsVerified = signal(false);
export const otpSent = signal(false);

export const previous = () => {
  if (level.value > 1) {
    console.log("here");
    level.value = level.value - 1;
  }
};

export const next = () => {
  if (level.value < 6) {
    level.value = level.value + 1;
  }
};

export const cancel = () => {
  level.value = 1;
};

export const phoneHasBeenVerified = () => {
  phoneIsVerified.value = true;
  otpIsVerified.value = true;
};

export const otpHasBeenSent = () => {
  otpSent.value = true;
};
