#include <iostream>
#include <string>
#include <random>

std::mt19937 gen(std::random_device{}());
std::uniform_int_distribution<int> digit_dist(0, 9);

/**
 * Generate card number digit valid for luhn's algorithm 
 * @param number attempted credit card number
 */
int luhn_sum(const std::string& cardNum) {
    int sum = 0;
    bool double_digit = true;

    for (int i = static_cast<int>(cardNum.size()) - 1; i >= 0; --i) {
        int digit = cardNum[i] - '0';

        if (double_digit) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        double_digit = !double_digit;
    }

    return sum;
}

/**
 * Generates valid credit card number
 * @param len credit card num length
 */
std::string generate_test_number(int len = 16) {
    if (len < 2) return "";

    std::string cardNum;
    for (int i = 0; i < len - 1; ++i) {
        cardNum += char('0' + digit_dist(gen));
    }

    // calculate check digit
    int sum = luhn_sum(cardNum + '0');
    int check_digit = (10 - sum%10) % 10;

    cardNum += char('0' + check_digit);
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
