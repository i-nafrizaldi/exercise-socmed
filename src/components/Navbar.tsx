import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between px-4">
        <Link href='/'>
        <h1 className="text-4xl font-bold cursor-pointer">SOSMEK</h1>
        </Link>
        <div className="flex items-center gap-5 py-4">
          <Link href='/login'>
          <Button>Login</Button>
          </Link>
          <Link href='/register'>
          <Button>Register</Button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
