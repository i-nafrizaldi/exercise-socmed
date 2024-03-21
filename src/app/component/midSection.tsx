"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

const MidSection: React.FC = () => {
  const [tweet, setTweet] = useState("");

  return (
    <div>
      <div className="grid w-full gap-2">
        <div className="flex gap-4">
          <Avatar className="cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <Textarea
            onChange={(e) => setTweet(e.target.value)}
            value={tweet}
            style={{ resize: "none" }}
            maxLength={200}
            placeholder="Type your message here."
          />
        </div>
        <div className="text-right">{tweet.length}/200</div>
        <div className="text-right">
          <Button className="mt-2 w-20">Tweeps</Button>
        </div>
        <Separator />

        {/* <div className=" space-y-8">
          <Card className="">
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>
          <Card className="">
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>
          <Card className="">
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>
          <Card className="">
            <CardContent>
              <p>Card Content</p>
            </CardContent>
          </Card>
        </div> */}
      </div>
    </div>
  );
};

export default MidSection;
