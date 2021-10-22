/**
 * @author sunnz <https://github.com/sunnz>
 * @license ISC
 * @copyright 2021
 */

import { randomInt } from "crypto";

export const asciiLowercase = "abcdefghijkmnpqrstuvwxyz";
export const asciiLowercaseFull = "abcdefghijklmnopqrstuvwxyz";
export const asciiUppercase = "ABCDEFGHJKLMNPQRSTUVWXYZ";
export const asciiUppercaseFull = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export const asciiLetters = asciiLowercase + asciiUppercase;
export const asciiLettersFull = asciiLowercaseFull + asciiUppercaseFull;
export const digits = "23456789";
export const digitsFull = "0123456789";
export const punctuations = "!#$%&*+-./:;<=>?@^_~";
export const punctuationsFull = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
export const visible = asciiLetters + digits + punctuations;
export const visibleFull = asciiLettersFull + digitsFull + punctuationsFull;

/**
 * generate a random string of characters from the given set
 * @param characters to pick from
 * @param length of the string to generate
 * @returns a random string of length picked from characters
 */
export const ranFrom = (characters: string, length: number): string =>
  Array.from({ length })
    .map(() => characters[randomInt(characters.length)])
    .join("");

/**
 * generate a random string made up of visible and ambiguous characters that can be selected with a triple click
 * @param length of the string to generate
 * @returns a random string of the given length
 */
export const ranVisible = (length: number): string => ranFrom(visible, length);
