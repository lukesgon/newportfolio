interface MaintenanceIconProps {
  width?: string;
  height?: string;
  fill?: string;
}

const MaintenanceIcon = ({ width, height, fill }: MaintenanceIconProps) => {
  return (
    <svg
      width={width || "100%"}
      height={height || "100%"}
      fill={fill || "black"}
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_iconCarrier" transform="translate(6,4)">
        <g id="host-maintenance">
          <g>
            <polygon points="10,24 0,24 0,0 18,0 18,11 16,11 16,2 2,2 2,7 16,7 16,9 2,9 2,12 15.1,12 15.1,14 2,14 2,17 13,17 13,19 2,19 2,22 10,22"></polygon>
          </g>
          <g>
            <rect x="12" y="3" width="3" height="3"></rect>
          </g>
          <g>
            <path d="M22.7,14.7l-2,2l-1.4-1.4l2-2c-0.4-0.2-0.9-0.3-1.3-0.3c-0.8,0-1.5,0.3-2.1,0.9c-0.9,0.9-1.1,2.3-0.6,3.4l-5.1,5.1 l1.4,1.4l5.1-5.1c1.1,0.5,2.5,0.3,3.4-0.6c0.6-0.6,0.9-1.4,0.9-2.1C23,15.5,22.9,15.1,22.7,14.7z"></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default MaintenanceIcon;
