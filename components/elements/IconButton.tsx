import React from "react";

type Props = {
  icon: React.ReactNode;
  onClickIcon: () => {};
};

const IconButton = ({ icon, onClickIcon }: Props) => {
  return (
    <div>
      <div
        className="flex flex-row items-center justify-center rounded-full w-[48px] h-[48px] hover:bg-[rgba(144,144,144,0.45)] transition"
        onClick={onClickIcon}
      >
        {icon}
      </div>
    </div>
  );
};

export default IconButton;
