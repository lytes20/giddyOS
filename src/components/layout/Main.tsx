import useBear from "../../stores/osActions";
import DesktopIcon from "../ui/DesktopIcon";
import Dialog from "../ui/Dialog";
import DiskExplorer from "../ui/DiskExplorer";
import GiddyStore from "../ui/GiddyStore";
import Chat from "../ui/chat";
import Trash from "../ui/Trash";
import Browser from "../ui/Browser";
import ContextMenu from "../ui/ContextMenu";
import giddyDiskIcon from "../../assets/icons/giddyDisk.png";
import giddyPodIcon from "../../assets/icons/giddyPod.png";
import giddyStoreIcon from "../../assets/icons/giddy-store.png";
import MusicPlayer from "../ui/music/MusicPlayer";
import useMusic from "../../stores/music";

const SYSTEM_APP_NAMES = {
  GIDDY_DISK: "giddyDisk",
  GIDDY_POD: "giddyPod",
  GIDDY_STORE: "giddyStore",
};

const SYSTEM_APPS = [
  { name: SYSTEM_APP_NAMES.GIDDY_DISK, icon: giddyDiskIcon },
  { name: SYSTEM_APP_NAMES.GIDDY_POD, icon: giddyPodIcon },
  { name: SYSTEM_APP_NAMES.GIDDY_STORE, icon: giddyStoreIcon },
];

function Main() {
  const open = useBear((state) => state.open);
  const diskExplorerOpen = useBear((state) => state.diskExplorerOpen);
  const giddyStoreOpen = useBear((state) => state.giddyStoreOpen);
  const chatOpen = useBear((state) => state.chatOpen);
  const trashOpen = useBear((state) => state.trashOpen);
  const browserOpen = useBear((state) => state.browserOpen);
  const contextMenuVisible = useBear((state) => state.contextMenuVisible);
  const contextMenuPosition = useBear((state) => state.contextMenuPosition);
  const selectedApp = useBear((state) => state.selectedApp);
  const closeComputerInfo = useBear((state) => state.closeComputerInfo);
  const closeDiskExplorer = useBear((state) => state.closeDiskExplorer);
  const openDiskExplorer = useBear((state) => state.openDiskExplorer);
  const closeGiddyStore = useBear((state) => state.closeGiddyStore);
  const openGiddyStore = useBear((state) => state.openGiddyStore);
  const closeChat = useBear((state) => state.closeChat);
  const closeTrash = useBear((state) => state.closeTrash);
  const closeBrowser = useBear((state) => state.closeBrowser);
  const hideContextMenu = useBear((state) => state.hideContextMenu);

  const isMusicPlayerOpen = useMusic((state) => state.open);
  const openMusicPlayer = useMusic((state) => state.openMusicPlayer);
  const closeMusicPlayer = useMusic((state) => state.closeMusicPlayer);

  function handleDoubleClick(appName: string) {
    switch (appName) {
      case SYSTEM_APP_NAMES.GIDDY_DISK:
        openDiskExplorer();
        break;
      case SYSTEM_APP_NAMES.GIDDY_POD:
        openMusicPlayer();
        break;
      case SYSTEM_APP_NAMES.GIDDY_STORE:
        openGiddyStore();
        break;

      default:
        break;
    }
  }

  function handleContextMenuOpen() {
    if (selectedApp) {
      handleDoubleClick(selectedApp);
    }
  }

  return (
    <main className="p-4">
      {SYSTEM_APPS.map((systemApp) => {
        return (
          <div className="w-fit mb-2">
            <DesktopIcon
              key={systemApp.name}
              systemApp={systemApp}
              onDoubleClick={() => handleDoubleClick(systemApp.name)}
            />
          </div>
        );
      })}
      <Dialog open={open} closeDialog={() => closeComputerInfo()} />
      <DiskExplorer
        open={diskExplorerOpen}
        closeDialog={() => closeDiskExplorer()}
      />
      <GiddyStore open={giddyStoreOpen} closeDialog={() => closeGiddyStore()} />
      <Chat open={chatOpen} closeDialog={() => closeChat()} />
      <Browser open={browserOpen} closeDialog={() => closeBrowser()} />
      <Trash open={trashOpen} closeDialog={() => closeTrash()} />
      <MusicPlayer
        open={isMusicPlayerOpen}
        closeDialog={() => closeMusicPlayer()}
      />
      <ContextMenu
        isVisible={contextMenuVisible}
        position={contextMenuPosition}
        onClose={hideContextMenu}
        onOpen={handleContextMenuOpen}
      />
    </main>
  );
}

export default Main;
