import { FC, ReactElement } from 'react';
import classnames from 'classnames';

export interface BubbleProps {
  icon: ReactElement;
  url: string;
  color?: string;
}
const Bubble: FC<BubbleProps> = ({ icon, color, url }) => {
  const bubbleColor = (): string => {
    const validTailwindColor = [
      'blue',
      'grey',
      'green',
      'sky',
      'teal',
      'slate',
      'zinc',
    ];
    if (color && validTailwindColor.includes(color)) {
      return `bg-${color}-500 active:bg-${color}-300`;
    }
    return `bg-gray-500 active:bg-gray-300`;
  };
  return (
    <div
      className={classnames(
        'glassmorphism flex h-32 w-32 items-center justify-center rounded-full  bg-opacity-70 text-6xl transition-all active:scale-110 ',
        bubbleColor()
      )}
      onClick={() => {
        if (typeof url !== 'string') return;
        if (url.startsWith('mailto')) {
          window.open(url);
          return;
        }
        window.open(url, '_blank');
      }}
    >
      {icon}
    </div>
  );
};

export default Bubble;
