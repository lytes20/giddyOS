import React from "react";
import WindowControlButton from "./WindowControlButton";
import chatIcon from "../../assets/icons/chat.png";
import giddyPodIcon from "../../assets/icons/giddyPod.png";

interface GiddyStoreProps {
  open: boolean;
  closeDialog: () => void;
}

interface AppItem {
  name: string;
  icon: string;
  description?: string;
}

const AVAILABLE_APPS: AppItem[] = [
  { name: "Weather App", icon: chatIcon, description: "Check the weather" },
  { name: "Calculator", icon: chatIcon, description: "Basic calculations" },
  { name: "Calendar", icon: chatIcon, description: "Manage your schedule" },
  { name: "giddyPod", icon: giddyPodIcon, description: "Music player" },
  { name: "Clock", icon: chatIcon, description: "Time and alarms" },
  { name: "Chat App", icon: chatIcon, description: "Messaging" },
];

function GiddyStore(props: GiddyStoreProps) {
  const { open, closeDialog } = props;
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredApps = AVAILABLE_APPS.filter((app) =>
    app.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleGetApp = (appName: string) => {
    // TODO: Implement app installation
    console.log(`Installing ${appName}`);
  };

  return (
    <dialog open={open} className="w-[600px] h-[500px]">
      <div className="flex border-b">
        <div className="flex items-center gap-1 px-1">
          <WindowControlButton char="x" handleClick={closeDialog} />
          <WindowControlButton char="-" handleClick={() => {}} />
          <WindowControlButton char="□" handleClick={() => {}} />
        </div>
        <div className="w-full text-center">giddyStore</div>
      </div>
      <div className="p-4 h-full">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search apps..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 border rounded-[8px] focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 overflow-y-auto h-[380px]">
          {filteredApps.map((app) => (
            <div
              key={app.name}
              className="flex items-center gap-3 p-3 border rounded-[8px] hover:bg-gray-50"
            >
              <img
                src={app.icon}
                alt={app.name}
                className="w-[40px] h-[40px] object-contain"
              />
              <div className="flex-1">
                <h3 className="font-medium">{app.name}</h3>
                {app.description && (
                  <p className="text-sm text-gray-600">{app.description}</p>
                )}
              </div>
              <button
                onClick={() => handleGetApp(app.name)}
                className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
              >
                Get
              </button>
            </div>
          ))}
        </div>
      </div>
    </dialog>
  );
}

export default GiddyStore;
