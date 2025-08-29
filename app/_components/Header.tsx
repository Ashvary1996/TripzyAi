import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const menuOptions = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Pricing",
      path: "/pricing",
    },
    {
      name: "Contact Us",
      path: "/contact-us",
    },
  ];
  return (
    <div className="flex justify-between items-center p-4">
      {/* //Logo// */}
      <div className="flex gap-2 items-center">
        <Image src={"/logo.svg"} alt="logo" width={30} height={30} />
        <h2 className="font-bold text-2xl ">Tripzy-Ai</h2>
      </div>
      {/* Menu Options */}
      <div className="flex gap-5 items-center">
        {menuOptions.map((menu, index) => {
          return (
            <Link href={menu.path} key={index}>
              <h2 className="text-lg hover:scale-105 transition-all hover:text-primary">{menu.name}</h2>
            </Link>
          );
        })}
      </div>
      {/* Get Started Button */}
      <div>
        <Button>
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default Header;
