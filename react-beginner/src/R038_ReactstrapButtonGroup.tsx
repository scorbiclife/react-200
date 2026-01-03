import { useState } from "react";
import { Button, ButtonGroup } from "reactstrap";

export default function R038_ReactstrapButtonGroup() {
  const [number, setNumber] = useState(10);

  const decrement = () => setNumber((n: number) => n - 1);
  const increment = () => setNumber((n: number) => n + 1);

  return (
    <div style={{ padding: "0px" }}>
      <ButtonGroup style={{ padding: "0px" }}>
        <Button onClick={decrement}>-</Button>
        <Button onClick={increment}>+</Button>
      </ButtonGroup>
      <br />
      <span>{number}</span>
    </div>
  );
}
