import Image from "next/image";

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
    <div className="border-l-12 border-l-black/70 flex items-center gap-6 w-100 h-50 p-6 bg-[#F9F9F9] border border-black/5 rounded-sm shadow-md hover:-translate-y-2 transition-all duration-200 hover:scale-102 hover:shadow-xl hover:shadow-black/10 cursor-pointer">
      <div className="flex flex-col items-center">
        <div className="overflow-hidden rounded-full size-24">
          <Image
            src={`/images/avatar${imageIndex + 1}.webp`}
            alt={title}
            width={96}
            height={96}
            className="object-cover"
          />
        </div>

        <h3 className="mt-2 text-sm font-bold text-black">{name}</h3>
        <p className="text-xs w-max font-medium text-slate-900">
          {figureCaption}
        </p>
      </div>

      <div className="flex flex-col gap-2 text-black">
        <p className="text-sm font-bold leading-snug">{title}</p>
        <p className="text-sm italic leading-snug">{description}</p>
      </div>
    </div>
  );
};

export default FakeUserCard;
