# Grade 12 CS Unit 2 Project 1: Credit Card Validation & Generation

> DISCLAIMER: this web project is NOT (safe) for production use

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run live-server
```

To type check:

```bash
bun check
```

To update packages:
```bash
bun update
```

This project was created using `bun init` in bun v1.4.3. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.

----------------------------------------------------------------------------------------------------------------------

## Project Plan

### Validate Credit Cards

#### Functions

- Check if passes Luhn’s algorithm
- Check company associated with card
- Check card type
- Check Expiration Date
- Check Cardholder name
- Notify user whether credit card is valid or not
- Check for the country of origin through cross-referencing BIN #’s to public databases
- Check if card belongs to retail partnership (e.g. Costco)

#### Features

- Generate a template (or image) of the credit card inputted through textboxes and dropdown menus
- As user types in credit card #, auto formats depending on card type
- Display issuer and industry of card


### Generate Valid Credit Cards:

#### Functions

- Reverse Luhn’s Algorithm
- Take inputs of name, expiration date, card type, retail partnership, and company associated with card
- Cards are generated with randomness
- Database should uniquely identify cards without linking card’s information to ids (use csprng)

#### Features

- Site frontend should be appeasable or not look 💩
- Generate a template (or image) of the credit card 
- Info can be input through textboxes and dropdown menus
- Front and back shown, switchable flip animation
- Logo, gradients, fonts are dynamically generated
- Generated credit cards are stored within a database, every new card generated must be checked for duplicate in database
- Check for the country of origin through cross-referencing BIN #’s to public databases
- Check if card belongs to retail partnership (e.g. Costco)
