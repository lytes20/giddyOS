import { useState } from "react";
import WindowControlButton from "./WindowControlButton";
import "../../styles/disk-explorer.css";

interface TrashProps {
  open: boolean;
  closeDialog: () => void;
}

// Mock deleted items - in a real implementation, this would come from a store
const DELETED_ITEMS = [
  { name: "Old Document.pdf", type: "file", deletedDate: "2024-01-20" },
  { name: "Unused App", type: "folder", deletedDate: "2024-01-19" },
  { name: "Temp Image.jpg", type: "file", deletedDate: "2024-01-18" },
];

function Trash(props: TrashProps) {
  const { open, closeDialog } = props;
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = DELETED_ITEMS.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!open) return null;

  return (
    <div className="disk-explorer-window fixed left-4 top-16 w-[600px] h-[600px] bg-white border border-black rounded-lg z-50">
      <div className="flex border-b">
        <div className="flex items-center gap-1 px-1">
          <WindowControlButton char="x" handleClick={closeDialog} />
          <WindowControlButton char="-" handleClick={() => {}} />
          <WindowControlButton char="□" handleClick={() => {}} />
        </div>
        <div className="w-full text-center">Trash</div>
      </div>

      <div className="p-4 h-full flex flex-col">
        {/* Search bar */}
        <div className="mb-4 disk-explorer-search">
          <input
            type="text"
            placeholder="Search Trash"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-2 border border-black rounded-[8px] focus:outline-none"
          />
        </div>

        {/* Trash items listing */}
        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-1 gap-2">
            {filteredItems.map((item) => (
              <div
                key={item.name}
                className="directory-item flex items-center p-3 border border-black rounded-[8px] hover:bg-black hover:text-white cursor-pointer"
              >
                <div className="directory-icon w-8 h-8 mr-3 border border-black rounded-[4px]">
                  {item.type === "file" ? "📄" : "📁"}
                </div>
                <div className="flex-1">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-xs text-gray-500">
                    Deleted: {item.deletedDate}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && searchQuery && (
            <div className="text-center py-8 text-gray-500">
              No items match "{searchQuery}"
            </div>
          )}

          {filteredItems.length === 0 && !searchQuery && (
            <div className="text-center py-8 text-gray-500">Trash is empty</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Trash;
