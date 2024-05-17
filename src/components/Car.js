function Car(props) {
  return (
    <>
      <h1>I live in your your garage. I am {props.color} Car.</h1>
      <p>
        <b>Color</b> - <span>{props.color}</span>
      </p>
      <p>
        <b>Brand</b> - <span>{props.Brand}</span>
      </p>
      <p>
        <b>Model</b> - <span>{props.Model}</span>
      </p>
    </>
  );
}

export default Car;
