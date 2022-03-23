interface Todo {
  title: string;
  description: string;
}

// Partial type can be used on
// the Todo interface to make all
// of its properties optional
const optionalTodo: Partial<Todo> = {};

// Since Partial is a type, it can be
// included to create a new type
// Obviously, this is redundant in practice,
// so, maybe not do this...
type OptionalTodo = {} & Partial<Todo>;

// Required type can be used on the
// OptionalTodo type to make all of
// its properties required
const requiredTodo: Required<OptionalTodo> = {
  title: 'Moana',
  description: 'Pixar movie',
};

// Record can be used to map the properties of a type to another type
// It is an object type whose property keys are 'Keys',
// and whose property values are 'Type'

// CatBreed will be the key
type CatBreed = 'ragdoll' | 'munchkin' | 'himalayan';

// CatInfo will be the value
type CatInfo = {
  weight: number;
  temperament: string;
};

// using Record type (notice the quotes disappear for the keys)
const cats: Record<CatBreed, CatInfo> = {
  ragdoll: { weight: 20, temperament: 'docile' },
  munchkin: { weight: 8, temperament: 'kind' },
  himalayan: { weight: 15, temperament: 'horrible' },
};

// Notice how you can use object notation to access the values
console.log(cats.ragdoll);
console.log(cats.munchkin);
console.log(cats.himalayan);
