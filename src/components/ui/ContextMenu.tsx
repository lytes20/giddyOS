import React from "react";
import "../../styles/context-menu.css";

interface ContextMenuProps {
  /** Whether the context menu is visible */
  isVisible: boolean;
  /** Position of the context menu */
  position: { x: number; y: number };
  /** Callback when the menu should be closed */
  onClose: () => void;
  /** Callback when the open action is triggered */
  onOpen: () => void;
}

function ContextMenu({
  isVisible,
  position,
  onClose,
  onOpen,
}: ContextMenuProps) {
  const handleOpen = () => {
    onOpen();
    onClose();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  const handleOverlayClick = (event: React.MouseEvent) => {
    // Only close if clicking directly on the overlay, not on its children
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isVisible) return null;

  // Calculate menu position to avoid viewport cutoff
  const menuWidth = 120; // min-width from CSS
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  let left = position.x;
  let top = position.y;

  // If there's not enough space to the right, position to the left
  if (left + menuWidth > viewportWidth) {
    left = left - menuWidth;
  }

  // If there's not enough space at the bottom, position above
  if (top + 50 > viewportHeight) {
    // rough estimate of menu height
    top = top - 50;
  }

  // Ensure menu doesn't go off screen on the left
  if (left < 0) {
    left = 5; // small margin from left edge
  }

  // Ensure menu doesn't go off screen on the top
  if (top < 0) {
    top = 5; // small margin from top edge
  }

  return (
    <div
      className="context-menu-overlay"
      onClick={handleOverlayClick}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div
        className="context-menu"
        style={{
          left: left,
          top: top,
        }}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
        tabIndex={-1}
      >
        <button
          className="context-menu-item"
          onClick={handleOpen}
          type="button"
        >
          Open
        </button>
      </div>
    </div>
  );
}

export default ContextMenu;
