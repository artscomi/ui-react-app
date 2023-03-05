import { Props } from "types";

export const Clock: React.FC<Props> = (props) => (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.5 0C12.9183 0 16.5 3.58172 16.5 8C16.5 12.4183 12.9183 16 8.5 16C4.08172 16 0.5 12.4183 0.5 8C0.5 3.58172 4.08172 0 8.5 0ZM8.5 2C5.18629 2 2.5 4.68629 2.5 8C2.5 11.3137 5.18629 14 8.5 14C11.8137 14 14.5 11.3137 14.5 8C14.5 4.68629 11.8137 2 8.5 2ZM7.5 3H9.5V8.171L11.7426 10.4142L10.3284 11.8284L7.5 9V3Z"
      fill="#838CA3"
    />
  </svg>
);
