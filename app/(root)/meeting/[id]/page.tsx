"use client";

import { Loader } from "@/components/loader";
import { MeetingRoom } from "@/components/meeting-room";
import { MeetingSetup } from "@/components/meeting-setup";
import { useGetCallById } from "@/hooks/use-get-call-by-id";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useState } from "react";

const Meeting = ({ params }: { params: { id: string } }) => {
  const { isLoaded } = useUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  const { call, isLoading } = useGetCallById(params.id);

  if (!isLoaded || isLoading) {
    return <Loader />;
  }

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Meeting;
