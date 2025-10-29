import Image from 'next/image';

export const NotchesOn = ({ quantity, size }: { quantity: number; size: number }) => {
  return Array.from({ length: quantity }, (_, i) => (
    <Image
      key={i}
      src="/hollow-knight/ui/notch-cost-on.png"
      alt="Notch Cost On"
      width={size}
      height={size}
    />
  ));
};
