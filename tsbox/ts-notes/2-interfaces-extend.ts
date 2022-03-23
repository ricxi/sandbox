// interfaces can extend one or more interfaces

interface IA {
  prop1: string;
  prop2: string;
}

// interface IB inherits all the properties of IA
// Any function that uses this interface must include all
// the properties from both IA and IB
interface IB extends IA {
  prop3: string;
}

// Interfaces can extend multiple interfaces
interface A {
  prop1: number;
}

interface B {
  prop2: number;
}

// interface AnB extends both
// interface A and interface B
interface AnB extends A, B {}

// Even though the interface AnB has no properties,
// you still have to give it a prop1 and prop2
// because it extends interface A and interface B
// or the compiler will throw an error
const useAnB: AnB = {
  prop1: 1,
  prop2: 2,
};
