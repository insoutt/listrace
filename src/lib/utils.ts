import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function mockResponseTime(): Promise<void> {
  return new Promise(resolve => {
    const time = randomBetween(2, 5) * 1000;
    setTimeout(() => resolve(), time);
  })
}


export function randomBetween(max: number, min: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);;
}