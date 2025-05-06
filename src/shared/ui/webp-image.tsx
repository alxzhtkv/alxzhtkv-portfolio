
export function WebpImage({ src, alt, className, pictureClassName, ...rest }: { src: string; alt: string; className?: string; pictureClassName?: string; [key: string]: any }) {

  const webp = src.replace(/\.[^/.]+$/, '.webp');

  return (
    <picture className={pictureClassName}>
      <source type="image/webp" srcSet={webp}  />
      <img src={src} alt={alt} className={className} {...rest}  />
    </picture>
  );
}
