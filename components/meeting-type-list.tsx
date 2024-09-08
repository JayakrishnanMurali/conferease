"use client";

import { HomeCard } from "@/components/home-card";
import { MeetingModal } from "@/components/meeting-modal";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const MeetingTypeList = () => {
  const router = useRouter();

  const [meetingState, setMeetingState] = useState<
    "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting"
  >();

  const createMeeting = () => {};

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        handleClick={() => setMeetingState("isInstantMeeting")}
        className="bg-orange-1 hover:bg-orange-1/80"
      />
      <HomeCard
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        className="bg-blue-1 hover:bg-blue-1/80"
        handleClick={() => setMeetingState("isScheduleMeeting")}
      />
      <HomeCard
        img="/icons/recordings.svg"
        title="View Recordings"
        description="Check your past meeting recordings"
        className="bg-purple-1 hover:bg-purple-1/80"
        handleClick={() => router.push("/recordings")}
      />
      <HomeCard
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="via invite link"
        className="bg-yellow-1 hover:bg-yellow-1/80"
        handleClick={() => setMeetingState("isJoiningMeeting")}
      />

      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant meeting"
        description="Share the meeting link with others to join.         "
        buttonText="Start Meeting"
        handleClick={createMeeting}
        buttonIcon="/icons/add-meeting.svg"
      />
    </section>
  );
};
