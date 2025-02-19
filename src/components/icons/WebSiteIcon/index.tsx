interface WebSiteIconProps {
  width?: string,
  height?: string,
  fill?: string,
}

const WebSiteIcon = ({width, height, fill}:WebSiteIconProps) => {
  return (
    <svg
      width={width || "100%"}
      height={height || "100%"}
      fill={fill || "black"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M3,22H21a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H3A1,1,0,0,0,2,3V21A1,1,0,0,0,3,22ZM4,10H6V20H4ZM20,20H8V10H20ZM4,4H20V8H4Z"></path>
      </g>
    </svg>
  );
};

export default WebSiteIcon;