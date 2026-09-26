import Image from "next/image";

type EditorialImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export default function EditorialImage({
  src,
  alt,
  className = "",
  priority = false,
}: EditorialImageProps) {
  return (
    <div
      className={`relative min-h-[320px] overflow-hidden bg-[#E8EDEA] sm:min-h-[400px] lg:min-h-[520px] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
        className="object-cover transition-transform duration-700 hover:scale-[1.03]"
      />
    </div>
  );
}