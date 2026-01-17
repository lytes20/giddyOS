import giddyOSLogo from "../assets/images/giddyOSLogoBlack.png";
import WindowControlButton from "./WindowControlButton";
interface DialogProps {
  open: boolean;
  closeDialog: () => void;
}

function Dialog(props: DialogProps) {
  const { open, closeDialog } = props;
  return (
    <dialog open={open}>
      <div className="flex border-b">
        <div className="flex items-center gap-1 px-1">
          <WindowControlButton char="x" handleClick={closeDialog} />
          <WindowControlButton char="-" handleClick={() => {}} />
          <WindowControlButton char="□" handleClick={() => {}} />
        </div>
        <div className="w-full">About this computer</div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-center gap-4">
          <div>
            <img className="w-[100px]" src={giddyOSLogo} />
            <div className="text-center">giddyOS v0.1.0</div>
          </div>
          <div className="flex items-center">
            <ul>
              <li>Chip Giddy: Chippy</li>
              <li>Built-in Memory: 32MB</li>
            </ul>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default Dialog;
