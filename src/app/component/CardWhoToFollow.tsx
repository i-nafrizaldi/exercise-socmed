import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserPlus } from "lucide-react";
import React from "react";

const CardWhoToFollow: React.FC = () => {
  return (
    <div className="p-2">
      <h2 className="mb-5 font-bold">Who To Follow</h2>

      <div className=" flex flex-col gap-4">
        <div className="flex items-center justify-between rounded-lg border border-gray-300 bg-gray-100 p-2">
          <div className="flex items-center gap-2">
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>Jokowidodol</p>
          </div>
          <div>
            <UserPlus className="cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-gray-300 bg-gray-100 p-2">
          <div className="flex items-center gap-2">
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>Jokowidodol</p>
          </div>
          <div>
            <UserPlus className="cursor-pointer" />
          </div>
        </div>
        <div className="flex items-center justify-between rounded-lg border border-gray-300 bg-gray-100 p-2">
          <div className="flex items-center gap-2">
            <Avatar className="cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>Jokowidodol</p>
          </div>
          <div>
            <UserPlus className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWhoToFollow;
