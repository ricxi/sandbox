// Types work the same way as interfaces, but
// they cannot extend other types or interfaces
type TypeA = {
  prop1: string;
};

// However, you can include TypeA in TypeB
// by using the '&' operator
type TypeB = {
  prop2: string;
} & TypeA;

// Since typeB includes TypeA, the
// compiler will throw an error if
// the input type does not receive
// all the properties from both typeA
// and typeB (see the function call below)
function funcB(input: TypeB): void {
  console.log(input);
}
funcB({ prop1: 'hey', prop2: 'hi' });
