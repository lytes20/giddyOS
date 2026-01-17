import useBear from "../actions/osActions";
import Dialog from "./Dialog";

const SYSTEM_APPS = [
  { name: "giddyDisk", icon: "" },
  { name: "giddyPod", icon: "" },
  { name: "Giddy Store", icon: "" }
]
function Main() {
  const open = useBear((state) => state.open);
  const closeComputerInfo = useBear((state) => state.closeComputerInfo);

  return (
    <main>
      {SYSTEM_APPS.map((systemApp) => {
        return <div>{systemApp.name}</div>
      })}
      <Dialog open={open} closeDialog={() => closeComputerInfo()} />
    </main>
  );
}

export default Main;
