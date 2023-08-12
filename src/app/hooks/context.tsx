import { signal } from "@preact/signals-react";

export const level = signal(6);

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
