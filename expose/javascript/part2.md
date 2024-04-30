# Part 2. A Little More of a Challenge...

1. ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^
   - The value of `3` will be printed since `i` was initialized with the var keyword.
     
2. ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^
   - `150` will be printed because line 13 stores the last value inside `discountedPrice`
     
3. ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^
   - `150` will be printed because 150 was the last value calculated from the for-loop
     
4. ^^^ What will this function return? Give a brief explanation why. If the code causes an error, explain why. ^^^
   - The function `discountPrices` will return a list of `prices.length` items at the given discount rate, rounded to the nearest cent. Given the input `[100, 200, 300], 0.5`, `[50,100,150]` is returned
     
5. ^^^ What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).
   - There will be an error at line 12, because `i` was initialized with `let` making `i` be bounded in the scope of that for-loop only
     
6. ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^
   - There will be an error at line 13, because `discountedPrice` was initialized with `let`, making 'discountedPrice' be bounded in the scope of the for-loop only
     
7. ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^
    - `150` will be printed. Although `finalPrice` is initialized as a `let` variable, it is still in the scope of the variable, so line 14 will not cause an error
      
8. ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^
   - This function will return the same list as when we used the `var` initialization for the variables. This is because every variable is used in their respective scopes. The list will be `[50,100,150]`
       
9. ^^^ What will happen at line 11 and why? If the code causes an error, explain why. ^^^
   - There will be an error at line 11 since `i` is only in the scope of that for-loop and line 11 is outside the scope of `i`
    
10. ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^
    - The length will be printed as `3`. There are no errors since the `const` variable `length` is never changed
      
11. ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^
   - The function `discountedPrices` will return `[50, 100, 150]` but the numbers are longer rounded to the nearest cent, depending on how many decimal places `1-discount` subtracts to

### Data Types

