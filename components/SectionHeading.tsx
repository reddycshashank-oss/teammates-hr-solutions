type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "mx-auto text-center"
      : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>

      {eyebrow && (
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-[#82998D]" />

          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5F766B]">
            {eyebrow}
          </span>
        </div>
      )}

      <h2 className="text-[38px] font-bold leading-[1.08] tracking-[-0.04em] text-[#171A19] sm:text-[46px] lg:text-[56px]">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-2xl text-base leading-7 text-[#707773] lg:text-lg lg:leading-8">
          {description}
        </p>
      )}

    </div>
  );
}