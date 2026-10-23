import { GetChkDig } from "./GetChkDig";
import crypto from 'crypto';

/**
 * Generates valid credit card number of specified length
 * @param len credit card num length
 * @return a valid credit card number
 */
export function GenCCNum(len: number = 16) {
    if (len < 9) return "";

    // generate random digits for card
    let cardNum: string = "";
    for (let i: number = 0; i < len - 1; ++i) {
        cardNum += crypto.randomInt(0,10);
    }

    // TODO: add MII/BIN

    // calculate check digit
    cardNum += GetChkDig(cardNum);
    return cardNum;
}
