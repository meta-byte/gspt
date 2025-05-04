import { render, Text } from "ink";
import SelectInput from "ink-select-input";
import Container from "./components/container.tsx";

const Demo = () => {
  const handleSelect = () => {};

  const items = [
    {
      label: "First",
      value: "first",
    },
    {
      label: "Second",
      value: "second",
    },
    {
      label: "Third",
      value: "third",
    },
  ];

  return <SelectInput items={items} onSelect={handleSelect} />;
};

const App = () => (
  <Container>
    <Demo />
  </Container>
);

render(<App />);
