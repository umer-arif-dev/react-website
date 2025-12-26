function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
  }
  
  function Props() {
    return <Welcome name="Omer" />;
  }
  export default Props