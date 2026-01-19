import useBear from "../actions/osActions";
import DesktopIcon from "./DesktopIcon";
import Dialog from "./Dialog";
import DiskExplorer from "./DiskExplorer";
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
  const diskExplorerOpen = useBear((state) => state.diskExplorerOpen);
  const closeComputerInfo = useBear((state) => state.closeComputerInfo);
  const closeDiskExplorer = useBear((state) => state.closeDiskExplorer);
  const openDiskExplorer = useBear((state) => state.openDiskExplorer);

  return (
    <main className="p-4">
      {SYSTEM_APPS.map((systemApp) => {
        return (
          <div className="w-fit mb-2">
            <DesktopIcon
              key={systemApp.name}
              systemApp={systemApp}
              onDoubleClick={systemApp.name === "giddyDisk" ? openDiskExplorer : undefined}
            />
          </div>
        );
      })}
      <Dialog open={open} closeDialog={() => closeComputerInfo()} />
      <DiskExplorer open={diskExplorerOpen} closeDialog={() => closeDiskExplorer()} />
    </main>
  );
}

export default Main;
