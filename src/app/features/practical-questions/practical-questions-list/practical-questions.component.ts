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
    question: '1. Reverse a String',
    answer: 'Use built-in methods or a loop to reverse the string.',
    code: `// Approach 1: Using built-in methods
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Approach 2: Using a loop
function reverseStringManual(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}`
  },
  {
    question: '2. Check if a String is a Palindrome',
    answer: 'Compare the string to its reverse or use two-pointer technique.',
    code: `// Approach 1: Using reverse
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

// Approach 2: Using two pointers
function isPalindromeManual(str) {
  let i = 0, j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) return false;
    i++;
    j--;
  }
  return true;
}`
  },
  {
    question: '3. Remove Duplicates from a String',
    answer: 'Use Set or loop with tracking.',
    code: `// Approach 1: Using Set
function removeDuplicates(str) {
  return [...new Set(str)].join('');
}

// Approach 2: Using loop
function removeDuplicatesManual(str) {
  let seen = {};
  let result = '';
  for (let char of str) {
    if (!seen[char]) {
      seen[char] = true;
      result += char;
    }
  }
  return result;
}`
  },
  {
    question: '4. Find the First Non-Repeating Character',
    answer: 'Use frequency map.',
    code: `// Approach 1: Using Map
function firstUniqueChar(str) {
  const freq = new Map();
  for (let char of str) freq.set(char, (freq.get(char) || 0) + 1);
  for (let char of str) if (freq.get(char) === 1) return char;
  return null;
}

// Approach 2: Using object
function firstUniqueCharManual(str) {
  const count = {};
  for (let char of str) count[char] = (count[char] || 0) + 1;
  for (let char of str) if (count[char] === 1) return char;
  return null;
}`
  },
  {
    question: '5. Count the Occurrences of Each Character',
    answer: 'Use object or Map.',
    code: `// Approach 1: Using object
function charCount(str) {
  const count = {};
  for (let char of str) count[char] = (count[char] || 0) + 1;
  return count;
}

// Approach 2: Using Map
function charCountMap(str) {
  const map = new Map();
  for (let char of str) map.set(char, (map.get(char) || 0) + 1);
  return map;
}`
  },
  {
    question: '6. Reverse Words in a Sentence',
    answer: 'Split sentence and reverse the array.',
    code: `// Approach 1: Using built-in methods
function reverseWords(str) {
  return str.split(' ').reverse().join(' ');
}

// Approach 2: Manual split and reverse
function reverseWordsManual(str) {
  let words = [];
  let word = '';
  for (let char of str) {
    if (char === ' ') {
      words.push(word);
      word = '';
    } else {
      word += char;
    }
  }
  words.push(word);
  let reversed = '';
  for (let i = words.length - 1; i >= 0; i--) {
    reversed += words[i] + (i !== 0 ? ' ' : '');
  }
  return reversed;
}`
  },
  {
    question: '7. Check if Two Strings are Anagrams',
    answer: 'Sort and compare or use character counts.',
    code: `// Approach 1: Sort and compare
function isAnagram(str1, str2) {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}

// Approach 2: Count characters
function isAnagramManual(str1, str2) {
  if (str1.length !== str2.length) return false;
  const count = {};
  for (let char of str1) count[char] = (count[char] || 0) + 1;
  for (let char of str2) {
    if (!count[char]) return false;
    count[char]--;
  }
  return true;
}`
  },
  {
    question: '8. Find the Longest Substring Without Repeating Characters',
    answer: 'Use sliding window.',
    code: `// Approach 1: Using Map and sliding window
function longestUniqueSubstring(str) {
  let map = new Map(), start = 0, maxLen = 0;
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) start = Math.max(map.get(str[i]) + 1, start);
    map.set(str[i], i);
    maxLen = Math.max(maxLen, i - start + 1);
  }
  return maxLen;
}

// Approach 2: Using Set
function longestUniqueSubstringManual(str) {
  let set = new Set(), maxLen = 0, i = 0, j = 0;
  while (j < str.length) {
    if (!set.has(str[j])) {
      set.add(str[j++]);
      maxLen = Math.max(maxLen, set.size);
    } else {
      set.delete(str[i++]);
    }
  }
  return maxLen;
}`
  },
  {
    question: '9. Convert a String to an Integer (atoi)',
    answer: 'Use parseInt or manual parsing.',
    code: `// Approach 1: Using parseInt
function myAtoi(str) {
  return parseInt(str, 10);
}

// Approach 2: Manual parsing
function myAtoiManual(str) {
  let result = 0, i = 0, sign = 1;
  str = str.trim();
  if (str[i] === '-' || str[i] === '+') sign = str[i++] === '-' ? -1 : 1;
  while (i < str.length && str[i] >= '0' && str[i] <= '9') {
    result = result * 10 + (str[i++] - '0');
  }
  return sign * result;
}`
  },
  {
    question: '10. Compress a String (Run-Length Encoding)',
    answer: 'Iterate and count characters.',
    code: `// Approach 1: Using loop
function compressString(str) {
  let result = '', count = 1;
  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) count++;
    else {
      result += str[i - 1] + count;
      count = 1;
    }
  }
  return result;
}

// Approach 2: While loop
function compressStringManual(str) {
  let result = '';
  let i = 0;
  while (i < str.length) {
    let count = 1;
    while (str[i] === str[i + count]) count++;
    result += str[i] + count;
    i += count;
  }
  return result;
}`
  },
   {
    question: '11. Find the Most Frequent Character',
    answer: 'Use a frequency map to count and find the max.',
    code: `// Approach 1: Using object
function mostFrequentChar(str) {
  const count = {};
  let maxChar = '', maxCount = 0;
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
    if (count[char] > maxCount) {
      maxCount = count[char];
      maxChar = char;
    }
  }
  return maxChar;
}

// Approach 2: Using Map
function mostFrequentCharMap(str) {
  const map = new Map();
  let maxChar = '', maxCount = 0;
  for (let char of str) {
    map.set(char, (map.get(char) || 0) + 1);
    if (map.get(char) > maxCount) {
      maxCount = map.get(char);
      maxChar = char;
    }
  }
  return maxChar;
}`
  },
  {
    question: '12. Find All Substrings of a Given String',
    answer: 'Use nested loops to extract all substrings.',
    code: `// Approach 1: Using nested loops
function getAllSubstrings(str) {
  let substrings = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      substrings.push(str.slice(i, j));
    }
  }
  return substrings;
}

// Approach 2: Using recursion
function getAllSubstringsRecursive(str) {
  const substrings = [];
  function generate(start, end) {
    if (start >= str.length) return;
    if (end > str.length) return generate(start + 1, start + 2);
    substrings.push(str.substring(start, end));
    generate(start, end + 1);
  }
  generate(0, 1);
  return substrings;
}`
  },
  {
    question: '13. Check if a String is a Rotation of Another String',
    answer: 'Concatenate and check substring.',
    code: `// Approach 1: Concatenate and check
function isRotation(str1, str2) {
  return str1.length === str2.length && (str1 + str1).includes(str2);
}

// Approach 2: Manual check by shifting
function isRotationManual(str1, str2) {
  if (str1.length !== str2.length) return false;
  for (let i = 0; i < str1.length; i++) {
    const rotated = str1.slice(i) + str1.slice(0, i);
    if (rotated === str2) return true;
  }
  return false;
}`
  },
  {
    question: '14. Remove All White Spaces from a String',
    answer: 'Use regex or loop to skip spaces.',
    code: `// Approach 1: Using regex
function removeSpaces(str) {
  return str.replace(/\s+/g, '');
}

// Approach 2: Manual
function removeSpacesManual(str) {
  let result = '';
  for (let char of str) {
    if (char !== ' ') result += char;
  }
  return result;
}`
  },
  {
    question: '15. Check if a String is a Valid Shuffle of Two Strings',
    answer: 'Check if the characters and order match using pointers.',
    code: `// Approach 1: Sorting
function isValidShuffle(str1, str2, result) {
  return result.split('').sort().join('') === (str1 + str2).split('').sort().join('');
}

// Approach 2: Two pointer
function isValidShuffleManual(str1, str2, result) {
  let i = 0, j = 0, k = 0;
  if (str1.length + str2.length !== result.length) return false;
  while (k < result.length) {
    if (i < str1.length && result[k] === str1[i]) i++;
    else if (j < str2.length && result[k] === str2[j]) j++;
    else return false;
    k++;
  }
  return i === str1.length && j === str2.length;
}`
  },
  {
    question: '16. Convert a String to Title Case',
    answer: 'Capitalize first letter of each word.',
    code: `// Approach 1: Using map
function toTitleCase(str) {
  return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

// Approach 2: Manual loop
function toTitleCaseManual(str) {
  let result = '';
  let capitalize = true;
  for (let char of str) {
    if (char === ' ') {
      capitalize = true;
      result += char;
    } else if (capitalize) {
      result += char.toUpperCase();
      capitalize = false;
    } else {
      result += char;
    }
  }
  return result;
}`
  },
  {
    question: '17. Find the Longest Common Prefix',
    answer: 'Sort and compare or vertical scan.',
    code: `// Approach 1: Sort and compare first/last
function longestCommonPrefix(arr) {
  if (!arr.length) return '';
  arr.sort();
  let i = 0;
  while (i < arr[0].length && arr[0][i] === arr[arr.length - 1][i]) i++;
  return arr[0].substring(0, i);
}

// Approach 2: Character-by-character
function longestCommonPrefixManual(arr) {
  let prefix = '';
  if (arr.length === 0) return prefix;
  for (let i = 0; i < arr[0].length; i++) {
    let char = arr[0][i];
    for (let j = 1; j < arr.length; j++) {
      if (arr[j][i] !== char) return prefix;
    }
    prefix += char;
  }
  return prefix;
}`
  },
  {
    question: '18. Convert a String to a Character Array',
    answer: 'Use split or manual loop.',
    code: `// Approach 1: Using split
function toCharArray(str) {
  return str.split('');
}

// Approach 2: Manual loop
function toCharArrayManual(str) {
  const arr = [];
  for (let char of str) arr.push(char);
  return arr;
}`
  },
  {
    question: '19. Replace Spaces with %20 (URL Encoding)',
    answer: 'Use replace or loop.',
    code: `// Approach 1: Using replace
function urlEncode(str) {
  return str.replace(/ /g, '%20');
}

// Approach 2: Manual
function urlEncodeManual(str) {
  let result = '';
  for (let char of str) {
    result += char === ' ' ? '%20' : char;
  }
  return result;
}`
  },
  {
    question: '20. Convert a Sentence into an Acronym',
    answer: 'Take first letter of each word.',
    code: `// Approach 1: Using split and map
function toAcronym(str) {
  return str.split(' ').map(word => word[0].toUpperCase()).join('');
}

// Approach 2: Manual
function toAcronymManual(str) {
  let acronym = '';
  let take = true;
  for (let char of str) {
    if (char === ' ') take = true;
    else if (take) {
      acronym += char.toUpperCase();
      take = false;
    }
  }
  return acronym;
}`
  },
  {
    question: '21. Check if a String Contains Only Digits',
    answer: 'Use regex or loop to validate.',
    code: `// Approach 1: Using regex
function isDigitsOnly(str) {
  return /^\d+$/.test(str);
}

// Approach 2: Manual
function isDigitsOnlyManual(str) {
  for (let char of str) {
    if (char < '0' || char > '9') return false;
  }
  return true;
}`
  },
  {
    question: '22. Find the Number of Words in a String',
    answer: 'Split by spaces or count manually.',
    code: `// Approach 1: Using split
function countWords(str) {
  return str.trim().split(/\\s+/).length;
}

// Approach 2: Manual
function countWordsManual(str) {
  let count = 0, inWord = false;
  for (let char of str) {
    if (char !== ' ' && !inWord) {
      inWord = true;
      count++;
    } else if (char === ' ') {
      inWord = false;
    }
  }
  return count;
}`
  },
  {
    question: '23. Remove a Given Character from a String',
    answer: 'Use replace or loop with filter.',
    code: `// Approach 1: Using regex
function removeChar(str, charToRemove) {
  const regex = new RegExp(charToRemove, 'g');
  return str.replace(regex, '');
}

// Approach 2: Manual
function removeCharManual(str, charToRemove) {
  let result = '';
  for (let char of str) {
    if (char !== charToRemove) result += char;
  }
  return result;
}`
  },
  {
    question: '24. Find the Shortest Word in a String',
    answer: 'Split and compare lengths.',
    code: `// Approach 1: Using reduce
function shortestWord(str) {
  return str.split(' ').reduce((shortest, word) =>
    word.length < shortest.length ? word : shortest
  );
}

// Approach 2: Manual loop
function shortestWordManual(str) {
  const words = str.split(' ');
  let min = words[0];
  for (let word of words) {
    if (word.length < min.length) min = word;
  }
  return min;
}`
  },
  {
    question: '25. Find the Longest Palindromic Substring',
    answer: 'Expand around center or use dynamic programming.',
    code: `// Approach 1: Expand around center
function longestPalindrome(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let odd = expand(str, i, i);
    let even = expand(str, i, i + 1);
    result = odd.length > result.length ? odd : result;
    result = even.length > result.length ? even : result;
  }
  return result;

  function expand(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.substring(left + 1, right);
  }
}

// Approach 2: Dynamic Programming (simplified version)
function longestPalindromeDP(str) {
  let maxLength = 1, start = 0;
  const n = str.length;
  const dp = Array.from({ length: n }, () => Array(n).fill(false));

  for (let i = 0; i < n; i++) dp[i][i] = true;

  for (let startIdx = n - 1; startIdx >= 0; startIdx--) {
    for (let endIdx = startIdx + 1; endIdx < n; endIdx++) {
      if (str[startIdx] === str[endIdx]) {
        if (endIdx - startIdx === 1 || dp[startIdx + 1][endIdx - 1]) {
          dp[startIdx][endIdx] = true;
          if (endIdx - startIdx + 1 > maxLength) {
            maxLength = endIdx - startIdx + 1;
            start = startIdx;
          }
        }
      }
    }
  }

  return str.slice(start, start + maxLength);
}`
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
