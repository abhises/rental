import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TextAlignJustify } from "lucide-react";
import Link from "next/link";
// import { UserButton, UserProfile } from "@clerk/nextjs";

const Header = () => {
  return (
     

      <div className="flex  justify-between   mt-2 h-10 width-full  items-center rounded-lg p-4">
        <div className="flex ">
                    <span>Logo</span>

        </div>
        <div className="hidden  md:flex md:gap-4">
          {/* middle section */}

          <span className="cursor-pointer  hover:scale-110 hover:text-pink-600 hover:border-b-2 border-pink-600">
            Rent
          </span>
          <span className="cursor-pointer  hover:scale-110 hover:text-pink-600 hover:border-b-2 border-pink-600">
            Land
          </span>
        </div>
        <div className="hidden  md:block">
          {/* end section  login*/}
<Link href={"/sign-in"}>
          <span className="cursor-pointer hover:scale-110 hover:text-pink-600 hover:border-b-2 border-pink-600">
            Login
          </span>{" "}
</Link>
          {/* <UserButton /> */}
           <ModeToggle />
        </div>{" "}
        <div className="block md:hidden">
          <TextAlignJustify className="cursor-pointer" />
        </div>
      </div>
  );
};

export default Header;
