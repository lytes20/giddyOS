import "../../styles/footer.css";
import finderIcon from "../../assets/icons/finder.png";
import chatIcon from "../../assets/icons/chat.png";
import browserIcon from "../../assets/icons/browser.png";
import trashIcon from "../../assets/icons/trash.png"

const FOOTER_APPS = [
  { name: "Finder", icon: finderIcon },
  { name: "Chat", icon: chatIcon },
  { name: "Giddy Browser", icon: browserIcon },
  { name: "Trash", icon: trashIcon },
];
function Footer() {
  return (
    <footer className="p-4 gap-2">
      {FOOTER_APPS.map((footerApp) => {
        return <div key={footerApp.name} className="dock-icon">
          <img
            src={footerApp.icon}
            alt={footerApp.name}
            title={footerApp.name}
            className="dock-icon-image"
          />
        </div>;
      })}
    </footer>
  );
}
export default Footer;
