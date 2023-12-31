import React from 'react';

interface MessageTailIconProps {
  color: string;
  isUserMessage: boolean;
}

export const MessageTailIcon: React.FC<MessageTailIconProps> = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="37"
      height="25"
      viewBox="0 0 37 25"
      fill={'none'}
    >
      <path
        d="M0.180397 24.0576C0.180397 24.0576 6.45843 24.2208 10.4808 24C10.4808 24 16.0064 23.5653 19.4808 23C23.0813 22.4142 25.0146 21.6364 28.4808 20.5C31.6514 19.4605 36.4808 17.5 36.4808 17.5L22.6139 0.0458846C22.6139 0.0458846 20.8319 3.74649 19.4808 6C17.8933 8.64792 16.9916 10.1572 14.9808 12.5C12.731 15.1214 11.1833 16.3482 8.48084 18.5C5.42904 20.9299 0.180397 24.0576 0.180397 24.0576Z"
        fill={color}
      />
    </svg>
  );
};
