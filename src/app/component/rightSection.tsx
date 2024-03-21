import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import CardWhoToFollow from "./CardWhoToFollow";

const RightSection = () => {
  return (
    <CardWhoToFollow/>
    // <div className="space-y-4">
    //   <Input placeholder="Search" className="bg-gray-100"></Input>
    //   <div>
    //     <Card className="bg-gray-100">
    //       <CardHeader>
    //         <CardTitle>Trending Topics</CardTitle>
    //       </CardHeader>
    //       <CardContent>
    //         <p>Card Content</p>
    //         <CardDescription>Card Description</CardDescription>
    //       </CardContent>
    //     </Card>
    //   </div>
    // </div>
  );
};

export default RightSection;
