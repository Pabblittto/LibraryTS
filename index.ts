export let sayHello = function () {
  console.log("hello");
};

export let addNumbers = function (a: number, b: number) {
  return a + b;
};

export interface ConstantInterface {
  property: number;
}

type NotExportedType = {
  x: string;
};

export let something: NotExportedType = { x: "" };

export let constant: ConstantInterface = {
  property: 12,
};
