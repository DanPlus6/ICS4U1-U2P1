import { LuhnSum } from "./LuhnSum";

/**
 * Calculate check digit for credit card number
 * for credit card number valid for luhn's algorithm 
 * @param number the processing credit card number without a check digit
 * @returns check digit as a string
 */
export function GetCheckDigit(cardNum: string): string {
    // get luhn sum of number
    const sum: number = LuhnSum(cardNum, false);

    return (10 - (sum%10)) % 10;
}
