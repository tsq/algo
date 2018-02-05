# About
[![Build Status](https://circleci.com/gh/tsq-test/algo/tree/master.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/tsq-test/algo/tree/master)


mastering data structures and algorithms using javascript es6

### Check 

```
npm install && npm test 
```

### List

| Question                                                              | Difficulty                                                        
| --------------------------------------------------------------------- | ------------------------
| [String Reversal](./reversestring/index.js)                           | :star:                                                     
| [Paldinromes](./paldinromes/index.js)                                 | :star:                                                     
| [Integer Reversal](./reversestring/index.js)                          | :star:                                                     
| [MaxChars](./maxchar/index.js)                                        | :star:                                                     
| [The Classic FizzBuzz](./fizzbuzz/index.js)                           | :star:                                                     
| [Array Chunking](./arraychunk/index.js)                               | :star: :star:                                                    
| [Anagrams](./anagrams/index.js)                                       | :star: :star:                                                   
| [Sentence Capitalization](./capitalize/index.js)                      | :star:                                                     
| [Printing Steps](./steps/index.js)                                    | :star: :star:                                                    
| [Two Sided Steps - Pyramids](./pyramid/index.js)                      | :star: :star: :star:                                                     
| [Find The Vowels](./vowels/index.js)                                  | :star:                                                     
| [Enter the Matrix Spiral](./matrix/index.js)                          | :star: :star: :star: :star:                                                      


* [Runtime Complexity]()
* [Runtime Complexity in Practice - Fibonacci]()
* [The Queue]()
* [Underwater Queue Weaving]()
* [Stack Em Up With Stacks]()
* [Two Become One]()
* [Linked Lists]()
* [Find the Midpoint]()
* [Circular Lists]()
* [Step Back From teh Tail]()
* [Building a Tree]()
* [Tree Width with Level Width]()
* [My Best Friend, Binary Search Trees]()
* [Validating a Binary Search Tree]()
* [Back to Javascript - Events]()
* [Sorting With BubbleSort]()
* [Sorting By Selection]()
* [Ack, MergeSort]()

### Debug

1. Add a `debugger` statement in your function
2. Call the function manually
3. At the terminal, run `node inspect index.js`
4. To continue execution of the file, press `c` then `enter`
5. To lanch a `repl` session, type `repl` then `enter`
6. To exit the `repl`, press Control + C

### Runtime complexity

Describes the performance of an algorithm. 

| Name                  | Expresion     | Description                                                        
| --------------------- | ------------- | -------------------------------------------------
| Constant Time         | `1`           | No matter how many elements we're working with, the <br/> algorithm/operation/whatever will always take the same <br/> amount of time
| Logarithmic Time      | `log(n)`      | You have this if doubling the number of elements you <br/> are iterating over doesn't double the amount of work. <br/> Always assume that searching operations are log(n)
| Linear Time           | `n`           | Iterating through all elements in a collection of data. If <br/> you see a for loop spanning from '0' to 'array.length', <br/> you probably have 'n', or linear runtime
| Quasilinear Time      | `n * log(n)`  | You have this if doubling the number of elements you <br/> are iterating over doesn't double the amount of work. <br/> Always assume that any sorting operating is  n*log(n)
| Quadratic Time        | `n^2`         | Every element in a collection has to be compared to <br/> every other element. `The handshake problem`
| Exponential Time      | `2^n`         | If you add a 'single' element to a collection, the <br/> processing power required doubles.