import "./App.css";

const data = [
  { name: "Brandon", age: 50 },
  { name: "Kent", age: 30 },
];

function App() {
  // const people = data.map((person) => {
  //   return <ComponentWithObjectProp data={person} />;
  // });

  return (
    <>
      <h1>React App</h1>
      <Header title="Page 1 Title" />
      <Header title="Page 2 Title" />
      <Header title="Forum" />
      <ComponentWithFunction
        printHello={() => {
          console.log("Hello");
        }}
      />
      <ComponentWithArrayProp data={data} />
      {/* {people} */}
    </>
  );
}

const Header = (props) => {
  return <h1>{props.title}</h1>;
};

const ComponentWithFunction = (props) => {
  const printHello = props.printHello;
  printHello();
  return <h1>This has a function</h1>;
};

const ComponentWithObjectProp = (props) => {
  return (
    <>
      <p>Name: {props.data.name}</p>
      <p>Age: {props.data.age}</p>
    </>
  );
};

const ComponentWithArrayProp = (props) => {
  const people = props.data.map((person) => {
    return <ComponentWithObjectProp data={person} />;
  });
  return <>{people}</>;
};

export default App;

const props = {};

props.name = "Brandon";
{
  /* <Component name="Brandon" /> */
}
