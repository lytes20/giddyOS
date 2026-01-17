import "../styles/footer.css";

const FOOTER_APPS = [
    { name: "Finder", icon: "" },
    { name: "Chat", icon: "" },
    { name: "Giddy Browser", icon: "" },
    { name: "Giddy Mic", icon: "" }
]
function Footer() {
    return <footer className="p-4 gap-2">
        {FOOTER_APPS.map((footerApp) => {
            return <div>{footerApp.name}</div>
        })}
    </footer>
}
export default Footer;