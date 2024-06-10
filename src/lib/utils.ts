import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function mockResponseTime(): Promise<void> {
  return new Promise(resolve => {
    const time = randomBetween(1, 3) * 1000;
    setTimeout(() => resolve(), time);
  })
}


export function randomBetween(max: number, min: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);;
}

export function isValidEmail(email: string) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
}