import { useState } from "react";
import WindowControlButton from "./WindowControlButton";
import "../../styles/disk-explorer.css";

interface MusicPlayerProps {
  open: boolean;
  closeDialog: () => void;
}

function MusicPlayer(props: MusicPlayerProps) {
  const { open, closeDialog } = props;

  if (!open) return null;

  return (
    <div className="disk-explorer-window fixed left-4 top-16 w-[600px] h-[600px] bg-white border border-black z-50">
      <div className="flex border-b">
        <div className="flex items-center gap-1 px-1">
          <WindowControlButton char="x" handleClick={closeDialog} />
          <WindowControlButton char="-" handleClick={() => {}} />
          <WindowControlButton char="□" handleClick={() => {}} />
        </div>
        <div className="w-full text-center">giddyPod</div>
      </div>
    </div>
  );
}

export default MusicPlayer;
