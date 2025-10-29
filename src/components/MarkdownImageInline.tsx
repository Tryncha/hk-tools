import Image from 'next/image';
import Markdown from 'react-markdown';

const MarkdownImageInline = ({ children, imageSize }: { children: string; imageSize: number }) => {
  return (
    <Markdown
      components={{
        img: ({ ...props }) => {
          const src = typeof props.src === 'string' ? props.src : '';
          const alt = typeof props.alt === 'string' ? props.alt : '';

          return (
            <Image
              src={src}
              alt={alt}
              width={imageSize}
              height={imageSize}
              className="inline-block align-middle"
            />
          );
        }
      }}
    >
      {children}
    </Markdown>
  );
};

export default MarkdownImageInline;
