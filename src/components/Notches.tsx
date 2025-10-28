import Image from 'next/image';

interface NotchesOnProps {
  quantity: number;
  size: number;
}

export const NotchesOn = ({ quantity, size }: NotchesOnProps) => {
  return Array.from({ length: quantity }, (_, i) => (
    <Image
      key={i}
      src="/ui/notch-cost-on.png"
      alt="Notch Cost On"
      width={size}
      height={size}
    />
  ));
};
