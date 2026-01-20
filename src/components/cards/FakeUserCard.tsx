import Image from "next/image";

// need a fake user interface
interface FakeUserCardProps {
  imageIndex: number;
  title: string;
  description: string;
  name: string;
  figureCaption: string;
}

const FakeUserCard = ({
  imageIndex,
  title,
  description,
  name,
  figureCaption,
}: FakeUserCardProps) => {
  return (
    <div className="cursor-pointer flex items-center gap-10 w-120 p-6 bg-[#F9F9F9] shadow-lg border-l-16 border-l-black/80 rounded-sm border border-black/5">
      {/* user image and info */}
      <div className="flex flex-col items-center justify-center">
        <div className="overflow-hidden rounded-full size-30">
          <Image
            src={`/images/avatar${imageIndex + 1}.webp`}
            alt={title}
            width={150}
            height={150}
            className="object-cover"
          />
        </div>
        <h3 className="mt-2 text-base font-bold text-black">{name}</h3>
        <p className="text-[12px] w-max font-medium text-slate-900">
          {figureCaption}
        </p>
      </div>

      {/*  user testimonial */}
      <div className="flex flex-col items-start gap-2 text-black">
        <p className="text-base font-bold ">{title}</p>
        <p className="text-[14px] italic font-medium">{description}</p>
      </div>
    </div>
  );
};

export default FakeUserCard;
