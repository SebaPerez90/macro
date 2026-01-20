import Image from "next/image";

const Header = () => {
  return (
    <div className="max-w-300 flex items-center justify-between p-5">
      <Image src="/svg/logo.svg" alt="logo" width={100} height={100} />
      <span className="opacity-0">links</span>
    </div>
  );
};

export default Header;
