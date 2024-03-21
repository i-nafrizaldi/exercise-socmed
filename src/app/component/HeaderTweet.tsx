import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";

const HeaderTweet: React.FC = () => {
  return (
    <section>
      <div className="flex gap-4">
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </section>
  );
};

export default HeaderTweet;
