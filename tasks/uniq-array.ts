import { deepEqual } from 'assert';

/**
 * Task
 *
 * Make all array elements unique
 *  - without external libraries
 *  - at least 2 ways
 */
const nonUnuqArray = ['a', 'b', 'a', 'c', 'b', 'b'];

function unique1(value) {
  // **** Your code goes here ****
}

function unique2(value) {
  // **** Your code goes here ****
}

deepEqual(unique1(nonUnuqArray), ['a', 'b', 'c']);
deepEqual(unique2(nonUnuqArray), ['a', 'b', 'c']);

console.log('OK');
