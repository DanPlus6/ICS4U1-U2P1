import { GetChkDig } from "./GetChkDig";

/**
 * Generates valid credit card number of specified length
 * @param len credit card num length
 * @return a valid credit card number
 */
export function GenCCNum(len: number=16, industry: string, issuer: string) {
    if (len < 9) return "";

    let cardNum: string = "";
    for (let i: number = 0; i < len - 1; ++i) {
        cardNum += digit_dist(gen);
    }

    // calculate check digit
    cardNum += GetChkDig(cardNum);
    return cardNum;
}

/**
 * Main entrypoint
 * Generators credit card number of specified length by passing
 * valid positive integer to compiled generator in command line
 */
int main(int argc, char* argv[]) {
    int digs = 16;
    if (argc > 1) digs = std::stoi(argv[1]);
    std::cout << generate_test_number(digs) << std::endl;
}
