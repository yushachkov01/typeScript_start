// First 

function helloWorld (hello: string, world: string): string {
    console.log(hello.concat(world));
    const myConcat = hello.concat(world);
    return myConcat;
}
helloWorld('Hello ', 'World!');

//Second 
interface User{
  howIDoIt: string,
  simeArray: (string | number)[],
  withData?: User[]
}

const myHometask: User = {
  howIDoIt: "I Do It Wel",
  simeArray: ["string one", "string two", 42],
  withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
  }
  console.log(myHometask);
  

// Third  

interface MyArray<T> {
  [N: number]: T;
  reduce<U>(fn: (accumulator: U, currentValue: T, index: number, array: T[]) => U, initialValue: U): U;
  }
  const initialArray: MyArray<number> = [1, 2, 3];
  const reducedArray = initialArray.reduce((a, b) => a + b, 0);

  console.log(initialArray);
  console.log(reducedArray);