// interfaces should be capitalized
interface InputProps {
  name: string;
}

// myFun can only receive an object
// with a 'name' property of type string
function myFun(props: InputProps) {
  return props;
}

myFun({ name: 'Ric' });
