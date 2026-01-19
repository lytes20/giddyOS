import { useState } from "react";
import WindowControlButton from "./WindowControlButton";
import "../styles/disk-explorer.css";

interface DiskExplorerProps {
  open: boolean;
  closeDialog: () => void;
}

const DIRECTORIES = [
  "Applications",
  "Images",
  "Music",
  "Desktop",
  "Documents"
];

function DiskExplorer(props: DiskExplorerProps) {
  const { open, closeDialog } = props;
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDirectories = DIRECTORIES.filter(dir =>
    dir.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!open) return null;

  return (
    <div className="disk-explorer-window fixed left-4 top-16 w-[600px] h-[600px] bg-white border border-black z-50">
      <div className="flex border-b">
        <div className="flex items-center gap-1 px-1">
          <WindowControlButton char="x" handleClick={closeDialog} />
          <WindowControlButton char="-" handleClick={() => { }} />
          <WindowControlButton char="□" handleClick={() => { }} />
        </div>
        <div className="w-full text-center">giddyDisk</div>
      </div>

      <div className="p-4 h-full flex flex-col">
        {/* Search bar */}
        <div className="mb-4 disk-explorer-search">
          <input
            type="text"
            placeholder="Search giddyDisk"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-2 border border-black rounded-[8px] focus:outline-none"
          />
        </div>

        {/* Directory listing */}
        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 gap-2">
            {filteredDirectories.map((directory) => (
              <div
                key={directory}
                className="directory-item flex items-center p-3 border border-black rounded-[8px] hover:bg-black hover:text-white cursor-pointer"
              >
                <div className="directory-icon w-8 h-8 mr-3 border border-black rounded-[4px]">
                  📁
                </div>
                <span>{directory}</span>
              </div>
            ))}
          </div>

          {filteredDirectories.length === 0 && searchQuery && (
            <div className="text-center py-8 text-gray-500">
              No items match "{searchQuery}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DiskExplorer;