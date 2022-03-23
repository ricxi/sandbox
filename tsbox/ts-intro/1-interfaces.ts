// An interface represents the shape of something.
// It can be used as the input or the output of
// a function or to explicitly type something
interface InterfaceA {
  prop1: number;
  prop2: number;
}

// aFunc takes InterfaceA as an argument, and
// also returns a value of InterfaceA
function aFunc(input: InterfaceA): InterfaceA {
  return input;
}

// For async functions, specify the return type as a Promise generic
// Note that this function is exactly the same as the one above,
// but written as an async function
async function myAsyncFunc(input: InterfaceA): Promise<InterfaceA> {
  return input;
}

// interfaces can also be used to type an object explicitly
const objectA: InterfaceA = {
  prop1: 2,
  prop2: 3,
};
