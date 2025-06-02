import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-js-topic-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './js-topic-list.component.html',
  styleUrl: './js-topic-list.component.scss',
})
export class JsTopicListComponent {
  searchTerm: string = '';
  topics = [
    {
      name: 'Hoisting',
      questions: [
        {
          question: 'What is hoisting in JavaScript?',
          answer:
            'Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase. $This means that you can use variables and functions before they are declared in the code. $Examples: ',
          code: ` 
          // Hoisting with var:
          console.log(x); // undefined
          // x is hoisted but not initialized
           var x = 5;
          console.log(x); // 5

          // Hoisting with let and const:
           console.log(y); // ReferenceError: Cannot access 'y' before initialization
           let y = 10;
           console.log(y); // 10

         //Hoisting with functions:
          console.log(myFunction()); // "Hello, World!"
          function myFunction() {
             return "Hello, World!";
           }

          //hoisting with function expressions:
          console.log(myFunction()); // TypeError: myFunction is not a function
          // myFunction is not hoisted
          const myFunction = function() {
            return "Hello, World!";
            };
            
            //hoisting with arrow functions:
            // console.log(myArrowFunction()); // TypeError: myArrowFunction is not a function
            // myArrowFunction is not hoisted
            const myArrowFunction = () => {
              return "Hello, World!";
              };
              `,
        },
        {
          question: 'How does hoisting affect variable declarations?',
          answer:
            'Hoisting affects variable declarations by allowing you to reference variables before they are declared in the code. However, only the declaration is hoisted, not the initialization. $This means that if you try to access a variable before it is initialized, it will return `undefined` for `var` declarations and throw a `ReferenceError` for `let` and `const` declarations.',
          code: `
            // Example of hoisting with var:
            console.log(x); // undefined
            var x = 5;
            console.log(x); // 5
            // Example of hoisting with let:
            console.log(y); // ReferenceError: Cannot access 'y' before initialization
            let y = 10;
            console.log(y); // 10
            // Example of hoisting with const:
            console.log(z); // ReferenceError: Cannot access 'z' before initialization
            const z = 15;
            console.log(z); // 15
          `,
        },
      ],
    },
    {
      name: 'Closures',
      questions: [
        {
          question: 'What is a closure in JavaScript?',
          answer:
            'A closure is a combination of a function and the lexical environment bundled together.$This means that a function has access to the variables and parameters of its outer function, even after the outer function has finished executing. $It allows a function to access variables from its outer scope even after the outer function has closed. $Closures are created whenever a function is defined inside another function. Closures are useful for creating private variables and encapsulating data. $Examples: bank account, counter,instagram post likes',
          code: `
          // Example of a closure:
          function outerFunction() {
            let outerVariable = 'I am from the outer function';

            return function innerFunction() {
              console.log(outerVariable); 
              // Accessing outerVariable from the inner  function
            };
          }
        },`,
        },
        {
          question: 'How do closures work in JavaScript?',
          answer:
            'Closures work by allowing an inner function to access variables from its outer function even after the outer function has executed. $When the inner function is returned, it retains a reference to the outer function’s scope, enabling it to access those variables. This is particularly useful for creating private variables and functions.',
          code: `
          // Example of how closures work:
          function createCounter() {
            let count = 0; // Private variable

            return {
              increment: function() {
                count++;
                console.log(count);
              },
              decrement: function() {
                count--;
                console.log(count);
              },
              getCount: function() {
                return count;
              }
            };`,
        },
        {
          question: 'What are some practical use cases for closures?',
          answer:
            'Closures have several practical use cases in JavaScript, including: $1. Creating private variables and methods, $2. Implementing data encapsulation, $3. Creating factory functions, $4. Maintaining state in asynchronous operations, $5. Implementing event handlers with preserved context.',
          code: `
          // Example of creating a private variable with a closure:
          function likesCounter() {
            let count = 0; // Private variable
            return {
              like: function() {
                count++;
                console.log('Likes:', count);
              },
              unlike: function() {
                if (count > 0) {
                  count--;
                  console.log('Likes:', count);
                } else {
                  console.log('No likes to remove');
                }
              }
            };
          }
          const postLikes = likesCounter();
          postLikes.like(); // Likes: 1
          postLikes.like(); // Likes: 2
          postLikes.unlike(); // Likes: 1
          postLikes.unlike(); // Likes: 0
          postLikes.unlike(); // No likes to remove
          `,
        },
      ],
    },
    {
      name: 'This Keyword',
      questions: [
        {
          question: 'What is the this keyword in JavaScript?',
          answer:
            ' This keyword in JavaScript refers to the current execution context, which can be a function, an object, or the global object. $ It allows you to access properties and methods of the current object or context in which the code is executing. $The value of this can vary depending on how a function is called, and it can be explicitly set using call(), apply(), or bind().',
          code: ``,
        },
        {
          question: 'This keyword inside a global context',
          answer:
            'In the global context, this refers to the global object, which is window in browsers or global in Node.js. $For example, if you access this in the global scope, it will refer to the global object.',
          code: `
          console.log(this); // In a browser, this refers to the window object
          console.log(this === window); // true
        `,
        },
        {
          question: 'This keyword inside a function',
          answer:
            'Inside a regular function, this refers to the global object. The value of this depends on strict mode and non-strict mode. $In non-strict mode, this refers to the global object, while in strict mode, it is undefined. Strict mode is enabled by adding "use strict"; at the beginning of the script or function. To set the value of this in a function, you can use the call(), apply(), or bind() methods.',
          code: `
          function regularFunction() {
            console.log(this); // In non-strict mode, this refers to the global object
          }
          regularFunction(); // Logs the global object (window in browsers)

          function strictFunction() {
            'use strict';
            console.log(this); // In strict mode, this is undefined
          }
          strictFunction(); // Logs undefined
        `,
        },
        {
          question: 'This keyword inside an object method',
          answer:
            'When a function is called as a method of an object, this refers to the object itself. $This allows you to access properties and methods of the object within the method. ',
          code: `
          const obj = {
            name: 'My Object',
            method: function() {
              console.log(this.name); // Logs 'My Object'
            }
          };
          obj.method(); // Calls the method, this refers to obj
        `,
        },
        {
          question: 'This keyword inside an constructor function',
          answer:
            'In a constructor function, this refers to the newly created instance of the object. $When you use the new keyword to create an instance, this points to that instance, allowing you to set properties and methods on it.',
          code: `
          function MyConstructor(name) {
            this.name = name; // this refers to the new instance
          }
          const instance = new MyConstructor('My Instance');
          console.log(instance.name); // Logs 'My Instance'
        `,
        },
        {
          question: 'This keyword inside inner functions',
          answer:
            'In inner functions, the value of this can change based on how the function is called. $If an inner function is called as a method of an object, this refers to that object. However, if it is called as a regular function, this will refer to the global object (or be undefined in strict mode). $To maintain the value of this from the outer function, you can use arrow functions or store the value in a variable.',
          code: `
          const obj = {
            name: 'Outer Object',
            method: function() {
              console.log(this.name); // Logs 'Outer Object'
              const innerFunction = function() {
                console.log(this.name); // Logs undefined in non-strict mode
              };
              innerFunction(); // Calls inner function
            }
          };
          obj.method(); // Calls method, this refers to obj

          // Using arrow function to maintain this
          const objWithArrow = {
            name: 'Outer Object with Arrow',
            method: function() {
              console.log(this.name); // Logs 'Outer Object with Arrow'
              const innerFunction = () => {
                console.log(this.name); // Logs 'Outer Object with Arrow'
              };
              innerFunction(); // Calls inner arrow function
            }
          };
          objWithArrow.method(); // Calls method, this refers to objWithArrow
        `,
        },
        {
          question: 'This keyword inside an arrow function',
          answer:
            'Arrow functions do not have their own this context. Instead, they lexically bind this from the surrounding scope. $This means that when you use an arrow function, it retains the value of this from the outer function or context in which it was defined.',
          code: `
          const obj = {
            name: 'Arrow Function Object',
            method: function() {
              console.log(this.name); // Logs 'Arrow Function Object'
              const innerArrowFunction = () => {
                console.log(this.name); // Logs 'Arrow Function Object'
              };
              innerArrowFunction(); // Calls inner arrow function
            }
          };
          obj.method(); // Calls method, this refers to obj
        `,
        },
        {
          question: 'How to explicitly set the value of this',
          answer:
            'You can explicitly set the value of this using the call(), apply(), or bind() methods. $These methods allow you to specify the context in which a function should be executed, effectively changing the value of this within that function.',
          code: `
          function showName() {
            console.log(this.name);
          }
          const obj1 = { name: 'Object 1' };
          const obj2 = { name: 'Object 2' };

          showName.call(obj1); // Logs 'Object 1'
          showName.apply(obj2); // Logs 'Object 2'

          const boundFunction = showName.bind(obj1);
          boundFunction(); // Logs 'Object 1'
        `,
        },
        {
          question: 'This keyword in event handlers',
          answer:
            'In event handlers, the value of this refers to the element that triggered the event. $This allows you to access properties and methods of the element within the event handler function.',
          code: `
          const button = document.getElementById('myButton');
          button.addEventListener('click', function() {
            console.log(this); // Logs the button element that was clicked
          });
        `,
        },
      ],
    },

    {
      name: 'Callback Functions',
      questions: [
        {
          question: 'What is a callback function in JavaScript?',
          answer:
            'A callback function is a function that is passed as an argument to another function and is executed after the completion of that function. $It allows you to define custom behavior that should occur once a certain task or operation is completed. $Callbacks are commonly used in asynchronous programming, event handling, and when working with higher-order functions. ',
          code: `
          // Example of a callback function:
          function fetchData(callback) {
            setTimeout(() => {
              const data = { message: 'Data fetched successfully!' };
              callback(data); // Calling the callback with the fetched data
            }, 2000);
          }

          fetchData((data) => {
            console.log(data.message); // Logs 'Data fetched successfully!' after 2 seconds
          });
        `,
        },
        {
          question: 'How do you define and use a callback function?',
          answer:
            'To define a callback function, you create a function that takes another function as an argument. $You can then call this callback function at the appropriate time within the main function. $Callbacks can be defined as named functions or anonymous functions (arrow functions).',
          code: `
          // Example of defining and using a callback function:
          function processData(data, callback) {
            // Simulating data processing
            const processedData = data.toUpperCase();
            callback(processedData); // Calling the callback with processed data
          }
          processData('hello', (result) => {
            console.log(result); // Logs 'HELLO'
          });
        `,
        },
        {
          question: 'What are some common use cases for callback functions?',
          answer:
            'Callback functions are commonly used in various scenarios, including: $1. Asynchronous operations (e.g., API calls, file reading), $2. Event handling (e.g., button clicks, form submissions), $3. Array methods (e.g., map, filter, reduce), $4. Customizing behavior in higher-order functions.',
          code: `
          // Example of using a callback function with an array method:
          const numbers = [1, 2, 3, 4, 5];
          const doubledNumbers = numbers.map((num) => num * 2);
          console.log(doubledNumbers); // Logs [2, 4, 6, 8, 10]
        `,
        },
        {
          question:
            'What is the difference between synchronous and asynchronous callbacks?',
          answer:
            'Synchronous callbacks are executed immediately within the main function and block further execution until they complete. $Asynchronous callbacks are executed after a certain operation completes (e.g., after a delay or when data is fetched) and do not block the main thread. $Asynchronous callbacks are often used in event-driven programming and for handling tasks that take time to complete.',
          code: `
          // Example of synchronous callback:
          function syncFunction(callback) {
            console.log('Before callback');
            callback(); // Synchronous execution
            console.log('After callback');
          }
          syncFunction(() => {
            console.log('This is a synchronous callback');
          });

          // Example of asynchronous callback:
          function asyncFunction(callback) {
            setTimeout(() => {
              console.log('Before async callback');
              callback(); // Asynchronous execution
              console.log('After async callback');
            }, 1000);
          }
          asyncFunction(() => {
            console.log('This is an asynchronous callback');
          });
        `,
        },
        {
          question: 'what is callback hell?',
          answer:
            'Callback hell is a term used to describe the deeply nested structure of callbacks that can occur when multiple asynchronous operations are chained together. $This can lead to code that is difficult to read, maintain, and debug. $It often results in a pyramid-like structure, making it hard to follow the flow of execution. $To avoid callback hell, developers can use techniques such as Promises, async/await, or modularizing code into smaller functions.',
          code: `
          // Example of callback hell:
          function callbackHellExample(callback) {
            setTimeout(() => {
              console.log('First operation completed');
              setTimeout(() => {
                console.log('Second operation completed');
                setTimeout(() => {
                  console.log('Third operation completed');
                  callback(); // Final callback
                }, 1000);
              }, 1000);
            }, 1000);
          }
          callbackHellExample(() => {
            console.log('All operations completed');
          });
        `,
        },
        {
          question: 'How to avoid callback hell in JavaScript?',
          answer:
            'To avoid callback hell, you can use several techniques: $1. Use Promises to handle asynchronous operations, $2. Use async/await syntax for cleaner and more readable code, $3. Modularize your code into smaller functions, $4. Use libraries like async.js or RxJS for better control over asynchronous flows.',
          code: ``,
        },
      ],
    },
    {
      name: 'Promises',
      questions: [
        {
          question: 'What is a Promise in JavaScript?',
          answer:
            'A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.promise is a container for a value that may not be available yet, but will be resolved at some point in the future. $It allows you to handle asynchronous operations in a more manageable way compared to traditional callback functions. $A Promise can be in one of three states: pending, fulfilled, or rejected.',
          code: `
          // Example of creating a Promise:
          const myPromise = new Promise((resolve, reject) => {
            const success = true; // Simulating success or failure
            if (success) {
              resolve('Operation completed successfully!');
            } else {
              reject('Operation failed.');
            }
          }
          );`,
        },
        {
          question: 'How do you create and use a Promise?',
          answer:
            'To create a Promise, you use the Promise constructor and pass in a function that takes two parameters: resolve and reject. $You call resolve() when the operation is successful and reject() when it fails. $To use a Promise, you can chain .then() for success and .catch() for error handling.',
          code: `
          // Example of using a Promise:
          const fetchData = () => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                const data = { message: 'Data fetched successfully!' };
                resolve(data); // Resolving the Promise with data
              }, 2000);
            });
          };
          fetchData()
            .then((data) => {
              console.log(data.message); // Logs 'Data fetched successfully!' after 2 seconds
            })
            .catch((error) => {
              console.error(error); // Handle error if the Promise is rejected
            });
          `,
        },
        {
          question: 'What are use of .then() and .catch() in Promises?',
          answer:
            'The .then() method is used to handle the successful resolution of a Promise. $It takes a callback function that receives the resolved value as an argument. $The .catch() method is used to handle errors or rejections of a Promise. $It takes a callback function that receives the error as an argument.',
          code: `
          // Example of using .then() and .catch():
          const myPromise = new Promise((resolve, reject) => {
            const success = true; // Simulating success or failure
            if (success) {
              resolve('Operation completed successfully!');
            } else {
              reject('Operation failed.');
            }
          });   
          myPromise
            .then((data) => {
              console.log(data); // Logs 'Operation completed successfully!' after 2 seconds
            })
            .catch((error) => {
              console.error(error); // Logs 'Operation failed.' if the Promise is rejected 
              // Handle error if the Promise is rejected

            
            }
          );
          `,
        },
        {
          question:
            'What is the difference between synchronous and asynchronous Promises?',
          answer:
            'Synchronous Promises are executed immediately and block the execution of subsequent code until they are resolved or rejected. $Asynchronous Promises, on the other hand, do not block the execution of code and allow other operations to continue while waiting for the Promise to resolve or reject.',
          code: `
          // Example of synchronous Promise (not common in practice):
          const syncPromise = new Promise((resolve) => {
            resolve('Synchronous Promise resolved!');
          });
          console.log(syncPromise); // Logs the Promise object immediately

          // Example of asynchronous Promise:
          const asyncPromise = new Promise((resolve) => {
            setTimeout(() => {
              resolve('Asynchronous Promise resolved after 2 seconds!');
            }, 2000);
          });
          asyncPromise.then((data) => {
            console.log(data); // Logs 'Asynchronous Promise resolved after 2 seconds!' after 2 seconds
          });
        `,
        },
        {
          question: 'What are some common use cases for Promises?',
          answer:
            'Promises are commonly used in various scenarios, including: $1. Handling asynchronous operations (e.g., API calls, file reading), $2. Chaining multiple asynchronous tasks, $3. Error handling in asynchronous code, $4. Managing complex asynchronous flows with .then() and .catch() methods, $5. Implementing parallel or sequential execution of asynchronous tasks.',
          code: `
          // Example of using Promises for API calls:
          const fetchDataFromAPI = (url) => {
            return new Promise((resolve, reject) => {
              fetch(url)
                .then((response) => {
                  if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }
                  return response.json();
                })
                .then((data) => resolve(data))
                .catch((error) => reject(error));
            });
          }`,
        },
        {
          question: 'How do you handle errors in Promises?',
          answer:
            'To handle errors in Promises, you can use the .catch() method. $This method is called when a Promise is rejected, and it allows you to catch and handle any errors that occur during the Promise chain.',
          code: `
          // Example of handling errors in a Promise chain:
          const fetchDataFromAPI = (url) => {
            return new Promise((resolve, reject) => {
              fetch(url)
                .then((response) => {
                  if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }
                  return response.json();
                }
                )
                .then((data) => resolve(data))
                .catch((error) => reject(error));
            }
          };`,
        },
        {
          question: 'What is Promise Api?',
          answer:
            'The Promise API provides a set of methods for working with Promises in JavaScript. $It includes methods like Promise.resolve(), Promise.reject(), Promise.all(), Promise.any(),Promise.allSettled(),  and Promise.race(). $These methods allow you to create, resolve, reject, and manage multiple Promises efficiently.',
          code: `
          // Example of using Promise API methods:
          const promise1 = Promise.resolve('Promise 1 resolved');
          const promise2 = Promise.resolve('Promise 2 resolved');
          const promise3 = Promise.reject('Promise 3 rejected');
          Promise.all([promise1, promise2])
            .then((results) => {
              console.log(results); // Logs ['Promise 1 resolved', 'Promise 2 resolved']
            })
            .catch((error) => {
              console.error(error); // Handle error if any Promise is rejected
            });
          Promise.race([promise1, promise3])
            .then((result) => {
              console.log(result); // Logs 'Promise 1 resolved' (the first resolved Promise)
            })
            .catch((error) => {
              console.error(error); // Logs 'Promise 3 rejected' (the first rejected Promise)
            });
          Promise.allSettled([promise1, promise2, promise3])
            .then((results) => {
              console.log(results); // Logs an array of objects with status and value/reason for each Promise
            }
            );
          Promise.any([promise1, promise2, promise3])
            .then((result) => {
              console.log(result); // Logs 'Promise 1 resolved' (the first resolved Promise)
            })
            .catch((error) => {
              console.error(error); // Logs 'All Promises were rejected'
            });

          `,
        },
      ],
    },
    {
      name: 'Async/Await',
      questions: [
        {
          question: 'What is async/await in JavaScript?',
          answer:
            'Async/await is a syntax for working with Promises in a more readable and synchronous-like manner. $It allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to understand and maintain. $The async keyword is used to define an asynchronous function, and the await keyword is used to pause the execution of the function until a Promise is resolved or rejected.',
          code: `
          // Example of using async/await:
          async function fetchData() {
            try {
              const response = await fetch('https://api.example.com/data');
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const data = await response.json();
              console.log(data); // Logs the fetched data
            } catch (error) {
              console.error(error); // Handle error if the Promise is rejected
            }
          }
          fetchData(); // Calls the async function
        `,
        },
        {
          question: 'How do you define an async function?',
          answer:
            'To define an async function, you use the async keyword before the function declaration or expression. $This indicates that the function will return a Promise, and you can use the await keyword inside it to pause execution until a Promise is resolved or rejected.',
          code: `
          // Example of defining an async function:
          async function myAsyncFunction() {
            return 'Hello, World!'; // This will be wrapped in a Promise
          }
          myAsyncFunction().then((result) => {
            console.log(result); // Logs 'Hello, World!'
          });
        `,
        },
        {
          question: 'What is the purpose of the await keyword?',
          answer:
            'The await keyword is used inside an async function to pause execution until a Promise is resolved or rejected. $It allows you to write asynchronous code in a more synchronous-like manner, making it easier to read and understand. $When you use await, the function will wait for the Promise to resolve before continuing with the next line of code.',
          code: `
          // Example of using the await keyword:
          async function getData() {
            const data = await fetch('https://api.example.com/data');
            const jsonData = await data.json();
            console.log(jsonData); // Logs the fetched JSON data
          }     
          `,
        },
        {
          question: 'What are the benefits of using async/await?',
          answer:
            'The benefits of using async/await include: $1. Improved readability and maintainability of asynchronous code, $2. Synchronous-like flow of execution, $3. Easier error handling with try/catch blocks, $4. Avoiding callback hell and deeply nested Promises, $5. Better debugging experience with stack traces.',
          code: `
          // Example of benefits of async/await:
          async function processData() {
            try {
              const data = await fetch('https://api.example.com/data');
              const jsonData = await data.json();
              console.log(jsonData); // Logs the fetched JSON data
            } catch (error) {
              console.error('Error fetching data:', error); // Handle error with try/catch
            }
          }
          processData(); // Calls the async function
        `,
        },
        {
          question: 'How do you handle errors in async/await?',
          answer:
            'You can handle errors in async/await using try/catch blocks. $When you use await, if the Promise is rejected, it will throw an error that can be caught in the catch block. $This allows you to handle errors gracefully and provide appropriate feedback or actions.',
          code: `
          // Example of handling errors in async/await:
          async function fetchData() {
            try {
              const response = await fetch('https://api.example.com/data');
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              const data = await response.json();
              console.log(data); // Logs the fetched data
            } catch (error) {
              console.error('Error fetching data:', error); // Handle error with try/catch
            }
          }
          fetchData(); // Calls the async function
        `,
        },
        {
          question: 'What is the difference between async/await and Promises?',
          answer:
            'Async/await is a syntactic sugar built on top of Promises. $While both async/await and Promises are used to handle asynchronous operations, async/await provides a more readable and synchronous-like syntax. $With async/await, you can write code that looks like it is executing sequentially, making it easier to understand and maintain.',
          code: `
          // Example of using Promises vs async/await:
          // Using Promises
          function fetchDataWithPromises() {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve('Data fetched successfully!');
              }, 2000);
            });
          }
          fetchDataWithPromises().then((data) => {
            console.log(data); // Logs 'Data fetched successfully!' after 2 seconds
          });

          // Using async/await
          async function fetchDataWithAsyncAwait() {
            const data = await fetchDataWithPromises();
            console.log(data); // Logs 'Data fetched successfully!' after 2 seconds
          }
          fetchDataWithAsyncAwait(); // Calls the async function
        `,
        },
      ],
    },
    {
      name: 'let var const',
      questions: [
        {
          question:
            'What is the difference between let, var, and const in JavaScript?',
          answer:
            'The main differences between let, var, and const in JavaScript are as follows: $1. Scope: $- var is function-scoped, meaning it is accessible within the function it is declared in. $- let and const are block-scoped, meaning they are accessible only within the block (e.g., if statement, loop) they are declared in. $2. Hoisting: $- var declarations are hoisted to the top of their scope, but their initialization is not. $- let and const declarations are also hoisted, but they cannot be accessed before their declaration (temporal dead zone). $3. Reassignment and Redeclaration: $- var can be reassigned and redeclared within its scope. $- let can be reassigned but not redeclared within its scope. $- const cannot be reassigned or redeclared; it must be initialized at the time of declaration. $4. Use cases: $- var is generally used for variables that need to be accessible throughout a function. $- let is used for variables that may change their value within a block scope. $- const is used for variables that should not change their value after being initialized. $- const is preferred for variables that should not be reassigned or redeclared.',
          code: `
          // Example of let, var, and const:
          function example() {
          // Using var
            var x = 5;
            console.log(x); // 5
            if (true) {
              var x = 10; // Redeclaring x with var
              console.log(x); // 10
            }
            console.log(x); // 10 (var is function-scoped)
            // Using let
            let y = 5;
            console.log(y); // 5
            if (true) {
              let y = 10; // Redeclaring y with let (block-scoped)
              console.log(y); // 10
            }
            console.log(y); // 5 (let is block-scoped)
            // Using const
            const z = 5;
            console.log(z); // 5
            // z = 10; // Error: Assignment to constant variable
            // const cannot be reassigned
          }
          example(); // Calls the example function
          `,
        },
        {
          question: 'When should you use let, var, or const?',
          answer:
            'You should use let when you need a variable that may change its value within a block scope. $Use var when you need a variable that should be accessible throughout a function, but it is generally recommended to avoid var in modern JavaScript due to its function-scoping behavior. $Use const when you want to declare a variable that should not be reassigned or redeclared, ensuring immutability of the variable after its initial assignment.',
          code: `
          // Example of when to use let, var, or const:
          function variableExample() {
            // Using let for a variable that may change
            let count = 0;
            for (let i = 0; i < 5; i++) {
              count += i;
            }
            console.log(count); // Logs 10

            // Using const for a variable that should not change
            const maxCount = 10;
            console.log(maxCount); // Logs 10
            // maxCount = 20; // Error: Assignment to constant variable

            // Using var (not recommended in modern JavaScript)
            var message = 'Hello, World!';
            console.log(message); // Logs 'Hello, World!'
          }
          variableExample(); // Calls the variableExample function
          `,
        },
      ],
    },
    {
      name: 'Event Loop',
      questions: [
        {
          question: 'What is the event loop in JavaScript?',
          answer:
            'The event loop is a fundamental concept in JavaScript that allows for asynchronous programming. $It is responsible for executing code, collecting and processing events, and executing queued sub-tasks. $The event loop continuously checks the call stack and the message queue to determine which tasks to execute next.',
          code: `
          // Example of the event loop in action:
          console.log('Start');

          setTimeout(() => {
            console.log('Timeout 1');
          }, 0);

          Promise.resolve().then(() => {
            console.log('Promise 1');
          });

          setTimeout(() => {
            console.log('Timeout 2');
          }, 0);

          console.log('End');
        `,
        },
        {
          question: 'How does the event loop handle asynchronous operations?',
          answer:
            'The event loop handles asynchronous operations by placing them in a callback queue (or message queue) when they are completed. $When the call stack is empty, the event loop checks the callback queue and executes the callbacks in the order they were added. $This allows JavaScript to perform non-blocking I/O operations and handle events without freezing the main thread.',
          code: `
          // Example of asynchronous operations in the event loop:
          console.log('Start');
          setTimeout(() => {
            console.log('Timeout 1');
          }
            , 0);
          Promise.resolve().then(() => {
            console.log('Promise 1');
          }
          );
          setTimeout(() => {
            console.log('Timeout 2');
          }
            , 0);
          console.log('End');
        `,
        },
        {
          question:
            'What is the call stack and how does it relate to the event loop?',
          answer:
            'The call stack is a data structure that keeps track of function calls in JavaScript. $When a function is called, it is added to the top of the call stack, and when it returns, it is removed from the stack. $The event loop continuously checks the call stack and executes tasks from the callback queue when the stack is empty. $This allows JavaScript to handle asynchronous operations without blocking the main thread.',
          code: `
          // Example of the call stack in action:
          function firstFunction() {
            console.log('First Function');
            secondFunction();
          }
          function secondFunction() {
            console.log('Second Function');
          }
          firstFunction(); // Calls firstFunction, which adds it to the call stack
        `,
        },
        {
          question:
            'What is global execution context and how does it relate to the event loop?',
          answer:
            'The global execution context is the default context in which JavaScript code runs. $It is created when the JavaScript engine starts executing the code and contains global variables and functions. $The event loop operates within the global execution context, allowing it to manage asynchronous operations and handle events while maintaining the global scope.',
          code: `
          // Example of global execution context:
          console.log('Global Execution Context');
          const globalVariable = 'I am a global variable';
          function globalFunction() {
            console.log('I am a global function');
          }
          globalFunction(); // Calls the global function within the global execution context
        `,
        },
        {
          question:
            'What is Microtask Queue and how does it relate to the event loop?',
          answer:
            'The Microtask Queue is a queue that holds microtasks, which are tasks that need to be executed after the currently executing script but before the next event loop iteration. $Microtasks include Promise callbacks and MutationObserver callbacks. $The event loop processes microtasks after the current task completes and before processing any other tasks in the callback queue, ensuring that microtasks are executed as soon as possible.',
          code: `
          // Example of Microtask Queue in action:
          console.log('Start');
          Promise.resolve().then(() => {
            console.log('Microtask 1');
          });
          setTimeout(() => {
            console.log('Timeout 1');
          }, 0);
          Promise.resolve().then(() => {
            console.log('Microtask 2');
          });
          console.log('End');
        `,
        },
        {
          question:
            'What is the difference between callback Queue and Microtask Queue?',
          answer:
            'The Callback Queue (or Message Queue) holds tasks that are scheduled to be executed after the current script completes, such as setTimeout and setInterval callbacks. $The Microtask Queue holds microtasks that need to be executed immediately after the current task but before the next event loop iteration, such as Promise callbacks. $Microtasks have higher priority than regular tasks in the Callback Queue, meaning they will be executed first before any tasks in the Callback Queue.',
          code: `
          // Example of Callback Queue vs Microtask Queue:
          console.log('Start');
          setTimeout(() => {
            console.log('Callback 1');
          }, 0);
          Promise.resolve().then(() => {
            console.log('Microtask 1');
          });
          setTimeout(() => {
            console.log('Callback 2');
          }, 0);
          Promise.resolve().then(() => {
            console.log('Microtask 2');
          });
          console.log('End');
        `,
        },
        {
          question:
            'What is web APIs and how does it relate to the event loop?',
          answer:
            'Web APIs are browser-provided APIs that allow JavaScript to interact with the browser and perform tasks such as making HTTP requests, manipulating the DOM, and handling events. $When an asynchronous operation is initiated using a Web API (e.g., setTimeout, fetch), the event loop places the callback in the Callback Queue once the operation is complete. $This allows JavaScript to continue executing other code while waiting for the asynchronous operation to finish.',
          code: `
          // Example of using Web APIs with the event loop:
          console.log('Start');
          setTimeout(() => {
            console.log('Web API Callback');
          }, 1000); // Using setTimeout as a Web API
          fetch('https://api.example.com/data')
            .then((response) => response.json())
            .then((data) => {
              console.log('Fetched Data:', data);
            });
          console.log('End');
        `,
        },
        {
          question:
            'What is js engine and how does it relate to the event loop?',
          answer:
            'The JavaScript engine is the runtime environment that executes JavaScript code. $It is responsible for parsing, compiling, and executing JavaScript code, as well as managing memory and handling asynchronous operations. $The event loop is a core part of the JavaScript engine that allows it to handle asynchronous tasks and events efficiently, ensuring that the main thread remains responsive while executing JavaScript code.',
          code: ``,
        },
      ],
    },
    {
      name: 'DOM Manipulation',
      questions: [
        {
          question: 'What is the DOM in JavaScript?',
          answer:
            'The DOM (Document Object Model) is a programming interface for web documents. $It represents the structure of a document as a tree of objects, where each object corresponds to an element in the document. $JavaScript can interact with the DOM to manipulate the content, structure, and style of web pages dynamically.',
          code: `
          // Example of accessing and manipulating the DOM:
          const heading = document.getElementById('myHeading');
          heading.textContent = 'Hello, World!'; // Changing the text content of an element
        `,
        },
        {
          question: 'How do you select elements in the DOM using JavaScript?',
          answer:
            'You can select elements in the DOM using various methods provided by the document object, such as getElementById(), getElementsByClassName(), getElementsByTagName(), querySelector(), and querySelectorAll(). $These methods allow you to access specific elements or groups of elements based on their IDs, classes, tags, or CSS selectors.',
          code: `
          // Example of selecting elements in the DOM:
          const myElement = document.getElementById('myElement'); // Selecting an element by ID
          const myClassElements = document.getElementsByClassName('myClass'); // Selecting elements by class name
          const myTagElements = document.getElementsByTagName('div'); // Selecting elements by tag name
          const myQueryElement = document.querySelector('.myQuery'); // Selecting the first element that matches a CSS selector
        `,
        },
        {
          question: 'What are some common DOM manipulation methods?',
          answer:
            'Common DOM manipulation methods include: $1. appendChild() - Adds a new child node to an element, $2. removeChild() - Removes a child node from an element, $3. createElement() - Creates a new HTML element, $4. setAttribute() - Sets an attribute on an element, $5. classList.add() - Adds a class to an element, $6. classList.remove() - Removes a class from an element.',
          code: `
          // Example of common DOM manipulation methods:
          const newElement = document.createElement('div'); // Creating a new div element
          newElement.textContent = 'This is a new element'; // Setting the text content of the new element
          const parentElement = document.getElementById('parentElement');
          parentElement.appendChild(newElement); // Appending the new element to the parent element
          const childElement = document.getElementById('childElement');
          parentElement.removeChild(childElement); // Removing a child element from the parent
        `,
        },
        {
          question:
            'How do you add or remove classes from elements in the DOM?',
          answer:
            'You can add or remove classes from elements in the DOM using the classList property. $The classList property provides methods like add(), remove(), toggle(), and contains() to manipulate classes easily. $This allows you to change the appearance of elements dynamically by adding or removing CSS classes.',
          code: `
          // Example of adding and removing classes from elements:
          const myElement = document.getElementById('myElement');
          myElement.classList.add('active'); // Adding a class
          myElement.classList.remove('inactive'); // Removing a class
          myElement.classList.toggle('highlight'); // Toggling a class on/off
        `,
        },
        {
          question: 'What is event delegation in DOM manipulation?',
          answer:
            'Event delegation is a technique in DOM manipulation where a single event listener is attached to a parent element instead of individual child elements. $This allows you to handle events for multiple child elements efficiently, as the event bubbles up from the child to the parent. $It reduces memory usage and improves performance by minimizing the number of event listeners.',
          code: `
          // Example of event delegation:
          const parentElement = document.getElementById('parentElement');
          parentElement.addEventListener('click', (event) => {
            if (event.target.matches('.child')) {
              console.log('Child element clicked:', event.target);
            }
          });
        `,
        },
        {
          question: 'How do you handle events in the DOM?',
          answer:
            'You can handle events in the DOM by attaching event listeners to elements using methods like addEventListener(). $This allows you to specify a callback function that will be executed when the specified event occurs (e.g., click, mouseover, keypress). $You can also remove event listeners using removeEventListener() when they are no longer needed.',
          code: `
          // Example of handling events in the DOM:
          const button = document.getElementById('myButton');
          button.addEventListener('click', () => {
            console.log('Button clicked!');
          });
        `,
        },
      ],
    },
    {
      name: 'Prototypes',
      questions: [
        {
          question: 'What is a prototype in JavaScript?',
          answer:
            'A prototype in JavaScript is an object that serves as a template for creating other objects. $Every JavaScript object has a prototype, which is used to inherit properties and methods from another object. $This allows for the creation of reusable code and the implementation of inheritance in JavaScript.',
          code: `
          // Example of using prototypes:
          function Person(name) {
            this.name = name;
          }
          Person.prototype.greet = function() {
            console.log('Hello, my name is ' + this.name);
          };
          const john = new Person('John');
          john.greet(); // Logs 'Hello, my name is John'
        `,
        },
        {
          question: 'How do you create an object with a prototype?',
          answer:
            'You can create an object with a prototype by defining a constructor function and adding properties and methods to its prototype. $When you create an instance of the constructor function using the new keyword, it inherits properties and methods from the prototype.',
          code: `
          // Example of creating an object with a prototype:
          function Animal(type) {
            this.type = type;
          }
          Animal.prototype.makeSound = function() {
            console.log(this.type + ' makes a sound');
          };
          const dog = new Animal('Dog');
          dog.makeSound(); // Logs 'Dog makes a sound'
        `,
        },
        {
          question: 'What is the prototype chain?',
          answer:
            'The prototype chain is the series of objects that are linked together through their prototypes. $When you access a property or method on an object, JavaScript first checks if it exists on the object itself. If not, it looks up the prototype chain until it finds the property or reaches the end of the chain (null). $This allows for inheritance and sharing of properties and methods between objects.',
          code: `
          // Example of the prototype chain:
          function Vehicle(type) {
            this.type = type;
          }
          Vehicle.prototype.drive = function() {
            console.log(this.type + ' is driving');
          };
          function Car(brand) {
            Vehicle.call(this, 'Car'); // Call Vehicle constructor
            this.brand = brand;
          }
          Car.prototype = Object.create(Vehicle.prototype); // Set Car's prototype to Vehicle
          Car.prototype.constructor = Car; // Set the constructor back to Car
          const car = new Car('Toyota');
          car.drive(); // Logs 'Toyota is driving'
        `,
        },
        {
          question:
            'What is the difference between prototype and prototype chain?',
          answer:
            'The prototype is an object that serves as a template for creating other objects. $Every JavaScript object has a prototype, which is used to inherit properties and methods from another object. $The prototype chain is the series of objects that are linked together through their prototypes. $When you access a property or method on an object, JavaScript first checks if it exists on the object itself. If not, it looks up the prototype chain until it finds the property or reaches the end of the chain (null). $In summary, the prototype is a single object, while the prototype chain is a series of linked prototypes.',
          code: `
          // Example of prototype vs prototype chain:
          function Shape(name) {
            this.name = name;
          }
          Shape.prototype.getName = function() {
            return this.name;
          };
          function Circle(radius) {
            Shape.call(this, 'Circle'); // Call Shape constructor
            this.radius = radius;
          }
          Circle.prototype = Object.create(Shape.prototype); // Set Circle's prototype to Shape
          Circle.prototype.constructor = Circle; // Set the constructor back to Circle
          const circle = new Circle(5);
          console.log(circle.getName()); // Logs 'Circle'
          console.log(circle instanceof Shape); // true (Circle inherits from Shape)
          console.log(circle instanceof Circle); // true (circle is an instance of Circle)
        `,
        },
        {
          question: 'How do you access the prototype of an object?',
          answer:
            'You can access the prototype of an object using the Object.getPrototypeOf() method or by accessing the __proto__ property. $The Object.getPrototypeOf() method returns the prototype of a specified object, while the __proto__ property provides a reference to the prototype of an object.',
          code: `
          // Example of accessing the prototype of an object:
          function Person(name) {
            this.name = name;
          }
          Person.prototype.greet = function() {
            console.log('Hello, my name is ' + this.name);
          };
          const john = new Person('John');
          console.log(Object.getPrototypeOf(john)); // Logs Person.prototype
          console.log(john.__proto__); // Logs 
          Person.prototype
          console.log(john instanceof Person); // true (john is an instance of Person)
        `,
        },
        {
          question: 'What is the purpose of the prototype property?',
          answer:
            'The prototype property is used to define properties and methods that should be shared among all instances of a constructor function. $When you add properties or methods to the prototype, they become available to all instances created from that constructor function. $This allows for efficient memory usage and code reuse, as the properties and methods are not duplicated for each instance.',
          code: `
          // Example of using the prototype property:
          function Car(brand) {
            this.brand = brand;
          }
          Car.prototype.drive = function() {
            console.log(this.brand + ' is driving');
          };
          const car1 = new Car('Toyota');
          const car2 = new Car('Honda');
          car1.drive(); // Logs 'Toyota is driving'
          car2.drive(); // Logs 'Honda is driving'
        `,
        },
        {
          question:
            'How do you add properties or methods to an object’s prototype?',
          answer:
            'You can add properties or methods to an object’s prototype by using the prototype property of the constructor function. $You can define new properties or methods directly on the prototype object, and they will be available to all instances created from that constructor function. $This allows you to extend the functionality of objects without modifying each instance individually.',
          code: `
          // Example of adding properties or methods to an object’s prototype:
          function Animal(type) {
            this.type = type;
          }
          Animal.prototype.makeSound = function() {
            console.log(this.type + ' makes a sound');
          };
          const dog = new Animal('Dog');
          const cat = new Animal('Cat');
          dog.makeSound(); // Logs 'Dog makes a sound'
          cat.makeSound(); // Logs 'Cat makes a sound'
        `,
        },
        {
          question: 'What is the difference between prototype and constructor?',
          answer:
            'The prototype is an object that serves as a template for creating other objects, while the constructor is a function used to create instances of objects. $When you create an instance using the new keyword, the constructor function initializes the properties of the instance, and the prototype provides shared methods and properties. $In summary, the constructor is a function that creates instances, while the prototype is an object that defines shared behavior for those instances.',
          code: `
          // Example of prototype vs constructor:
          function Vehicle(type) {
            this.type = type; // Constructor initializes properties
          }
          Vehicle.prototype.drive = function() {
            console.log(this.type + ' is driving'); // Prototype defines shared behavior
          };
          const car = new Vehicle('Car');
          car.drive(); // Logs 'Car is driving'
        `,
        },
      ],
    },
    {
      name: 'Destructuring',
      questions: [
        {
          question: 'What is destructuring in JavaScript?',
          answer:
            'Destructuring in JavaScript is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables. $It provides a concise way to extract multiple values from complex data structures, making your code more readable and maintainable.',
          code: `
          // Example of destructuring an array:
          const numbers = [1, 2, 3];
          const [first, second, third] = numbers; // Unpacking values into variables
          console.log(first, second, third); // Logs 1 2 3
        `,
        },
        {
          question: 'How do you destructure an array in JavaScript?',
          answer:
            'You can destructure an array in JavaScript by using square brackets [] on the left side of an assignment. $You can assign individual elements of the array to variables, and you can also use default values if the array does not have enough elements.',
          code: `
          // Example of destructuring an array:
          const fruits = ['apple', 'banana', 'orange'];
          const [firstFruit, secondFruit, thirdFruit = 'grape'] = fruits; // Unpacking with a default value
          console.log(firstFruit, secondFruit, thirdFruit); // Logs apple banana orange
        `,
        },
        {
          question: 'What is object destructuring in JavaScript?',
          answer:
            'Object destructuring in JavaScript is a syntax that allows you to unpack properties from objects into distinct variables. $It provides a concise way to extract multiple properties from an object, making your code more readable and maintainable.',
          code: `
          // Example of object destructuring:
          const person = { name: 'John', age: 30, city: 'New York' };
          const { name, age, city } = person; // Unpacking properties into variables
          console.log(name, age, city); // Logs John 30 New York
        `,
        },
      ],
    },
    {
      name: 'Currying',
      questions: [
        {
          question: 'What is currying in JavaScript?',
          answer:
            'Currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument. $It allows you to create functions that can be partially applied, which can be useful for creating reusable and composable functions.',
          code: `
          // Example of currying:
          function curriedFunction(a) {
            return function(b) {
              return a + b;
            };
          }
          const add = curryingFunction(5);
          console.log(add(3)); // 8
        `,
        },
        {
          question: 'How do you curry a function in JavaScript?',
          answer:
            'You can curry a function in JavaScript by using the bind() method or by using the rest parameters syntax. $The bind() method creates a new function that is bound to a specific context and can be called with any number of arguments. $The rest parameters syntax allows you to create a function that can take any number of arguments.',
          code: `
          // Example of currying with bind():
          function multiply(a, b) {
            return a * b;
          }
          const multiplyByTwo = multiply.bind(null, 2); // Partial application
          console.log(multiplyByTwo(3)); // 6
          `,
        },
        {
          question: 'What are the benefits of using currying in JavaScript?',
          answer:
            'The benefits of using currying in JavaScript include: $1. Reusability: $Curried functions can be reused with different arguments, making your code more modular and maintainable. $2. Partial application: $Currying allows you to create functions that can be partially applied, enabling you to create specialized functions from general ones. $3. Composability: $Curried functions can be easily composed together, allowing you to build complex functions from simpler ones.',
          code: `
          // Example of benefits of currying:
          function add(a) {
            return function(b) {
              return a + b;
            };
          }
          const addFive = add(5); // Partial application
          console.log(addFive(10)); // 15
        `,
        },
      ],
    },
    {
      name: 'Event Prapogation',
      questions: [
        {
          question: 'What is event propagation in JavaScript?',
          answer:
            'Event propagation in JavaScript refers to the way events are handled in the DOM. $When an event occurs, it can propagate through the DOM tree in two phases: capturing phase and bubbling phase. $In the capturing phase, the event starts from the root and goes down to the target element, while in the bubbling phase, the event starts from the target element and goes up to the root.',
          code: `
          // Example of event propagation:
          document.getElementById('parent').addEventListener('click', () => {
            console.log('Parent clicked');
          }, true); // Capturing phase
          document.getElementById('child').addEventListener('click', () => {
            console.log('Child clicked');
          }); // Bubbling phase
        `,
        },
        {
          question: 'What is event capturing and how does it work?',
          answer:
            'Event capturing is a phase of event propagation where the event starts from the root of the DOM tree and goes down to the target element. $In this phase, you can add event listeners that will be triggered before any listeners on the target element or its ancestors. $To enable capturing, you need to set the third argument of addEventListener() to true.',
          code: `
          // Example of event capturing:
          document.getElementById('parent').addEventListener('click', () => {
            console.log('Parent clicked (capturing)');
          }, true); // Capturing phase
        `,
        },
        {
          question: 'What is event bubbling and how does it work?',
          answer:
            'Event bubbling is a phase of event propagation where the event starts from the target element and goes up to the root of the DOM tree. $In this phase, you can add event listeners that will be triggered after any listeners on the target element or its ancestors. $This is the default behavior of events in JavaScript.',
          code: `
          // Example of event bubbling:
          document.getElementById('child').addEventListener('click', () => {
            console.log('Child clicked (bubbling)');
          }); // Bubbling phase
        `,
        },
        {
          question: 'How do you stop event propagation in JavaScript?',
          answer:
            'You can stop event propagation in JavaScript by using the stopPropagation() method on the event object. $This prevents the event from propagating further in the DOM tree, effectively stopping both capturing and bubbling phases. $You can also use stopImmediatePropagation() to stop the event from propagating and prevent any other listeners on the same element from being called.',
          code: `
          // Example of stopping event propagation:
          document.getElementById('child').addEventListener('click', (event) => {
            console.log('Child clicked');
            event.stopPropagation(); // Stops propagation
          });`,
        },
        {
          question: 'What is the Event Delegation?',
          answer:
            'Event delegation is a technique in JavaScript where a single event listener is attached to a parent element instead of individual child elements. $This allows you to handle events for multiple child elements efficiently, as the event bubbles up from the child to the parent. $It reduces memory usage and improves performance by minimizing the number of event listeners.',
          code: `
          // Example of event delegation:
          <div id="parent">
            <button class="child">Child 1</button>
            <button class="child">Child 2</button>
          </div>
          document.getElementById('parent').addEventListener('click', (event) => {
            if (event.target.classList.contains('child')) {
              console.log('Child button clicked:', event.target.textContent);
            }
          }); // Delegated event listener
        `,
        },
      ],
    },
    {
      name: 'Debounce and Throttle',
      questions: [
        {
          question: 'What is Debounce in JavaScript?',
          answer:
            'Debounce is a technique used to delay the execution of a function until a certain amount of time has passed since the last time it was invoked. $It is commonly used to optimize performance by preventing a function from being called too frequently, such as during user input events like key presses or window resizing.',
          code: `
        // Example of Debounce:
        function debounce(func, delay) {
          let timeout;
          return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
              func.apply(this, args);
            }, delay);
          };
        }
        const handleResize = debounce(() => {
          console.log('Window resized');
        }, 300);
        window.addEventListener('resize', handleResize);
        `,
        },
        {
          question: 'What is Throttle in JavaScript?',
          answer:
            'Throttle is a technique used to limit the number of times a function can be called over a specified period of time. $It ensures that a function is executed at most once in a given time interval, which is useful for optimizing performance in scenarios like scrolling or mouse movement events.',
          code: `
        // Example of Throttle:
        function throttle(func, limit) {
          let lastFunc;
          let lastRan;
          return function(...args) {
            if (!lastRan || Date.now() - lastRan >= limit) {
              func.apply(this, args);
              lastRan = Date.now();
            } else {
              clearTimeout(lastFunc);
              lastFunc = setTimeout(() => {
                func.apply(this, args);
                lastRan = Date.now();
              }, limit - (Date.now() - lastRan));
            }
          };
        }
        const handleScroll = throttle(() => {
          console.log('Scrolled');
        }, 200);
        window.addEventListener('scroll', handleScroll);
        `,
        },
        {
          question: 'What is the difference between Debounce and Throttle?',
          answer:
            'The main difference between Debounce and Throttle is how they handle function execution. $Debounce delays the execution of a function until a specified time has passed since the last invocation, while Throttle limits the execution of a function to at most once in a specified time interval. $Debounce is useful for scenarios where you want to wait for user input to finish, while Throttle is useful for scenarios where you want to ensure a function is called at regular intervals.',
          code: `
        // Example of using both Debounce and Throttle:
        const debouncedFunction = debounce(() => {
          console.log('Debounced Function Executed');
        }, 500);
        
        const throttledFunction = throttle(() => {
          console.log('Throttled Function Executed');
        }, 1000);
        
        window.addEventListener('resize', debouncedFunction);
        window.addEventListener('scroll', throttledFunction);
        `,
        },
        {
          question: 'Give an use case for Debounce and Throttle.',
          answer:
            'Use Case for Debounce: $Debounce is commonly used in search input fields where you want to wait for the user to stop typing before making an API call to fetch search results. This prevents unnecessary API calls and improves performance by only fetching results when the user has finished typing. $Use Case for Throttle: $Throttle is often used in scenarios like infinite scrolling, where you want to load more content as the user scrolls down the page, but you want to limit the number of times the content is loaded to avoid overwhelming the server with requests.',
          code: `
        // Example of Debounce in a search input:
        const searchInput = document.getElementById('search');
        const searchResults = debounce((query) => {
          console.log('Fetching search results for:', query);
          // Simulate API call
        }, 300);
        searchInput.addEventListener('input', (event) => {
          searchResults(event.target.value);
        });
        // Example of Throttle in infinite scrolling:
        const loadMoreContent = throttle(() => {
          console.log('Loading more content');
          // Simulate loading more content
        }, 1000);
        window.addEventListener('scroll', () => {
          if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            loadMoreContent();
          }
        });
        `,
        },
      ],
    },
    {
      name: 'Dom Manipulation',
      questions: [
        {
          question: 'What is the DOM in JavaScript?',
          answer:
            'The DOM (Document Object Model) is a programming interface for web documents. $It transforms the web page into a object model that JavaScript can manipulate. $The DOM represents the structure of a document as a tree of objects, where each object corresponds to an element in the document. $JavaScript can interact with the DOM to dynamically change the content, structure, and style of web pages.',
          code: `
        // Example of accessing and manipulating the DOM:
        const heading = document.getElementById('myHeading');
        heading.textContent = 'Hello, World!'; // Changing the text content of an element
        `,
        },
        {
          question: 'How do you select elements in the DOM using JavaScript?',
          answer:
            'You can select elements in the DOM using various methods provided by the document object, such as getElementById(), getElementsByClassName(), getElementsByTagName(), querySelector(), and querySelectorAll(). $These methods allow you to access specific elements or groups of elements based on their IDs, classes, tags, or CSS selectors.',
          code: `
        // Example of selecting elements in the DOM:
        const myElement = document.getElementById('myElement'); // Selecting an element by ID
        const myClassElements = document.getElementsByClassName('myClass'); // Selecting elements by class name
        const myTagElements = document.getElementsByTagName('div'); // Selecting elements by tag name
        const myQueryElement = document.querySelector('.myQuery'); // Selecting the first element that matches a CSS selector
        `,
        },
        {
          question: 'What are some common DOM manipulation methods?',
          answer:
            'Common DOM manipulation methods include: $1. appendChild() - Adds a new child node to an element, $2. removeChild() - Removes a child node from an element, $3. createElement() - Creates a new HTML element, $4. setAttribute() - Sets an attribute on an element, $5. classList.add() - Adds a class to an element, $6. classList.remove() - Removes a class from an element.',
          code: `
        // Example of common DOM manipulation methods:
        const newElement = document.createElement('div'); // Creating a new div element
        newElement.textContent = 'This is a new element'; // Setting the text content of the new element
        const parentElement = document.getElementById('parentElement');
        parentElement.appendChild(newElement); // Appending the new element to the parent element
        const childElement = document.getElementById('childElement');
        parentElement.removeChild(childElement); // Removing a child element from the parent
        `,
        },
        {
          question:
            'How do you add or remove classes from elements in the DOM?',
          answer:
            'You can add or remove classes from elements in the DOM using the classList property. $The classList property provides methods like add(), remove(), toggle(), and contains() to manipulate classes easily. $This allows you to change the appearance of elements dynamically by adding or removing CSS classes.',
          code: `
        // Example of adding and removing classes from elements:
        const myElement = document.getElementById('myElement');
        myElement.classList.add('active'); // Adding a class
        myElement.classList.remove('inactive'); // Removing a class
        myElement.classList.toggle('highlight'); // Toggling a class on/off
        `,
        },
        {
          question: 'What is event delegation in DOM manipulation?',
          answer:
            'Event delegation is a technique in DOM manipulation where a single event listener is attached to a parent element instead of individual child elements. $This allows you to handle events for multiple child elements efficiently, as the event bubbles up from the child to the parent. $It reduces memory usage and improves performance by minimizing the number of event listeners.',
          code: `
        // Example of event delegation:
        const parentElement = document.getElementById('parentElement');
        parentElement.addEventListener('click', (event) => {
          if (event.target.matches('.child')) {
            console.log('Child element clicked:', event.target);
          }
        });
        `,
        },
        {
          question: 'How do you handle events in the DOM?',
          answer:
            'You can handle events in the DOM by attaching event listeners to elements using methods like addEventListener(). $This allows you to specify a callback function that will be executed when the specified event occurs (e.g., click, mouseover, keypress). $You can also remove event listeners using removeEventListener() when they are no longer needed.',
          code: `
        // Example of handling events in the DOM:
        const button = document.getElementById('myButton');
        button.addEventListener('click', () => {
          console.log('Button clicked!');
        });
        `,
        },
      ],
    },
    {
      name: 'Deep Copy and Shallow Copy',
      questions: [
        {
          question: 'What is a shallow copy in JavaScript?',
          answer:
            'A shallow copy in JavaScript creates a new object that is a copy of the original object, but it only copies the top-level properties. $If the original object contains nested objects or arrays, the shallow copy will reference those nested objects instead of creating new copies. $This means that changes made to nested objects in the shallow copy will also affect the original object.',
          code: `
          // Example of shallow copy:
          const original = { a: 1, b: { c: 2 } };
          const shallowCopy = { ...original }; // Using spread operator for shallow copy
          shallowCopy.b.c = 3; // Modifying nested object in shallow copy
          console.log(original.b.c); // Logs 3, original object is affected
        `,
        },
        {
          question: 'What is a deep copy in JavaScript?',
          answer:
            'A deep copy in JavaScript creates a new object that is a complete copy of the original object, including all nested objects and arrays. $This means that changes made to the deep copy will not affect the original object, as all nested objects are also copied. $Deep copies can be created using libraries like Lodash or by using JSON methods.',
          code: `
          // Example of deep copy:
          const original = { a: 1, b: { c: 2 } };
          const deepCopy = JSON.parse(JSON.stringify(original)); // Using JSON methods for deep copy
          deepCopy.b.c = 3; // Modifying nested object in deep copy
          console.log(original.b.c); // Logs 2, original object is not affected
        `,
        },
        {
          question:
            'How do you create a shallow copy of an object in JavaScript?',
          answer:
            'You can create a shallow copy of an object in JavaScript using the spread operator (...) or the Object.assign() method. $Both methods create a new object that contains the top-level properties of the original object, but they do not create copies of nested objects.',
          code: `
          // Example of creating a shallow copy:
          const original = { a: 1, b: { c: 2 } };
          const shallowCopy1 = { ...original }; // Using spread operator
          const shallowCopy2 = Object.assign({}, original); // Using Object.assign()
        `,
        },
        {
          question: 'How do you create a deep copy of an object in JavaScript?',
          answer:
            'You can create a deep copy of an object in JavaScript using libraries like Lodash (_.cloneDeep()) or by using JSON methods (JSON.parse(JSON.stringify())). $These methods ensure that all nested objects and arrays are also copied, preventing any references to the original object.',
          code: `
          // Example of creating a deep copy:
          const original = { a: 1, b: { c: 2 } };
          const deepCopy1 = JSON.parse(JSON.stringify(original)); // Using JSON methods
          const deepCopy2 = _.cloneDeep(original); // Using Lodash library
        `,
        },
      ],
    },
    {
      name: 'Spread and Rest Operators',
      questions: [
        {
          question: 'What is the spread operator in JavaScript?',
          answer:
            'The spread operator (...) in JavaScript is used to expand an iterable object (like an array or string) into individual elements. $It allows you to spread the elements of an iterable object into individual arguments or elements in a function call.',
          code: `
          // Example of using the spread operator:
          const numbers = [1, 2, 3, 4, 5];
          const [first, second, ...rest] = numbers; // Destructuring
          console.log(first); // 1
          console.log(second); // 2
          console.log(rest); // [3, 4, 5]
        `,
        },
        {
          question: 'What is the rest operator in JavaScript?',
          answer:
            'The rest operator (...) in JavaScript is used to collect multiple elements into an array. $It allows you to gather the remaining elements of an iterable object into a single array, which can be useful for functions that accept a variable number of arguments.',
          code: `
          // Example of using the rest operator:
          function sum(...numbers) {
            return numbers.reduce((acc, num) => acc + num, 0);
          }
          console.log(sum(1, 2, 3, 4, 5)); // 15
        `,
        },
        {
          question: 'How do you use the spread operator with arrays?',
          answer:
            'You can use the spread operator with arrays to create shallow copies, concatenate arrays, or pass array elements as individual arguments to functions. $It provides a concise way to work with arrays without needing to use methods like slice() or concat().',
          code: `
          // Example of using the spread operator with arrays:
          const arr1 = [1, 2, 3];
          const arr2 = [4, 5, 6];
          const combined = [...arr1, ...arr2]; // Concatenating arrays
          console.log(combined); // [1, 2, 3, 4, 5, 6]
        `,
        },
        {
          question:
            'How do you use the rest operator with function parameters?',
          answer:
            'You can use the rest operator with function parameters to accept a variable number of arguments. $It allows you to gather all remaining arguments into an array, which can be useful for functions that need to handle multiple inputs dynamically.',
          code: `
          // Example of using the rest operator with function parameters:
          function logMessages(...messages) {
            messages.forEach((msg) => console.log(msg));
          }
          logMessages('Hello', 'World', 'This', 'is', 'JavaScript');
        `,
        },
        {
          question: 'What is the difference between spread and rest operators?',
          answer:
            'The spread operator is used to expand an iterable object into individual elements, while the rest operator is used to collect multiple elements into an array. $The spread operator is typically used in function calls or array literals, while the rest operator is used in function parameters to gather remaining arguments.',
          code: `
          // Example of the difference between spread and rest operators:
          const arr = [1, 2, 3];
          const newArr = [...arr, 4, 5]; // Spread operator expands arr into individual elements
          console.log(newArr); // [1, 2, 3, 4, 5]
          
          function example(...args) { // Rest operator collects all arguments into an array
            console.log(args);
          }
          example(1, 2, 3); // Logs [1, 2, 3]
        `,
        },
      ],
    },
    {
      name: 'Storage',
      questions: [
        {
          question: 'What is localStorage in JavaScript?',
          answer:
            'localStorage is a web storage API that allows you to store key-value pairs in a web browser. $Data stored in localStorage persists even after the browser is closed, making it suitable for storing user preferences or application state. $It has a larger storage capacity compared to cookies and is accessible only within the same origin.',
          code: `
          // Example of using localStorage:
          localStorage.setItem('username', 'JohnDoe'); // Storing data
          const username = localStorage.getItem('username'); // Retrieving data
          console.log(username); // Logs 'JohnDoe'
        `,
        },
        {
          question: 'How do you set and get items in localStorage?',
          answer:
            'You can set items in localStorage using the setItem() method, which takes a key and a value as arguments. $To retrieve an item, you can use the getItem() method with the key as an argument. $Both methods return strings, so you may need to parse JSON data if you are storing complex objects.',
          code: `
          // Example of setting and getting items in localStorage:
          const user = { name: 'Alice', age: 25 };
          localStorage.setItem('user', JSON.stringify(user)); // Storing an object
          const storedUser = JSON.parse(localStorage.getItem('user')); // Retrieving and parsing the object
          console.log(storedUser.name); // Logs 'Alice'
        `,
        },
        {
          question: 'What is sessionStorage in JavaScript?',
          answer:
            'sessionStorage is similar to localStorage but with a shorter lifespan. $Data stored in sessionStorage is only available for the duration of the page session, meaning it is cleared when the tab or browser window is closed. $It is useful for storing temporary data that does not need to persist across sessions.',
          code: `
          // Example of using sessionStorage:
          sessionStorage.setItem('sessionData', 'Temporary Data'); // Storing data
          const sessionData = sessionStorage.getItem('sessionData'); // Retrieving data
          console.log(sessionData); // Logs 'Temporary Data'
        `,
        },
        {
          question:
            'How do you remove items from localStorage or sessionStorage?',
          answer:
            'You can remove items from localStorage or sessionStorage using the removeItem() method, which takes the key of the item you want to remove as an argument. $You can also clear all items in storage using the clear() method, which removes all key-value pairs from the storage.',
        },
        {
          question:
            'What is the difference between localStorage and sessionStorage?',
          answer:
            'The main difference between localStorage and sessionStorage is their lifespan. $localStorage persists data even after the browser is closed, while sessionStorage only lasts for the duration of the page session. $Additionally, localStorage has a larger storage capacity compared to sessionStorage.',
          code: `
          // Example of removing items from storage:
          localStorage.removeItem('username'); // Removing a specific item
          sessionStorage.clear(); // Clearing all items in sessionStorage
        `,
        },
      ],
    },
    {
      name: 'Functions',
      questions: [
        {
          question: 'What is a function in JavaScript?',
          answer:
            'A function is a reusable block of code that performs a specific task. $Functions can take input parameters (arguments) and return a value. $They can be defined using the function keyword, followed by a name, parentheses for parameters, and a block of code enclosed in curly braces.',
          code: `
          // Example of defining a function:
          function greet(name) {
            console.log('Hello, ' + name + '!');
          }`,
        },
        {
          question: 'How do you define a function in JavaScript?',
          answer:
            'You can define a function in JavaScript using the function keyword, followed by the function name, parentheses for parameters, and a block of code enclosed in curly braces. $You can also define functions using arrow function syntax, which is a more concise way to write functions.',
          code: `
          // Example of defining a function using arrow function syntax:
          const add = (a, b) => {
            return a + b;
          };
        `,
        },
        {
          question:
            'What are the different ways to call a function in JavaScript?',
          answer:
            'You can call a function in JavaScript by using its name followed by parentheses. $If the function takes parameters, you can pass arguments inside the parentheses. $Functions can also be called as methods on objects, or using the call() and apply() methods to specify the context (this) of the function.',
          code: `
          // Example of calling a function:
          greet('Alice'); // Calling a function with an argument
          console.log(add(5, 10)); // Calling an arrow function with arguments
        `,
        },
        {
          question: 'What is the difference types of functions in JavaScript?',
          answer:
            'In JavaScript, there are several types of functions: $1. Regular Functions: Defined using the function keyword, can be named or anonymous. $2. Arrow Functions: A more concise syntax introduced in ES6, do not have their own this context. $3. Higher-Order Functions: Functions that take other functions as arguments or return functions. $4. IIFE (Immediately Invoked Function Expression): A function that is executed immediately after its definition.',
          code: `
          // Example of different types of functions:
          function regularFunction() {
            console.log('This is a regular function');
          }
          const arrowFunction = () => {
            console.log('This is an arrow function');
          };
          const higherOrderFunction = (callback) => {
            callback();
          };
          (function() {
            console.log('This is an IIFE');
          })();
        `,
        },
        {
          question: 'What is a higher-order function in JavaScript?',
          answer:
            'A higher-order function is a function that either takes one or more functions as arguments or returns a function as its result. $Higher-order functions are commonly used for functional programming techniques, such as map, filter, and reduce, which operate on arrays and other collections.',
          code: `
          // Example of a higher-order function:
          const numbers = [1, 2, 3, 4, 5];
          const doubled = numbers.map((num) => num * 2); // Using map as a higher-order function
          console.log(doubled); // Logs [2, 4, 6, 8, 10]
        `,
        },
        {
          question:
            'What is an IIFE (Immediately Invoked Function Expression)?',
          answer:
            'An IIFE (Immediately Invoked Function Expression) is a function that is defined and executed immediately after its creation. $IIFEs are often used to create a private scope for variables, preventing them from polluting the global scope. $They are defined using parentheses around the function declaration followed by another set of parentheses to invoke it.',
          code: `
          // Example of an IIFE:
          (function() {
            console.log('This is an IIFE');
          })(); // Immediately invoked
        `,
        },
        {
          question:
            'What is the difference between normal functions and arrow functions?',
          answer:
            'The main differences between normal functions and arrow functions in JavaScript are: $1. Syntax: Arrow functions have a more concise syntax, using the => operator. $2. this Context: Arrow functions do not have their own this context; they inherit it from the surrounding lexical scope, while normal functions have their own this context. $3. Arguments Object: Arrow functions do not have an arguments object, while normal functions do.',
          code: `
          // Example of normal function vs arrow function:
          function normalFunction(a, b) {
            return a + b;
          }
          const arrowFunction = (a, b) => a + b; // Concise syntax
          console.log(normalFunction(5, 10)); // Logs 15
          console.log(arrowFunction(5, 10)); // Logs 15
        `,
        },
        {
          question:
            'What are the function expressions and function declarations?',
          answer:
            'Function expressions are functions that are defined as part of an expression, such as assigning a function to a variable. $Function declarations are standalone function definitions that can be called before they are defined due to hoisting. $Function expressions are not hoisted, meaning they cannot be called before their definition.',
          code: `
          // Example of function expression and function declaration:
          const functionExpression = function() {
            console.log('This is a function expression');
          };
          function functionDeclaration() {
            console.log('This is a function declaration');
          }
          functionDeclaration(); // Can be called before its definition
          functionExpression(); // Cannot be called before its definition
        `,
        },
        {
          question: 'What is the first-class function in JavaScript?',
          answer:
            'In JavaScript, functions are first-class citizens, meaning they can be treated like any other value. $This means you can assign functions to variables, pass them as arguments to other functions, return them from functions, and store them in data structures like arrays or objects. $This allows for powerful functional programming techniques and higher-order functions.',
          code: `
          // Example of first-class functions:
          const firstClassFunction = (callback) => {
            callback();
          };
          const sayHello = () => {
            console.log('Hello, World!');
          };
          firstClassFunction(sayHello); // Passing a function as an argument
        `,
        },
      ],
    },
    {
      name: 'Call,Apply,Bind',
      questions: [
        {
          question: 'What is the call() method in JavaScript?',
          answer:
            'The call() method is a built-in JavaScript function that allows you to call a function with a specified this context and arguments. $It is used to invoke a function with a specific object as its this value, allowing you to control the context in which the function is executed.',
          code: `
          // Example of using call():
          function greet() {
            console.log('Hello, ' + this.name);
          }
          const person = { name: 'Alice' };
          greet.call(person); // Logs 'Hello, Alice'
        `,
        },
        {
          question: 'What is the apply() method in JavaScript?',
          answer:
            'The apply() method is similar to call(), but it takes an array of arguments instead of individual arguments. $It allows you to invoke a function with a specified this context and an array of arguments, making it useful for functions that accept multiple parameters.',
          code: `
          // Example of using apply():
          function introduce(age, city) {
            console.log('My name is ' + this.name + ', I am ' + age + ' years old and I live in ' + city);
          }
          const person = { name: 'Bob' };
          introduce.apply(person, [30, 'New York']); // Logs 'My name is Bob, I am 30 years old and I live in New York'
        `,
        },
        {
          question: 'What is the bind() method in JavaScript?',
          answer:
            'The bind() method creates a new function that, when called, has its this keyword set to the provided value. $It allows you to create a new function with a specific this context and optional initial arguments, which can be useful for partial application or event handling.',
          code: `
          // Example of using bind():
          function sayHello(greeting) {
            console.log(greeting + ', ' + this.name);
          }
          const person = { name: 'Charlie' };
          const boundFunction = sayHello.bind(person, 'Hi');
          boundFunction(); // Logs 'Hi, Charlie'
        `,
        },
        {
          question:
            'What is the difference between call(), apply(), and bind()?',
          answer:
            'The main differences are: $1. call() invokes the function immediately with specified this context and arguments. $2. apply() invokes the function immediately with specified this context and an array of arguments. $3. bind() creates a new function with a specified this context and optional initial arguments, but does not invoke it immediately.',
          code: `
          // Example of the differences:
          function displayInfo(age, city) {
            console.log('Name: ' + this.name + ', Age: ' + age + ', City: ' + city);
          }
          const person = { name: 'David' };
          displayInfo.call(person, 25, 'Los Angeles'); // Using call()
          displayInfo.apply(person, [25, 'Los Angeles']); // Using apply()
          const boundDisplayInfo = displayInfo.bind(person, 25, 'Los Angeles'); // Using bind()
          boundDisplayInfo(); // Invoking the bound function
        `,
        },
        {
          question: 'When would you use call(), apply(), or bind()?',
          answer:
            'You would use call() when you want to invoke a function immediately with a specific this context and individual arguments. $You would use apply() when you want to invoke a function immediately with a specific this context and an array of arguments. $You would use bind() when you want to create a new function with a specific this context and optional initial arguments, which can be invoked later.',
          code: `
          // Example of when to use call(), apply(), or bind():
          function calculateTotal(price, tax) {
            return this.discount ? (price + tax) * (1 - this.discount) : price + tax;
          }
          const product = { discount: 0.1 }; // 10% discount
          console.log(calculateTotal.call(product, 100, 5)); // Using call() to calculate total with discount
          console.log(calculateTotal.apply(product, [100, 5])); // Using apply() to calculate total with discount
          const boundCalculateTotal = calculateTotal.bind(product, 100, 5); // Using bind() to create a new function with discount
          console.log(boundCalculateTotal()); // Invoking the bound function with discount
        `,
        },
      ],
    },
    {
      name: 'Scope Chain ',
      questions: [
        {
          question: 'What is scope in JavaScript?',
          answer:
            'Scope in JavaScript refers to the visibility and accessibility of variables, functions, and objects in different parts of your code. $It determines where a variable can be accessed and modified. $JavaScript has function scope, block scope (introduced in ES6), and global scope.',
          code: `
          // Example of scope:
          function outerFunction() {
            const outerVariable = 'I am outside!';
            function innerFunction() {
              console.log(outerVariable); // Accessing outerVariable from innerFunction
            }
            innerFunction(); // Logs 'I am outside!'
          }
          outerFunction();
        `,
        },
        {
          question:
            'What is the difference between global scope and local scope?',
          answer:
            'Global scope refers to variables that are accessible throughout the entire script, while local scope refers to variables that are only accessible within a specific function or block. $Variables declared outside any function have global scope, while variables declared inside a function have local scope.',
          code: `
          // Example of global vs local scope:
          const globalVariable = 'I am global!';
          function myFunction() {
            const localVariable = 'I am local!';
            console.log(globalVariable); // Accessing global variable
            console.log(localVariable); // Accessing local variable
          }
          myFunction();
          console.log(globalVariable); // Logs 'I am global!'
          console.log(localVariable); // Throws an error, localVariable is not defined
        `,
        },
        {
          question: 'What is lexical scoping in JavaScript?',
          answer:
            'Lexical scoping means that the scope of a variable is determined by its position in the source code. $In JavaScript, functions are lexically scoped, meaning they can access variables from their own scope as well as from parent scopes.',
          code: `
          // Example of lexical scoping:
          function parentFunction() {
            const parentVariable = 'I am from parent!';
            function childFunction() {
              console.log(parentVariable); // Accessing parentVariable from childFunction
            }
            childFunction(); // Logs 'I am from parent!'
          }
          parentFunction();
        `,
        },
        {
          question: 'What is the scope chain in JavaScript?',
          answer:
            'The scope chain is a series of nested scopes that JavaScript uses to resolve variable references. $When a variable is accessed, JavaScript looks for it in the current scope first, then in the parent scope, and continues up the chain until it finds the variable or reaches the global scope. $This allows inner functions to access variables from their outer functions.',
          code: `
          // Example of scope chain:
          function outerFunction() {
            const outerVariable = 'I am from outer!';
            function innerFunction() {
              console.log(outerVariable); // Accessing outerVariable from innerFunction
            }
            innerFunction(); // Logs 'I am from outer!'
          }
          outerFunction();
        `,
        },
        {
          question: 'How does the scope chain affect variable resolution?',
          answer:
            'The scope chain affects variable resolution by determining the order in which JavaScript looks for variables. $When a variable is referenced, JavaScript first checks the current scope, then moves up the chain to parent scopes until it finds the variable or reaches the global scope. $If the variable is not found in any scope, a ReferenceError is thrown.',
          code: `
          // Example of variable resolution in scope chain:
          function outerFunction() {
            const outerVariable = 'I am from outer!';
            function innerFunction() {
              console.log(outerVariable); // Accessing outerVariable from innerFunction
            }
            innerFunction(); // Logs 'I am from outer!'
          }
          outerFunction();
        `,
        },
        {
          question:
            'What is the difference between function scope and block scope?',
          answer:
            'Function scope refers to variables that are accessible within a function, while block scope refers to variables that are accessible within a specific block of code (enclosed in curly braces). $Block scope was introduced in ES6 with the let and const keywords, allowing for more granular control over variable visibility.',
          code: `
          // Example of function scope vs block scope:
          function myFunction() {
            var functionScopedVariable = 'I am function scoped!';
            if (true) {
              let blockScopedVariable = 'I am block scoped!';
              console.log(blockScopedVariable); // Logs 'I am block scoped!'
            }
            console.log(functionScopedVariable); // Logs 'I am function scoped!'
            // console.log(blockScopedVariable); // Throws an error, blockScopedVariable is not defined
          }
          myFunction();
        `,
        },
      ],
    },
    {
      name: 'Shadowing',
      questions: [
        {
          question: 'What is shadowing in JavaScript?',
          answer:
            'Shadowing in JavaScript occurs when a variable declared in a local scope has the same name as a variable in an outer scope. $In this case, the local variable "shadows" the outer variable, meaning that within the local scope, the local variable is used instead of the outer one. $This can lead to confusion if not managed carefully.',
          code: `
          // Example of shadowing:
          const name = 'Global Name'; // Global variable
          function myFunction() {
            const name = 'Local Name'; // Local variable shadows the global variable
            console.log(name); // Logs 'Local Name'
          }
          myFunction();
          console.log(name); // Logs 'Global Name'
        `,
        },
      ],
    },
    {
      name: 'Array Methods',
      questions: [
        {
          question: 'What are some common array methods in JavaScript?',
          answer:
            'Some common array methods in JavaScript include: $1. push(): Adds one or more elements to the end of an array. $2. pop(): Removes the last element from an array and returns it. $3. shift(): Removes the first element from an array and returns it. $4. unshift(): Adds one or more elements to the beginning of an array. $5. splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements.',
          code: `
        // Example of common array methods:
        const myArray = [1, 2, 3];
        myArray.push(4); // Adds 4 to the end of the array
        console.log(myArray); // Logs [1, 2, 3, 4]
        myArray.pop(); // Removes the last element (4)
        console.log(myArray); // Logs [1, 2, 3]
        myArray.shift(); // Removes the first element (1)
        console.log(myArray); // Logs [2, 3]
        myArray.unshift(0); // Adds 0 to the beginning of the array
        console.log(myArray); // Logs [0, 2, 3]
        myArray.splice(1, 1, 5); // Removes 2 and adds 5 at index 1
        console.log(myArray); // Logs [0, 5, 3]
        `,
        },
        {
          question: 'How do you iterate over an array in JavaScript?',
          answer:
            'You can iterate over an array in JavaScript using various methods, such as for loops, forEach(), map(), filter(), and reduce(). $Each method has its own use case depending on whether you want to modify the array, filter elements, or perform calculations.',
          code: `
        // Example of iterating over an array using forEach:
        const numbers = [1, 2, 3, 4, 5];
        numbers.forEach((num) => {
          console.log(num); // Logs each number in the array
        });
        `,
        },
        {
          question:
            'What is the difference between forEach() and map() methods?',
          answer:
            'The forEach() method executes a provided function once for each array element, but it does not return a new array. $The map() method creates a new array populated with the results of calling a provided function on every element in the original array.',
          code: `
        // Example of forEach vs map:
        const numbers = [1, 2, 3];
        numbers.forEach((num) => console.log(num * 2)); // Logs 2, 4, 6 (no new array)
        const doubled = numbers.map((num) => num * 2); // Creates a new array [2, 4, 6]
        console.log(doubled); // Logs [2, 4, 6]
        `,
        },
        {
          question: 'How do you filter elements in an array?',
          answer:
            'You can filter elements in an array using the filter() method, which creates a new array with all elements that pass the test implemented by the provided function. $This is useful for extracting specific elements based on certain criteria.',
          code: `
        // Example of filtering elements in an array:
        const numbers = [1, 2, 3, 4, 5];
        const evenNumbers = numbers.filter((num) => num % 2 === 0); // Filters even numbers
        console.log(evenNumbers); // Logs [2, 4]
        `,
        },
        {
          question: 'What is the reduce() method in JavaScript?',
          answer:
            'The reduce() method executes a reducer function on each element of the array, resulting in a single output value. $It is often used to perform calculations or accumulate values from an array into a single result.',
          code: `
        // Example of using reduce():
        const numbers = [1, 2, 3, 4];
        const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        console.log(sum); // Logs 10 (1 + 2 + 3 + 4)
        `,
        },
      ],
    },
    {
      name: 'String Methods',
      questions: [
        {
          question: 'What are some common string methods in JavaScript?',
          answer:
            'Some common string methods in JavaScript include: $1. charAt(): Returns the character at a specified index. $2. indexOf(): Returns the index of the first occurrence of a specified substring. $3. slice(): Extracts a section of a string and returns it as a new string. $4. toUpperCase() and toLowerCase(): Converts a string to uppercase or lowercase, respectively.',
          code: `
        // Example of common string methods:
        const myString = 'Hello, World!';
        console.log(myString.charAt(0)); // Logs 'H'
        console.log(myString.indexOf('World')); // Logs 7
        console.log(myString.slice(0, 5)); // Logs 'Hello'
        console.log(myString.toUpperCase()); // Logs 'HELLO, WORLD!'
        console.log(myString.toLowerCase()); // Logs 'hello, world!'
        `,
        },
        {
          question: 'How do you concatenate strings in JavaScript?',
          answer:
            'You can concatenate strings in JavaScript using the + operator or the concat() method. $The + operator is the most common way to combine strings, while concat() can be used to join multiple strings together.',
          code: `
        // Example of concatenating strings:
        const str1 = 'Hello';
        const str2 = 'World';
        const concatenated = str1 + ', ' + str2 + '!'; // Using + operator
        console.log(concatenated); // Logs 'Hello, World!'
        const concatenatedWithConcat = str1.concat(', ', str2, '!'); // Using concat() method
        console.log(concatenatedWithConcat); // Logs 'Hello, World!'
        `,
        },
        {
          question:
            'What is the difference between indexOf() and lastIndexOf() methods?',
          answer:
            'The indexOf() method returns the index of the first occurrence of a specified substring, while lastIndexOf() returns the index of the last occurrence of a specified substring. $Both methods return -1 if the substring is not found.',
          code: `
        // Example of indexOf() vs lastIndexOf():
        const myString = 'Hello, World! Hello!';
        console.log(myString.indexOf('Hello')); // Logs 0 (first occurrence)
        console.log(myString.lastIndexOf('Hello')); // Logs 13 (last occurrence)
        `,
        },
        {
          question: 'How do you check if a string contains a substring?',
          answer:
            'You can check if a string contains a substring using the includes() method, which returns true if the substring is found and false otherwise. $This method is case-sensitive.',
          code: `
        // Example of checking for a substring:
        const myString = 'Hello, World!';
        console.log(myString.includes('World')); // Logs true
        console.log(myString.includes('world')); // Logs false (case-sensitive)
        `,
        },
        {
          question: 'What is template literals in JavaScript?',
          answer:
            'Template literals are a way to create multi-line strings and embed expressions within strings using backticks (`). $They allow for easier string interpolation and can include variables or expressions directly within the string.',
          code: `
        // Example of template literals:
        const name = 'Alice';
        const greeting = \`Hello, \${name}!\`; // Using template literals
        console.log(greeting); // Logs 'Hello, Alice!'
        
        const multiLineString = \`This is a multi-line string.
        It can span multiple lines without using escape characters.\`;
        console.log(multiLineString);
        `,
        },
      ],
    },
    {
      name: 'Conditional Statements',
      questions: [
        {
          question: 'What are conditional statements in JavaScript?',
          answer:
            'Conditional statements in JavaScript allow you to execute different blocks of code based on certain conditions. $The most common conditional statements are if, else if, and else. $They help control the flow of execution in your code based on specific criteria.',
          code: `
        // Example of conditional statements:
        const age = 18;
        if (age < 18) {
          console.log('You are a minor.');
        } else if (age >= 18 && age < 65) {
          console.log('You are an adult.');
        } else {
          console.log('You are a senior citizen.');
        }
        `,
        },
        {
          question: 'How do you use the switch statement in JavaScript?',
          answer:
            'The switch statement evaluates an expression and executes the corresponding case block based on the value of the expression. $It is often used as an alternative to multiple if-else statements when checking for multiple conditions.',
          code: `
        // Example of using switch statement:
        const day = 3;
        switch (day) {
          case 1:
            console.log('Monday');
            break;
          case 2:
            console.log('Tuesday');
            break;
          case 3:
            console.log('Wednesday');
            break;
          default:
            console.log('Invalid day');
        }
        `,
        },
        {
          question: 'What is the ternary operator in JavaScript?',
          answer:
            'The ternary operator is a shorthand way to write an if-else statement. $It takes three operands: a condition, a value if true, and a value if false. $It is often used for simple conditional assignments or expressions.',
          code: `
        // Example of using the ternary operator:
        const isLoggedIn = true;
        const message = isLoggedIn ? 'Welcome back!' : 'Please log in.';
        console.log(message); // Logs 'Welcome back!'
        `,
        },
        {
          question: 'How do you handle multiple conditions in an if statement?',
          answer:
            'You can handle multiple conditions in an if statement using logical operators such as && (AND) and || (OR). $These operators allow you to combine multiple conditions to create more complex logical expressions.',
          code: `
        // Example of handling multiple conditions:
        const score = 85;
        if (score >= 90) {
          console.log('Grade: A');
        } else if (score >= 80 && score < 90) {
          console.log('Grade: B');
        } else if (score >= 70 && score < 80) {
          console.log('Grade: C');
        } else {
          console.log('Grade: D or F');
        }
        `,
        },
        {
          question: 'What is the difference between == and === in JavaScript?',
          answer:
            'The == operator checks for equality of values, performing type coercion if necessary, while the === operator checks for strict equality, meaning both value and type must match. $It is generally recommended to use === to avoid unexpected results due to type coercion.',
          code: `
        // Example of == vs ===:
        const num = '5';
        console.log(num == 5); // Logs true (type coercion)
        console.log(num === 5); // Logs false (strict equality)
        `,
        },
      ],
    },
    {
      name: 'Loops',
      questions: [
        {
          question: 'What are loops in JavaScript?',
          answer:
            'Loops in JavaScript allow you to execute a block of code repeatedly based on a specified condition. $They are useful for iterating over arrays, objects, or performing repetitive tasks. $Common types of loops include for, while, and do-while loops.',
          code: `
        // Example of a for loop:
        for (let i = 0; i < 5; i++) {
          console.log('Iteration: ' + i); // Logs 0 to 4
        }
        `,
        },
        {
          question: 'How do you use a for loop in JavaScript?',
          answer:
            'A for loop consists of three parts: initialization, condition, and increment/decrement. $It allows you to iterate over a range of values or elements in an array. $The syntax is: for (initialization; condition; increment/decrement) { /* code to execute */ }',
          code: `
        // Example of using a for loop:
        const numbers = [1, 2, 3, 4, 5];
        for (let i = 0; i < numbers.length; i++) {
          console.log(numbers[i]); // Logs each number in the array
        }
        `,
        },
        {
          question: 'What is a while loop in JavaScript?',
          answer:
            'A while loop executes a block of code as long as a specified condition is true. $It is useful when the number of iterations is not known beforehand. $The syntax is: while (condition) { /* code to execute */ }',
          code: `
        // Example of using a while loop:
        let count = 0;
        while (count < 5) {
          console.log('Count: ' + count); // Logs Count: 0 to Count: 4
          count++;
        }
        `,
        },
        {
          question: 'What is a do-while loop in JavaScript?',
          answer:
            'A do-while loop is similar to a while loop but guarantees that the block of code will be executed at least once before checking the condition. $The syntax is: do { /* code to execute */ } while (condition);',
          code: `
        // Example of using a do-while loop:
        let num = 0;
        do {
          console.log('Number: ' + num); // Logs Number: 0 to Number: 4
          num++;
        } while (num < 5);
        `,
        },
        {
          question:
            'What is the difference between for, while, and do-while loops?',
          answer:
            'The main differences are: $1. for loop: Best used when the number of iterations is known beforehand. $2. while loop: Executes as long as the condition is true; may not execute at all if the condition is false initially. $3. do-while loop: Executes at least once before checking the condition.',
          code: `
        // Example of using different loops:
        const fruits = ['apple', 'banana', 'cherry'];
        
        // For loop
        for (let i = 0; i < fruits.length; i++) {
          console.log(fruits[i]); // Logs each fruit
        }
        
        // While loop
        let index = 0;
        while (index < fruits.length) {
          console.log(fruits[index]); // Logs each fruit
          index++;
        }
        
        // Do-while loop
        let j = 0;
        do {
          console.log(fruits[j]); // Logs each fruit
          j++;
        } while (j < fruits.length);
        `,
        },
      ],
    },
    {
      name: 'Operators',
      questions: [
        {
          question: 'What are operators in JavaScript?',
          answer:
            'Operators in JavaScript are special symbols that perform operations on variables and values. $They can be categorized into arithmetic, assignment, comparison, logical, and bitwise operators.',
          code: `
        // Example of arithmetic operators:
        const a = 10;
        const b = 5;
        console.log(a + b); // Addition: Logs 15
        console.log(a - b); // Subtraction: Logs 5
        console.log(a * b); // Multiplication: Logs 50
        console.log(a / b); // Division: Logs 2
        console.log(a % b); // Modulus: Logs 0 (remainder)
        `,
        },
        {
          question: 'What is the difference between == and === operators?',
          answer:
            'The == operator checks for equality of values with type coercion, while the === operator checks for strict equality without type coercion. $It is generally recommended to use === to avoid unexpected results due to type coercion.',
          code: `
        // Example of == vs ===:
        const num = '5';
        console.log(num == 5); // Logs true (type coercion)
        console.log(num === 5); // Logs false (strict equality)
        `,
        },
        {
          question: 'What are logical operators in JavaScript?',
          answer:
            'Logical operators in JavaScript are used to combine or invert boolean values. $The main logical operators are && (AND), || (OR), and ! (NOT). $They are often used in conditional statements and expressions.',
          code: `
        // Example of logical operators:
        const isTrue = true;
        const isFalse = false;
        
        console.log(isTrue && isFalse); // AND operator: Logs false
        console.log(isTrue || isFalse); // OR operator: Logs true
        console.log(!isTrue); // NOT operator: Logs false
        `,
        },
        {
          question: 'What are comparison operators in JavaScript?',
          answer:
            'Comparison operators in JavaScript are used to compare two values and return a boolean result. $Common comparison operators include ==, ===, !=, !==, <, >, <=, and >=.',
          code: `
        // Example of comparison operators:
        const x = 10;
        const y = 20;
        console.log(x < y); // Less than: Logs true
        console.log(x > y); // Greater than: Logs false
        console.log(x <= y); // Less than or equal to: Logs true
        console.log(x >= y); // Greater than or equal to: Logs false
        console.log(x == y); // Equal to: Logs false
        console.log(x === y); // Strict equal to: Logs false
        console.log(x != y); // Not equal to: Logs true
        console.log(x !== y); // Strict not equal to: Logs true
        `,
        },
        {
          question: 'What are assignment operators in JavaScript?',
          answer:
            'Assignment operators in JavaScript are used to assign values to variables. $The most common assignment operator is =, but there are also compound assignment operators like +=, -=, *=, /=, and %= that combine assignment with arithmetic operations.',
          code: `
        // Example of assignment operators:
        let a = 10;
        a += 5; // Equivalent to a = a + 5
        console.log(a); // Logs 15
        a -= 3; // Equivalent to a = a - 3
        console.log(a); // Logs 12
        a *= 2; // Equivalent to a = a * 2
        console.log(a); // Logs 24
        a /= 4; // Equivalent to a = a / 4
        console.log(a); // Logs 6
        `,
        },
      ],
    },
    {
      name: 'Data Types',
      questions: [
        {
          question: 'What is a data type in JavaScript?',
          answer:
            'A data type in JavaScript refers to the category of values that a variable can hold. $JavaScript has several built-in data types, including numbers, strings, booleans, objects, arrays, and more.',
          code: `
        // Example of data types:
        const x = 5; // Number
        const y = "Hello"; // String
        const z = true; // Boolean
        const obj = { name: "John" }; // Object
        const arr = [1, 2, 3]; // Array
        console.log(typeof x); // Logs 'number'
        console.log(typeof y); // Logs 'string'
        console.log(typeof z); // Logs 'boolean'
        console.log(typeof obj); // Logs 'object'
        console.log(typeof arr); // Logs 'object' (arrays are also objects in JavaScript)
        `,
        },
        {
          question: 'What are primitive data types in JavaScript?',
          answer:
            'Primitive data types in JavaScript are the most basic data types that are not objects and have immutable values. $The primitive data types include: $1. Number: Represents numeric values (e.g., 42, 3.14). $2. String: Represents sequences of characters (e.g., "Hello"). $3. Boolean: Represents true or false values. $4. Null: Represents the intentional absence of any value. $5. Undefined: Represents a variable that has been declared but not assigned a value. $6. Symbol (introduced in ES6): Represents a unique and immutable value, often used as object property keys.',
          code: `
        // Example of primitive data types:
        const num = 42; // Number
        const str = "Hello"; // String
        const bool = true; // Boolean
        const nothing = null; // Null
        let notAssigned; // Undefined
        const uniqueSymbol = Symbol("description"); // Symbol
        console.log(typeof num); // Logs 'number'
        console.log(typeof str); // Logs 'string'
        console.log(typeof bool); // Logs 'boolean'
        console.log(typeof nothing); // Logs 'object' (null is a special case)
        console.log(typeof notAssigned); // Logs 'undefined'
        console.log(typeof uniqueSymbol); // Logs 'symbol'
        `,
        },
        {
          question:
            'What is the difference between primitive and non-primitive data types?',
          answer:
            'Primitive data types are immutable and have a fixed size in memory. $Non-primitive data types, also known as reference types, are mutable and can hold references to objects. $The main difference is that primitive data types are passed by value, while non-primitive data types are passed by reference.',
          code: `
        // Example of primitive and non-primitive data types:
        let num1 = 42;
        let num2 = num1;
        num1 = 100;
        console.log(num1); // Logs 100
        console.log(num2); // Logs 42 (num2 is unaffected, primitive type is passed by value)
        const obj1 = { name: "Alice" };
        const obj2 = obj1;
        obj1.name = "Bob";
        console.log(obj1.name); // Logs 'Bob'
        console.log(obj2.name); // Logs 'Bob' (obj2 is affected, non-primitive type is passed by reference)
        `,
        },
        {
          question:
            'What is the difference between Null and Undefined in JavaScript?',
          answer:
            'Null is an intentional assignment of no value, while Undefined means a variable has been declared but not assigned a value. $Null is often used to indicate the absence of any object value, while Undefined indicates that a variable exists but has not been initialized.',
          code: `
        // Example of Null vs Undefined:
        let myVar; // Undefined (declared but not assigned)
        console.log(myVar); // Logs 'undefined'
        myVar = null; // Null (explicitly assigned no value)
        console.log(myVar); // Logs 'null'
        `,
        },
        {
          question: 'What is the typeof operator in JavaScript?',
          answer:
            'The typeof operator is used to determine the data type of a variable or value. $It returns a string indicating the type of the operand, such as "number", "string", "boolean", "object", "undefined", or "symbol".',
          code: `
        // Example of using typeof operator:
        const value = 42;
        console.log(typeof value); // Logs 'number'
        const text = "Hello";
        console.log(typeof text); // Logs 'string'
        const isTrue = true;
        console.log(typeof isTrue); // Logs 'boolean'
        const obj = { name: "Alice" };
        console.log(typeof obj); // Logs 'object'
        let notAssigned;
        console.log(typeof notAssigned); // Logs 'undefined'
        const uniqueSymbol = Symbol("description");
        console.log(typeof uniqueSymbol); // Logs 'symbol'
        `,
        },
      ],
    },
  ];
  topic: any;
  showScrollToTop = false;

  filteredTopics() {
    return this.topics.filter((t) =>
      t.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  goToTopic(topic: any) {
    this.topic = topic;
    const element = document.getElementById(topic.name);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  copyCode(code: string) {
    navigator.clipboard.writeText(code);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.showScrollToTop = scrollPosition > 200; // Show button after scrolling 200px
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
