import { cn } from "@/lib/utils";
import Image from "next/image";

export const HomeCard = ({
  description,
  img,
  title,
  className,
  handleClick,
}: {
  img: string;
  title: string;
  description: string;
  className: string;
  handleClick: () => void;
}) => {
  return (
    <div
      role="button"
      onClick={handleClick}
      className={cn(
        `px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] 
      min-h-[260px] rounded-[14px] cursor-pointer transition-all duration-200`,
        className
      )}
    >
      <div className="flex justify-center items-center flex-col glassmorphism size-12 rounded-[10px]">
        <Image src={img} width={27} height={27} alt={title} />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-base text-gray-200 font-normal">{description}</p>
      </div>
    </div>
  );
};
