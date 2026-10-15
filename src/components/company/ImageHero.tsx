import Image from "next/image";

export interface ImageHeroProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  videoSrc?: string;
  posterSrc?: string;
}

export default function ImageHero({
  title,
  imageSrc,
  imageAlt,
  videoSrc,
  posterSrc,
}: ImageHeroProps) {
  return (
    <div className="relative flex items-center justify-center px-5 pb-40 pt-28 md:px-8 md:pb-72 md:pt-40 lg:px-12">
      {videoSrc ? (
        <video
          width={1920}
          height={1080}
          autoPlay
          loop
          muted
          playsInline
          poster={posterSrc ?? imageSrc}
          aria-label={title}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={videoSrc} />
        </video>
      ) : (
        <Image
          alt={imageAlt}
          src={imageSrc}
          fill
          priority
          className="absolute inset-0 h-full w-full object-cover"
          sizes="100vw"
        />
      )}
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative mx-auto flex max-w-screen-md flex-col gap-8 md:gap-12">
        <h1 className="relative text-center text-xl font-bold text-gray-1 mix-blend-screen md:text-2xl lg:text-3xl">
          {title}
        </h1>
      </div>
    </div>
  );
}
