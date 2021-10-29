/**
 * @author sunnz (https://github.com/sunnz)
 * @license ISC
 * @copyright 2021
 */

import { randomBytes } from "crypto";

/**
 * generate a base64url (rfc 4648 section 5) encoded string of random bytes
 * @param length of bytes
 * @returns a base64url encoded string of given bytes
 */
export function ranBase64url(length: number): string {
  return randomBytes(length).toString("base64url");
}
