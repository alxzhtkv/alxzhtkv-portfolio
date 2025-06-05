import { useEffect, useState } from "react";

export function useImagesLoaded(selector = "img", delay = 1500) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const images = Array.from(document.querySelectorAll(selector)) as HTMLImageElement[];

    if (images.length === 0) {
      setIsLoaded(true);
      return;
    }

    const decodePromises = images.map((img) => {
      if (img.complete) {
        return Promise.resolve();
      }

      if (typeof img.decode === "function") {
        return img.decode().catch(() => {});
      }

      return new Promise<void>((resolve) => {
        img.onload = img.onerror = () => resolve();
      });
    });

    Promise.all(decodePromises).then(() => {
      setIsLoaded(true);
    });
  }, [selector]);

  useEffect(() => {
    if (!isLoaded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      window.scrollTo({ top: 0, behavior: "auto" });

      const timeout = setTimeout(() => {
        setIsReady(true);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [isLoaded, delay]);

  return { isLoaded, isReady };
}
