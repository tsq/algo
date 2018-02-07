# About
[![Build Status](https://circleci.com/gh/tsq-test/algo/tree/master.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/tsq-test/algo/tree/master)


mastering data structures and algorithms using javascript

### Check 

```
npm install && npm test 
```

### Algorithms

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
| [Fibonacci](./fib/index.js)                                           | :star: :star: :star:                                                     

### Data Structure
Ways of organizing information with optimal runtime complexity for adding or removing records.


| Question                                                              | Difficulty                                                        
| --------------------------------------------------------------------- | ------------------------
| [The Queue](./queue/index.js)                                         | :star:                                                     
| [Underwater Queue Weaving](./weave/index.js)                          | :star: :star: :star:                                                     
| [The Stack](./stack/index.js)                                         | :star:                                                     
| [Queue from Stack](./qfroms/index.js)                                 | :star: :star: :star:                                                   
| [Linked Lists](./linkedlist/index.js)                                 | :star: :star: :star: :star: :star:                                                   
| [Back to Javascript - Events](./events/index.js)                      | :star: :star: :star:                                                  
| [Find the Midpoint](./midpoint/index.js)                              | :star: :star: :star: :star:                                                

* [Circular Lists]()
* [Step Back From teh Tail]()
* [Building a Tree]()
* [Tree Width with Level Width]()
* [My Best Friend, Binary Search Trees]()
* [Validating a Binary Search Tree]()
* [Sorting With BubbleSort]()
* [Sorting By Selection]()
* [Ack, MergeSort]()


**Queue**

FIFO

Queue Class

```     
            shift
            unshift  -> add
            push
Array       pop      -> remove
            splice
            slice    

```

**Stack**

FILO

Stack Class

```     
            shift   
            unshift  
            push    -> push
Array       pop     -> pop 
            splice
            slice    

```

**Linked Lists**



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


**Big O Notation**

```
O(n)        ->      Linear
O(1)        ->      Constant
O(n^2)      ->      Quadratic
```

**Identifying Runtime Complexity**

```
Iterating with a simple for loop through a single collection        -> Probably O(n)
Iterating through half a collection                                 -> Still O(n)
Iterating through two diff collections with separate for loops      -> O(n+m)
Two nested for loops iterating over the same collection             -> O(n^2)
Two nested for loops iterating over the diff collection             -> O(n*m)
Sorting                                                             -> O(n*log(n))
Seaching a sorted array?                                            -> O(log(n))

```

*Note: Space Complexity is a thing too.*

### Debug

1. Add a `debugger` statement in your function
2. Call the function manually
3. At the terminal, run `node inspect index.js`
4. To continue execution of the file, press `c` then `enter`
5. To lanch a `repl` session, type `repl` then `enter`
6. To exit the `repl`, press Control + C
