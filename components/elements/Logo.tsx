"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import IconButton from "./IconButton";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Logo = ({ isInDrawer = false, onClickClose = () => {} }) => {
  const { push } = useRouter();

  const onClickLogo = () => {
    // 홈으로 이동하는 로직
    push("/");
  };

  const onClickMenu = () => {};

  return (
    <div className="flex flex-row gap-4 items-center mb-2">
      {isInDrawer ? (
        <IconButton onClickIcon={onClickClose} icon={<IoClose size={30} />} />
      ) : (
        <IconButton
          icon={<RxHamburgerMenu size={24} />}
          onClickIcon={onClickMenu}
        />
      )}
      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image alt={"logo"} src="/main-logo.svg" width={100} height={30} />
      </div>
    </div>
  );
};

export default Logo;
