const banana = () => {
  return "banana";
};

const mango = () => "mango"; // single line return shorthand

const pineapple = () => (
  //multi line return shorthand
  <div>
    <h1>Hello World</h1>
  </div>
);

const papaya = (papaya) => papaya;

const kiwi = (kiwi) => kiwi; // single parameter does not need parantheses
const fruits = (banana, apple) => {
  return { banana, apple };
};
