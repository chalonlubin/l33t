"use strict";


// Given a string s, find the length of the longest
// substring
//  without repeating characters.

/** 1st attempt 0(n) */
const lengthOfLongestSubstring = function (s) {
  let sArr = s.split("");
  let res = [];
  let cur = 0;
  let longest = 0;

  // while current is less than str.length
  while (cur < sArr.length) {
    // if we encounter the same value twice
    if (res.includes(sArr[cur])) {
      longest = Math.max(longest, res.length);
      // record length
      // remove until no more dupes
      res.shift();
    } else {
      // push the val
      res.push(sArr[cur]);
      cur += 1;
    }
  }
  return Math.max(longest, res.length);
};

console.log(lengthOfLongestSubstring("abcdbcbb"));
