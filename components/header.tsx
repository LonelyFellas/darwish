import Image from "next/image";

const items = [
  { id: 1, title: "Docs", link: "" },
  { id: 2, title: "Components", link: "" },
  { id: 3, title: "Blog", link: "" },
  { id: 4, title: "Showcase", link: "" },
];
const Header = () => {
  return (
    <header className="flex justify-between items-center py-2">
      <div className="flex items-center gap-x-4">
        <Image src="/logo.png" alt="logo" width={50} height={50} />
        <span className="text-inherit text-2xl font-bold from-neutral-500 italic 2xl:text-xl">
          Darwish
        </span>
      </div>
      <div className="inline-flex gap-x-8 text-sm">
        {items.map((item) => (
          <span
            key={item.id}
            className=" text-inherit font-medium hover:text-primary cursor-pointer transition-colors"
          >
            {item.title}
          </span>
        ))}
      </div>
    </header>
  );
};
export default Header;
