import * as stylex from "@stylexjs/stylex";
import { useState } from "react";

const styles = stylex.create({
  stylexTest: (color) => ({
    color,
    fontWeight: "bold",
  }),
});

function App() {
  const [color, setColor] = useState<"red" | "blue">("red");
  return (
    <div {...stylex.props(styles.stylexTest(color))}>
      StyleX Test
      <br />
      <button onClick={() => setColor(color === "red" ? "blue" : "red")}>
        Change Color
      </button>
    </div>
  );
}

export default App;
