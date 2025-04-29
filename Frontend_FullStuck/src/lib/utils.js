import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
//c
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
