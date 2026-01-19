import useBear from "../actions/osActions";
import DesktopIcon from "./DesktopIcon";
import Dialog from "./Dialog";
import giddyDiskIcon from "../assets/icons/giddyDisk.png";
import giddyPodIcon from "../assets/icons/giddyPod.png";
import giddyStoreIcon from "../assets/icons/giddy-store.png";

const SYSTEM_APPS = [
  { name: "giddyDisk", icon: giddyDiskIcon },
  { name: "giddyPod", icon: giddyPodIcon },
  { name: "Giddy Store", icon: giddyStoreIcon },
];
function Main() {
  const open = useBear((state) => state.open);
  const closeComputerInfo = useBear((state) => state.closeComputerInfo);

  return (
    <main className="p-4">
      {SYSTEM_APPS.map((systemApp) => {
        return (
          <div className="w-fit mb-2">
            <DesktopIcon key={systemApp.name} systemApp={systemApp} />
          </div>
        );
      })}
      <Dialog open={open} closeDialog={() => closeComputerInfo()} />
    </main>
  );
}

export default Main;
