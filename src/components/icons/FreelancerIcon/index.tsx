interface FreelancerIconProps {
  width?: string;
  height?: string;
  fill?: string;
}

const FreelancerIcon = ({ width, height, fill }: FreelancerIconProps) => {
  return (
    <svg
      width={width || '100%'}
      height={height || '100%'}
      fill={fill || 'black'}
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>freelancer</title>{" "}
        <path d="M9.832 16.769l4.128 4.434 4.552-4.461 1.412-8.313-5.547-0.285zM9.323 16.254l4.37-8.15-12.689-0.689zM6.158 4.849l1.071 2.199 5.916 0.367zM17.772 4.848l-2.988 2.692 5.026 0.187zM7.881 27.152l5.591-5.466-3.364-3.611zM18.619 4.848l2.042 2.864 10.334-2.864z"></path>{" "}
      </g>
    </svg>
  );
};

export default FreelancerIcon;
