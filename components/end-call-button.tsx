"use client";
import { Button } from "@/components/ui/button";
import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";

export const EndCallButton = () => {
  const call = useCall();
  const router = useRouter();

  if (!call)
    throw new Error(
      "useStreamCall must be used within a StreamCall component."
    );

  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();

  const isMeetingOwner =
    localParticipant &&
    call.state.createdBy &&
    localParticipant.userId === call.state.createdBy.id;

  if (!isMeetingOwner) return null;

  const endCall = async () => {
    await call.endCall();
    router.replace("/");
  };

  return (
    <Button
      onClick={endCall}
      className="bg-red-500 font-semibold hover:bg-red-400 transition-all duration-200 ease-in-out"
    >
      End call for everyone
    </Button>
  );
};
