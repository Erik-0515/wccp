import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function iconProps({ size = 20, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
    ...props,
  };
}

export function ArrowUpIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M12 19V5M18 11L12 5L6 11" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M6 12.72L10.32 16.8L18.24 7.67999" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronUpIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M6 15L12 9L18 15" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CopyIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M18 9H11C9.89543 9 9 9.89543 9 11V18C9 19.1046 9.89543 20 11 20H18C19.1046 20 20 19.1046 20 18V11C20 9.89543 19.1046 9 18 9Z" stroke="currentColor" strokeWidth={2} />
      <path d="M15 9V6C15 5.46957 14.7893 4.96086 14.4142 4.58579C14.0391 4.21071 13.5304 4 13 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V13C4 13.5304 4.21071 14.0391 4.58579 14.4142C4.96086 14.7893 5.46957 15 6 15H9" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ExclamationIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HistoryIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M3 12C2.99812 14.0611 3.70371 16.0603 4.99883 17.6636C6.29395 19.2669 8.10013 20.3771 10.1155 20.8087C12.1309 21.2403 14.2333 20.967 16.0714 20.0347C17.9095 19.1023 19.3719 17.5673 20.2142 15.6862C21.0564 13.8051 21.2276 11.6919 20.6989 9.69981C20.1703 7.70771 18.9739 5.9574 17.3098 4.74143C15.6457 3.52546 13.6146 2.9175 11.556 3.01917C9.4975 3.12084 7.53622 3.92597 6 5.30001L3 8.00001" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 3V8H8M12 7V12L15 14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LinkIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M10 13C10.4582 13.4752 11.0059 13.8551 11.6117 14.1175C12.2174 14.38 12.8691 14.5199 13.5292 14.5292C14.1892 14.5385 14.8446 14.417 15.4575 14.1717C16.0704 13.9264 16.6286 13.5622 17.1 13.1L19.1 11.1C20.0415 10.1585 20.5705 8.88151 20.5705 7.55C20.5705 6.21849 20.0415 4.94152 19.1 4C18.1585 3.05848 16.8815 2.52954 15.55 2.52954C14.2185 2.52954 12.9415 3.05848 12 4L10.9 5.1" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 11C13.5418 10.5248 12.9941 10.1449 12.3883 9.88248C11.7826 9.62002 11.1309 9.4801 10.4708 9.4708C9.81075 9.46151 9.15536 9.58301 8.54249 9.82831C7.92961 10.0736 7.37138 10.4378 6.89999 10.9L4.89999 12.9C3.95847 13.8415 3.42953 15.1185 3.42953 16.45C3.42953 17.7815 3.95847 19.0585 4.89999 20C5.84151 20.9415 7.11848 21.4705 8.44999 21.4705C9.7815 21.4705 11.0585 20.9415 12 20L13.1 18.9" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M17.25 10.5H6.75C5.50736 10.5 4.5 11.5074 4.5 12.75V18C4.5 19.2426 5.50736 20.25 6.75 20.25H17.25C18.4926 20.25 19.5 19.2426 19.5 18V12.75C19.5 11.5074 18.4926 10.5 17.25 10.5Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.5 10.5V7.50002C7.5 3.36002 16.56 3.36002 16.56 7.50002V10.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function QuestionIcon(props: IconProps) {
  return (
    <svg {...iconProps(props)}>
      <path d="M7.92 8.64002C7.92 5.28002 11.28 3.84002 13.92 4.80002C17.28 6.00002 17.76 10.32 14.4 12.24C12.24 13.68 12 14.88 12 16.32" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="19.68" r="1.45" fill="currentColor" />
    </svg>
  );
}
