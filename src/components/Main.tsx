import useBear from "../actions/osActions";
import Dialog from "./Dialog";

function Main() {
  const open = useBear((state) => state.open);
  const closeComputerInfo = useBear((state) => state.closeComputerInfo);

  return (
    <main>
      <Dialog open={open} closeDialog={() => closeComputerInfo()} />
    </main>
  );
}

export default Main;
