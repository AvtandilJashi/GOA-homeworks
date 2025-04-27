// --- გლობალური Strict Mode ---
'use strict';

// ცვლადის მაგალითი (გლობალური strict mode-ში)
try {
  x = 5; // ReferenceError
} catch (error) {
  console.error(error);
}
// კომენტარი: strict mode-ს გარეშე JS ავტომატურად შექმნიდა გლობალურ ცვლადს x-ს. Strict mode-ში ასეთი ქმედება შეცდომას იწვევს, საჭიროა ცალსახა აღწერა (let/const/var).

// ფუნქციის მაგალითი (გლობალური strict mode-ში)
function multiply(a, a) {
  return a * a;
}
// SyntaxError: Strict mode არ უშვებს ფუნქციის პარამეტრების დუბლირებას (ორივე a), რადგან ეს შეიძლება დაბნეულობა გამოიწვიოს.

// -----------------------------------------

// --- ლოკალური Strict Mode ---
function localStrictExample() {
  'use strict';
  
  // ცვლადის მაგალითი (ლოკალური strict mode-ში)
  try {
    y = 10; // ReferenceError
  } catch (error) {
    console.error(error);
  }
  // კომენტარი: strict mode ფუნქციის შიგნითაც აიძულებს ცვლადების სწორი აღწერას.

  // ფუნქციის მაგალითი (ლოკალური strict mode-ში)
  try {
    function sum(b, b) {
      return b + b;
    }
  } catch (error) {
    console.error(error);
  }
  // კომენტარი: ფუნქციის პარამეტრების დუბლირება ისევ იწვევს SyntaxError-ს, თუმცა ამჯერად მხოლოდ ამ ფუნქციის შიგნითაა აქტიური strict mode.
}

localStrictExample();
