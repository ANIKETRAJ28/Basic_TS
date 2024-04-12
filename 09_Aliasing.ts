// aliasing or giving a nickname to the object variables

type Data = {name: String, marks: number, address?: String};

const result: Data = {
  name: "Sanket",
  marks: 98
}
console.log(result);
result.marks = 99;
result.address = "xyz"
console.log(result);
