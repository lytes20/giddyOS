import useBear from "../actions/osActions";
import DesktopIcon from "./DesktopIcon";
import Dialog from "./Dialog";
import giddyDiskIcon from "../assets/icons/disk-icon.png"


const SYSTEM_APPS = [
  { name: "giddyDisk", icon: giddyDiskIcon },
  { name: "giddyPod", icon: giddyDiskIcon },
  { name: "Giddy Store", icon: giddyDiskIcon }
]
function Main() {
  const open = useBear((state) => state.open);
  const closeComputerInfo = useBear((state) => state.closeComputerInfo);

  return (
    <main>
      {SYSTEM_APPS.map((systemApp) => {

        return <div className="w-fit mb-2">
          <DesktopIcon key={systemApp.name} systemApp={systemApp} />
        </div>
      })}
      <Dialog open={open} closeDialog={() => closeComputerInfo()} />
    </main>
  );
}

export default Main;
