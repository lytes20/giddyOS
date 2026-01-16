// menu.data.ts
import { Menu } from "./menu.types";

export const OS_MENU: string[] = [
  "About This Computer",
  "System Preferences",
  "Giddy Store",
  "Recent Items",
  "Create Account",
  "Login",
];

export const MENUS: Menu[] = [
  {
    label: "Finder",
    items: ["About Finder", "Share App...", "Hide Others"],
  },
  {
    label: "File",
    items: [
      "New Finder Window",
      "New Folder",
      "Move to Trash",
      "Empty Trash",
      "Close",
    ],
  },
  {
    label: "Edit",
    items: ["Undo", "Cut", "Copy", "Paste", "Clear", "Select All"],
  },
  {
    label: "View",
    items: [
      "by Small Icon",
      "by Icon",
      "by List",
      "by Name",
      "by Date",
      "by Size",
      "by Kind",
    ],
  },
  {
    label: "Go",
    items: [
      "Back",
      "Forward",
      "Applications",
      "Documents",
      "Images",
      "Music",
      "Sites",
      "Videos",
      "Trash",
    ],
  },
  {
    label: "Help",
    items: ["Finder Help", "About Finder"],
  },
];
