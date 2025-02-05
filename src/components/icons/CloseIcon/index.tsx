interface IconProps {
  width?: string,
  height?: string,
};

const CloseIcon = ({ width, height }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height && height || '24px'}
      viewBox="0 -960 960 960"
      width={width && width || '24px'}
      fill="inherit"
    >
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
    </svg>
  );
};

export default CloseIcon;
