import Image from "next/image";

export const Loader = () => {
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <Image
        src="/icons/loading-circle.svg"
        alt="Loading"
        width={50}
        height={50}
      />
    </div>
  );
};
