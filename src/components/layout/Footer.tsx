import "../../styles/footer.css";
import finderIcon from "../../assets/icons/finder.png";
import chatIcon from "../../assets/icons/chat.png";
import browserIcon from "../../assets/icons/browser.png";
import trashIcon from "../../assets/icons/trash.png";
import useBear from "../../stores/osActions";

const FOOTER_APP_NAMES = {
  FINDER: "Finder",
  CHAT: "Chat",
  GIDDY_BROWSER: "Giddy Browser",
  TRASH: "Trash",
};
const FOOTER_APPS = [
  { name: FOOTER_APP_NAMES.FINDER, icon: finderIcon },
  { name: FOOTER_APP_NAMES.CHAT, icon: chatIcon },
  { name: FOOTER_APP_NAMES.GIDDY_BROWSER, icon: browserIcon },
  { name: FOOTER_APP_NAMES.TRASH, icon: trashIcon },
];

function Footer() {
  const openDiskExplorer = useBear((state) => state.openDiskExplorer);
  const openChat = useBear((state) => state.openChat);

  function handleDockIconClick(appName: string) {
    switch (appName) {
      case FOOTER_APP_NAMES.FINDER:
        openDiskExplorer();
        break;
      case FOOTER_APP_NAMES.CHAT:
        openChat();
        break;
      default:
        break;
    }
  }
  return (
    <footer className="p-4 gap-2">
      {FOOTER_APPS.map((footerApp) => {
        return (
          <div
            key={footerApp.name}
            className="dock-icon"
            onClick={() => handleDockIconClick(footerApp.name)}
          >
            <img
              src={footerApp.icon}
              alt={footerApp.name}
              title={footerApp.name}
              className="dock-icon-image"
            />
          </div>
        );
      })}
    </footer>
  );
}
export default Footer;
