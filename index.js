/**
 * пример:

> abc

[ 'abc', 'a.bc', 'ab.c', 'a.b.c']

> abcd

[ 'abcd', 'a.bcd', 'ab.cd', 'a.b.cd' … ]
 */

const findAllSolution = (input) => {
  const result = [];

  const fn = (str, start, comb) => {
    if (start === str.length - 1) {
      result.push(comb + str[start]);
      return;
    }

    fn(str, start + 1, comb + str[start]);

    fn(str, start + 1, comb + str[start] + ".");
  };

  fn(input, 0, "");

  return result;
};

console.log(findAllSolution("abc"));

// const findAllVariant = (input) => {
//   const result = [];

//   const fn = (str, start, comb) => {
//     if (start === str.length - 1) {
//       result.push(comb + str[start]);
//       return;
//     }

//     fn(str, start + 1, comb + str[start]);

//     fn(str, start + 1, comb + str[start] + "+");
//   };

//   fn(input, 0, "");

//   return result;
// };

// console.log(findAllVariant("123"));
