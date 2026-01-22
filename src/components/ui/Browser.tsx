import { useState } from "react";
import WindowControlButton from "./WindowControlButton";
import "../../styles/browser.css";

interface BrowserProps {
  open: boolean;
  closeDialog: () => void;
}

function Browser(props: BrowserProps) {
  const { open, closeDialog } = props;
  const [url, setUrl] = useState("https://www.giddyos.com");
  const [searchQuery, setSearchQuery] = useState("");

  if (!open) return null;

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just update the URL state
    // In a real browser, this would navigate to the URL
    setUrl(searchQuery || url);
    setSearchQuery("");
  };

  return (
    <div className="browser-window fixed left-4 top-16 w-[800px] border border-black rounded-lg z-50">
      {/* Window Header */}
      <div className="flex border-b">
        <div className="flex items-center gap-1 px-1">
          <WindowControlButton char="x" handleClick={closeDialog} />
          <WindowControlButton char="-" handleClick={() => {}} />
          <WindowControlButton char="□" handleClick={() => {}} />
        </div>
        <div className="w-full text-center">Giddy Browser</div>
      </div>

      {/* Browser Content */}
      <div className="flex flex-col h-full">
        {/* Navigation Bar */}
        <div className="flex items-center gap-2 p-3 border-b bg-gray-50">
          <button
            className="w-8 h-8 flex items-center justify-center border border-black rounded-full hover:bg-black hover:text-white transition-all duration-200"
            onClick={() => {}}
            title="Back"
          >
            ←
          </button>
          <button
            className="w-8 h-8 flex items-center justify-center border border-black rounded-full hover:bg-black hover:text-white transition-all duration-200"
            onClick={() => {}}
            title="Forward"
          >
            →
          </button>
          <button
            className="w-8 h-8 flex items-center justify-center border border-black rounded-full hover:bg-black hover:text-white transition-all duration-200"
            onClick={() => {}}
            title="Refresh"
          >
            ↻
          </button>
          <form onSubmit={handleUrlSubmit} className="flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={url}
              className="w-full px-3 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </form>
        </div>

        {/* Browser Content Area */}
        <div className="flex-1 p-4 overflow-hidden">
          {/* Placeholder for browser content */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
            <div className="text-center max-w-full px-4">
              <div className="text-4xl mb-3">🌐</div>
              <h2 className="text-lg font-bold mb-2">
                Welcome to Giddy Browser
              </h2>
              <p className="text-gray-600 mb-3 text-sm">
                Current URL:{" "}
                <code className="bg-gray-100 px-2 py-1 rounded text-xs break-all">
                  {url}
                </code>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Browser;
