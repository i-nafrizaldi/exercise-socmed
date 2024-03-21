import { Button } from "@/components/ui/button";
import { Bell, HomeIcon, MessageSquareText, UserRound } from "lucide-react";

const LeftSection = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Button variant="ghost" className="justify-normal">
          <HomeIcon className="mr-4 h-4 w-4" /> Home
        </Button>
        <Button variant="ghost" className="justify-normal">
          <Bell className="mr-4 h-4 w-4" />
          Notification
        </Button>
        <Button variant="ghost" className="justify-normal">
          <UserRound className="mr-4 h-4 w-4" /> Profile
        </Button>
        <Button variant="ghost" className="justify-normal">
          <MessageSquareText className="mr-4 h-4 w-4" /> Massage
        </Button>
      </div>
    </>
  );
};

export default LeftSection;
