interface WindowControlButtonProps {
  char?: string;
  handleClick?: () => void;
}
function WindowControlButton(props: WindowControlButtonProps) {
  const { char, handleClick } = props;
  return (
    <button
      className="flex items-center justify-center border w-[20px] h-[20px] rounded-full"
      onClick={handleClick}
    >
      {char}
    </button>
  );
}

export default WindowControlButton;
