import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Logo = () => {
  return (
    <h1>
      <AspectRatio ratio={16 / 9} className="rounded-lg bg-muted">
        <Image
          alt="localai-logo"
          src="/Ararat-colored.svg"
          width={200}
          height={30}
        />
      </AspectRatio>
    </h1>
  );
};

export default Logo;
