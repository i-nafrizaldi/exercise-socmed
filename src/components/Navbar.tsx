import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between px-4">
        <h1 className="text-4xl font-bold cursor-pointer">SOSMEK</h1>
        <div className="flex items-center gap-5 py-4">
          <Button>Login</Button>
          <Button>Register</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
