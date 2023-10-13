import { ImageInfo } from "@/types";
import Image from "next/image";

interface CustomImageProps {
  image: ImageInfo;
  height?: number;
  width?: number;
}
export const ImageAtom: React.FC<CustomImageProps> = ({
  image,
  height,
  width,
}) => {
  return (
    <Image
      src={image.file}
      alt={image.title}
      height={height ?? image.height}
      width={width ?? image.width}
    />
  );
};
