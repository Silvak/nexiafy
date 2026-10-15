import { digitalNativesHero } from "@/config/digitalNativesContent";

export default function DigitalNativesHero() {
  const backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(rgba(0, 0, 0, 0.137) 0%, rgba(0, 0, 0, 0.8) 100%), url("${digitalNativesHero.backgroundImage}")`;

  return (
    <section
      className="flex w-full flex-col items-center justify-center px-5 pb-[88px] pt-36"
      style={{
        backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="mx-auto flex w-full max-w-[719px] flex-col items-center gap-6">
        <div className="flex w-full flex-col items-center justify-center gap-2.5">
          <span className="text-xs font-bold uppercase leading-[16px] tracking-widest text-gray-4">
            {digitalNativesHero.eyebrow}
          </span>
          <h1 className="max-w-[593px] text-center text-[36px] font-bold leading-[44px] text-white">
            {digitalNativesHero.title}
          </h1>
        </div>
        <p className="max-w-[409px] text-center text-base font-medium leading-[24px] text-white">
          {digitalNativesHero.description}
        </p>
      </div>
    </section>
  );
}
