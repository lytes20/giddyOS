// menu.data.ts
import { Menu } from "./menu.types";

export const OS_MENU_ACTIONS = {
  SHOW_COMPUTER_INFO: "SHOW_COMPUTER_INFO"
}
export const OS_MENU = [
  {name: "About This Computer", action: OS_MENU_ACTIONS.SHOW_COMPUTER_INFO},
  {name: "System Preferences"},
  {name: "Giddy Store"},
  {name: "Recent Items"},
  {name: "Create Account"},
  {name: "Login"},
];

export const MENUS: Menu[] = [
  {
    label: "Finder",
    items: [
      { name: "About Finder" },
      { name: "Share App..." },
      { name: "Hide Others" }
    ],
  },
  {
    label: "File",
    items: [
      { name: "New Finder Window" },
      { name: "New Folder" },
      { name: "Move to Trash" },
      { name: "Empty Trash" },
      { name: "Close" },
    ],
  },
  {
    label: "Edit",
    items: [
      { name: "Undo" },
      { name: "Cut" },
      { name: "Copy" },
      { name: "Paste" },
      { name: "Clear" },
      { name: "Select All" }
    ],
  },
  {
    label: "View",
    items: [
      { name: "by Small Icon" },
      { name: "by Icon" },
      { name: "by List" },
      { name: "by Name" },
      { name: "by Date" },
      { name: "by Size" },
      { name: "by Kind" },
    ],
  },
  {
    label: "Go",
    items: [
      { name: "Back" },
      { name: "Forward" },
      { name: "Applications" },
      { name: "Documents" },
      { name: "Images" },
      { name: "Music" },
      { name: "Sites" },
      { name: "Videos" },
      { name: "Trash" },
    ],
  },
  {
    label: "Help",
    items: [
      { name: "Finder Help" },
      { name: "About Finder" }
    ],
  },
];
