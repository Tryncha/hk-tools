import Image from 'next/image';

export const NotchesOn = ({ quantity, size }: { quantity: number; size: number }) => {
  return (
    <div className="flex">
      {Array.from({ length: quantity }, (_, i) => (
        <Image
          key={i}
          src="hollow-knight/ui/notch-on.png"
          alt="Notch On"
          width={size}
          height={size}
        />
      ))}
    </div>
  );
};

export const NotchesOff = ({ quantity, size }: { quantity: number; size: number }) => {
  return (
    <div className="flex">
      {Array.from({ length: quantity }, (_, i) => (
        <Image
          key={i}
          src="hollow-knight/ui/notch-off.png"
          alt="Notch Off"
          width={size}
          height={size}
        />
      ))}
    </div>
  );
};

export const NotchesOvercharmed = ({ quantity, size }: { quantity: number; size: number }) => {
  return (
    <div className="flex">
      {Array.from({ length: quantity }, (_, i) => (
        <Image
          key={i}
          src="hollow-knight/ui/notch-overcharmed.png"
          alt="Notch Overcharmed"
          width={size}
          height={size}
        />
      ))}
    </div>
  );
};
