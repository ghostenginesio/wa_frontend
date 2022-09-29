import { useState } from "react";
import { Portal } from "@mantine/core";

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <main style={{ position: "relative", zIndex: 1 }}>
      {opened && (
        <Portal>
          <div>Your modal content</div>
        </Portal>
      )}

      <button onClick={() => setOpened(true)} type="button">
        Open modal
      </button>
    </main>
  );
}
