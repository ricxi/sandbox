// Generics allow us to create functions and
// classes that can be used with different types

// PROBLEM:
// How can you type input, so that it can change?
function regularFunc(input) {
  return input;
}

// PROBLEM:
// How can I type a function so that it
// can accept both an array or an object?
// ANSWER: generics
const obj = regularFunc({ greeting: 'hi' });
const arr = regularFunc(['hello']);

// generic functions are more reusable
// note that genericFunc accomplishes the
// same thing as regularFunc but with types
function genericFunc<T>(input: T): T {
  return input;
}

// implictly call a generic function
const obj2 = genericFunc({ greeting: 'hi' });
const arr2 = genericFunc(['hello']);

// explicitly call a generic function
const obj3 = genericFunc<{ greeting: string }>({ greeting: 'hi' });
const arr3 = genericFunc<string[]>(['hello']);
