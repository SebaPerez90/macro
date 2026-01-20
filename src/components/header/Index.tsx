import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full test flex items-center justify-between">
      <Image src="/svg/logo.svg" alt="logo" width={100} height={100} />
      <span>links</span>
    </div>
  );
};

export default Header;
