import { useState, ChangeEvent, FC } from "react";

const App: FC = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <div>
      <h1>Progress bar</h1>
      <progress value={value} max={100}></progress>
      <input
        style={{ display: "block" }}
        onChange={handleChange}
        type="number"
        required
      />
    </div>
  );
};

export default App;
