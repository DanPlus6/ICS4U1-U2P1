// overload to accept string and number as input
export function Luhn(card: string): boolean;
export function Luhn(card: number): boolean;

/**
 * Uses Luhn's algorithm to check if a credit card
 * number is valid
 * @param card credit card number to check
 */
export function Luhn(card: string|number): boolean {
    // preprocess input
    const cardNum: string = `${card}`;

    let sum: number = 0;
    const N: number = cardNum.length;
    for (let i: number = 1; i < N; ++i) {
        let digit: number = Number(cardNum[i]);
        let gap: number = N-i;
        if (gap&1) {
            // sum += 
        }
    }
}

// Pseudocode from wikipedia
// function isValid(cardNumber[1..length])
//     sum := 0
//     for i from 1 to length do
//         digit := cardNumber[i]
//         offsetFromEnd := length - i
//         if (offsetFromEnd mod 2) == 1 then
//             sum := sum + digit
//         elseif digit < 5 then
//             sum := sum + 2 * digit
//         else
//             sum := sum + 2 * digit - 9
//         end if
//     end for
//     return (sum mod 10) == 0
// end function
