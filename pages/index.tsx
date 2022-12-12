import { Pane } from "../Pane";

export default function Home() {
  return (
    <>
      <button onClick={() => alert("clicked outer button")}>click me!</button>
      <Pane>
        <button onClick={() => alert("clicked button in pane!")}>
          click me!
        </button>
      </Pane>
    </>
  );
}
