import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-practical-questions',
  templateUrl: './practical-questions.component.html',
  styleUrls: ['./practical-questions.component.scss']
})
export class PracticalQuestionsComponent {
  searchTerm: string = '';
  showScrollToTop = false;
  practicalQuestions = [
  {
    question: 'How to reverse a string in JavaScript?',
    answer: `Use string methods like split, reverse, and join to reverse the string.`,
    code: `function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // "olleh"`
  },
  {
    question: 'How to check if a string is a palindrome?',
    answer: `Convert the string to lowercase, remove non-alphanumeric characters, then compare it to its reversed version.`,
    code: `function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return str === str.split('').reverse().join('');
}
console.log(isPalindrome("Racecar")); // true`
  },
  {
    question: 'How to find the maximum occurring character in a string?',
    answer: `Use a frequency map to count character occurrences and track the character with the maximum count.`,
    code: `function maxChar(str) {
  const map = {};
  let max = 0, char = '';
  for (let c of str) {
    map[c] = (map[c] || 0) + 1;
    if (map[c] > max) {
      max = map[c];
      char = c;
    }
  }
  return char;
}
console.log(maxChar("javascript")); // "a"`
  },
  {
    question: 'How to remove duplicates from an array?',
    answer: `Use a Set to store only unique values and convert it back to an array.`,
    code: `function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]`
  },
  {
    question: 'How to flatten a nested array in JavaScript?',
    answer: `Use the flat method with Infinity to flatten deeply nested arrays.`,
    code: `function flatten(arr) {
  return arr.flat(Infinity);
}
console.log(flatten([1, [2, [3, 4]], 5])); // [1, 2, 3, 4, 5]`
  },
  {
    question: 'How to implement a debounce function?',
    answer: `Use a timer to delay function execution until a certain amount of time has passed since the last call.`,
    code: `function debounce(func, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}`
  },
  {
    question: 'How to implement a throttle function?',
    answer: `Allow a function to be called at most once in a specified time interval.`,
    code: `function throttle(func, delay) {
  let lastCall = 0;
  return function(...args) {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}`
  },
  {
    question: 'How to deep clone an object?',
    answer: `Use JSON.stringify and JSON.parse to create a deep clone.`,
    code: `function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}`
  },
  {
    question: 'How to check if two arrays are equal?',
    answer: `Sort and convert both arrays to strings and compare them.`,
    code: `function arraysEqual(a, b) {
  return JSON.stringify(a.sort()) === JSON.stringify(b.sort());
}`
  },
  {
    question: 'How to find a missing number in an array of 1 to N?',
    answer: `Use the formula for the sum of first N natural numbers and subtract the array's sum.`,
    code: `function findMissing(arr) {
  const n = arr.length + 1;
  const sum = (n * (n + 1)) / 2;
  return sum - arr.reduce((a, b) => a + b, 0);
}`
  },
  {
    question: 'How to implement a custom bind function?',
    answer: `Store the function and context, then return a new function using apply.`,
    code: `Function.prototype.myBind = function(context, ...args) {
  const fn = this;
  return function(...rest) {
    return fn.apply(context, [...args, ...rest]);
  };
};`
  },
  {
    question: 'How to implement currying in JavaScript?',
    answer: `Return a function that collects arguments until all are received.`,
    code: `function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...next) => curried(...args, ...next);
    }
  };
}`
  },
  {
    question: 'How to shuffle an array randomly?',
    answer: `Use the Fisher-Yates algorithm to randomly swap elements.`,
    code: `function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}`
  },
  {
    question: 'How does memoization improve performance?',
    answer: `Cache results of expensive function calls and reuse them when the same inputs occur.`,
    code: `function memoize(fn) {
  const cache = {};
  return function(n) {
    if (cache[n]) return cache[n];
    const result = fn(n);
    cache[n] = result;
    return result;
  };
}

const fib = memoize(function(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
});`
  },
  {
    question: 'How to implement Array.prototype.map?',
    answer: `Create a new array by applying the callback to each element.`,
    code: `Array.prototype.myMap = function(callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};`
  },
  {
    question: 'How to check if two strings are anagrams?',
    answer: `Sort both strings and compare them.`,
    code: `function isAnagram(a, b) {
  const normalize = str => str.toLowerCase().split('').sort().join('');
  return normalize(a) === normalize(b);
}`
  },
  {
    question: 'How to convert a nested object to a flat object?',
    answer: `Recursively traverse the object and build flattened keys.`,
    code: `function flattenObject(obj, prefix = '', res = {}) {
  for (let key in obj) {
    const val = obj[key];
    const newKey = prefix ? \`\${prefix}.\${key}\` : key;
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      flattenObject(val, newKey, res);
    } else {
      res[newKey] = val;
    }
  }
  return res;
}`
  },
  {
    question: 'How to implement event delegation in JavaScript?',
    answer: `Add a listener on the parent element and check the target element type.`,
    code: `document.getElementById('parent').addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    console.log('Button clicked:', e.target.textContent);
  }
});`
  },
  {
    question: 'How to check if an object is empty?',
    answer: `Check if Object.keys(obj).length is 0.`,
    code: `function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}`
  },
  {
    question: 'How to implement a simple Fibonacci generator?',
    answer: `Use iteration or recursion to generate Fibonacci numbers.`,
    code: `function fibonacci(n) {
  const seq = [0, 1];
  for (let i = 2; i <= n; i++) {
    seq[i] = seq[i - 1] + seq[i - 2];
  }
  return seq[n];
}
console.log(fibonacci(6)); // 8`
  }
];

  expandedIndexes: Set<number> = new Set();

  filteredQuestions() {
    return this.practicalQuestions.filter(q =>
      q.question.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  toggleAnswer(index: number) {
    if (this.expandedIndexes.has(index)) {
      this.expandedIndexes.delete(index);
    } else {
      this.expandedIndexes.add(index);
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
    this.showScrollToTop = scrollPosition > 200;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
