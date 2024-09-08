import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  className?: string;
  buttonText: string;
  handleClick: () => void;
  buttonIcon?: string;
  image?: string;
  children?: React.ReactNode;
}

export const MeetingModal = ({
  buttonText,
  className,
  description,
  handleClick,
  isOpen,
  onClose,
  title,
  buttonIcon,
  image,
  children,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="flex w-full max-w-[520px] flex-col gap-6 border-none 
      bg-dark-1 px-6 py-9 text-white"
      >
        <div className="flex flex-col gap-6">
          {image && (
            <div className="flex justify-center ">
              <Image src={image} width={72} height={72} alt={title} />
            </div>
          )}

          <h1 className={cn("text-3xl font-bold leading-[42px]", className)}>
            {title}
          </h1>
          {description && (
            <p className="text-base font-normal text-gray-200">{description}</p>
          )}

          <div>{children}</div>

          <Button
            onClick={handleClick}
            className="bg-blue-1 gap-2 focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            {buttonIcon && (
              <Image src={buttonIcon} width={13} height={13} alt={buttonText} />
            )}
            {buttonText ?? "Schedule Meeting"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
