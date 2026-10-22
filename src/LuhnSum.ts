/**
 * Calculate Luhn's sum for a credit card number
 * using Luhn's algorithm
 * @param number the processing credit card number, should be a valid number
 * @param hasCheck whether check digit is present in card number, default true
 * @returns luhn sum of card number
 */
export function LuhnSum(cardNum: string, hasCheck: boolean = true): number {
    const N: number = cardNum.length;
    // check card is of valid length
    if (N < 2) return -1;

    // process Luhn's sum
    let sum: number = 0;
    let double: boolean = !hasCheck;
    // check digits from right to left
    for (let i = N-1; i >= 0; --i) {
        try {
            let digit: number = Number(cardNum[i]);
            
            // double every other digit
            if (double) {
                digit *= 2;
                // if doubling a digit results in 2-digit number,
                // subtract 9 to effectively get sum of digits
                if (digit > 9) digit -= 9;
            }
                            
            sum += digit;
            double = !double;
        } catch (e: unknown) {
            if (e instanceof Error) {
                throw new Error(`LuhnSum: cardNum must be valid number as a string | Additional errors: ${e}`);
            } else {
                throw new Error(`LuhnSum: Unknwon error occured: ${e}`);
            }
        }
    }

    return sum;
}
