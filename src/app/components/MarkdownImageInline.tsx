import Image from 'next/image';
import Markdown from 'react-markdown';

interface MarkdownImageInlineProps {
  children: string;
  imageSize: number;
}

const MarkdownImageInline = ({ children, imageSize }: MarkdownImageInlineProps) => {
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
