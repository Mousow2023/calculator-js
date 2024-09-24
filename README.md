# JavaScript Calculator

This is a simple calculator implemented using JavaScript that stores the ongoing calculation in `localStorage`. This allows users to retain their calculations even after refreshing or leaving the page. The calculator performs basic arithmetic operations such as addition, subtraction, multiplication, and division.

## Features

- **Basic Arithmetic Operations**: Supports addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`).
- **Persistent Calculations**: Uses `localStorage` to save the current calculation, allowing users to continue from where they left off.
- **Dynamic Display**: Continuously updates and displays the current calculation on the page.
  
## How It Works

- The calculator listens for user input (numbers and operators).
- When an operator or number is clicked, it updates the `calculation` string.
- The updated calculation is stored in `localStorage` and displayed on the page.
- Users can see their ongoing calculation even after refreshing the page, as the calculator loads the saved state from `localStorage`.

## Code Breakdown

The core of this project revolves around three main functions:

1. **`updateCalculation(sign)`**:  
   This function updates the `calculation` string based on user input. It accepts a `sign`, which can be a number, an operator (`+`, `-`, `*`, `/`), or a decimal point (`.`). It then appends this value to the ongoing calculation, stores the result in `localStorage`, and returns the updated calculation.

2. **`displayCalculation()`**:  
   This function fetches the saved calculation from `localStorage` and displays it on the page by updating the DOM.

3. **Local Storage**:  
   The ongoing calculation is saved using `localStorage.setItem()`. On page load, it retrieves the stored calculation (if any) using `localStorage.getItem()`.
