import { reverse } from './helpers.js';

const str = "hello";
const reversed = reverse(str);
const result = reversed.charAt(0).toUpperCase() + reversed.slice(1);

console.log(result); 
