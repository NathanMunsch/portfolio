import Image from "next/image";

export default function Technologie({ name, src }: { name: string, src: string }) {
  return (
    <div className="flex flex-row items-center space-x-1.5 rounded-lg p-2 bg-stone-200 w-fit">
      <Image
        src={`${src}`}
        width={35}
        height={35}
        alt={`${name}`}
      />
      <p className="font-bold">{`${name}`}</p>
    </div>
  );
}