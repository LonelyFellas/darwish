import Image from "next/image";

const Header = () => {
  return (
    <header>
      <Image src="/logo.png" alt="logo" width={100} height={100} />
    </header>
  );
};
export default Header;
