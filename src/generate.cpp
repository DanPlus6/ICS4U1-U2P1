#include <array>
#include <vector>
#include <random>
#include <optional>
#include <cmath>
#include <limits>
#include <iterator>
#include <algorithm>
#include <iostream>
#include <string>

std::array<std::optional<int>, 20> arr;

// Initialize random stuff
std::random_device rd;
std::mt19937 gen(rd());
std::uniform_int_distribution<int> init_dist(std::numeric_limits<int>::min(), std::numeric_limits<int>::max());
std::uniform_int_distribution<int> remove_dist(0, arr.size() - 1);
std::uniform_int_distribution<int> number_of_times_dist(0, std::numeric_limits<int>::max());

void add_remove(std::array<std::optional<int>, 20> &arr) {
    std::vector<int> removed_elements = {};

    for (std::size_t i = 0; i < std::floor(arr.size() / 2); ++i) {
        int target_index;
        do {
            target_index = remove_dist(gen);
        } while (!arr[target_index].has_value());

        removed_elements.push_back(arr[target_index].value());
        arr[target_index].reset();
    }

    std::shuffle(removed_elements.begin(), removed_elements.end(), gen);

    for (int i : removed_elements) {
        for (std::size_t j = 0; j < arr.size(); ++j) {
            if (!arr[j].has_value()) {
                arr[j] = i;
                break;
            }
        }
    }
}

void elon_sort(std::array<std::optional<int>, 20> &arr) { 
    for (int i = 0; i < number_of_times_dist(gen); ++i) {
        add_remove(arr);
    }
}

void print_array(const std::array<std::optional<int>, 20> &arr, bool is_start) {
    std::string starting_sentence = (is_start) ? "Starting Array\n{" : "\nSorted Array\n{";
    std::cout << starting_sentence;

    for (std::size_t i = 0; i < arr.size(); ++i) {
        if (arr[i].has_value()) {
            std::cout << arr[i].value();
        } else {
            std::cout << "Empty";
        }

        if (i != arr.size() - 1) {
            std::cout << ", \n";
        }
    }

    std::cout << "}\n";
}

int main() {
    // Create random array
    for (std::size_t i = 0; i < arr.size(); ++i) {
        arr[i] = init_dist(gen);
    }

    print_array(arr, true);

    elon_sort(arr);

    print_array(arr, false);

    return 0;
}
