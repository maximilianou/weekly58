import { equal } from 'assert';

/**
 * Task
 *
 * Remove all comments like {{comment}} from the passed string
 * 1. Add a returning value type
 * 2. Complete the function
 */
function trim(value: string) {
  // **** Your code goes here ****
  const replacer = new RegExp(`{{[a-z]*[A-Z]*[0-9]*}}`, 'g');
  console.log(`---------------- ${value.replace(replacer, '')}`);
  return value.replace(replacer, '');
}

equal(trim(''), '');
equal(trim('{{ a comment and }}{not a comment}'), '{not a comment}');
equal(trim('Text with a {{}} {{comment}} text'), 'Text with a   text');
equal(trim('Text {{comment1}} and {{comment2}} text'), 'Text  and  text');
equal(trim('Text {{comment}}'), 'Text ');

console.log('OK');
