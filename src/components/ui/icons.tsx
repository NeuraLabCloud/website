import { component$ } from "@builder.io/qwik";

interface IconProps {
  w?: number;
  h?: number;
}

export const DiscordIcon = component$<IconProps>(({ w, h }) => {
  return (
    <svg
      width={`${w || 26}px`}
      height={`${h || 26}px`}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="##7289da"
    >
      <path
        d="M5.5 16C10.5 18.5 13.5 18.5 18.5 16"
        stroke="#7289da"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M15.5 17.5L16.5 19.5C16.5 19.5 20.6713 18.1717 22 16C22 15 22.5301 7.85339 19 5.5C17.5 4.5 15 4 15 4L14 6H12"
        stroke="#7289da"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M8.52832 17.5L7.52832 19.5C7.52832 19.5 3.35699 18.1717 2.02832 16C2.02832 15 1.49823 7.85339 5.02832 5.5C6.52832 4.5 9.02832 4 9.02832 4L10.0283 6H12.0283"
        stroke="#7289da"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M8.5 14C7.67157 14 7 13.1046 7 12C7 10.8954 7.67157 10 8.5 10C9.32843 10 10 10.8954 10 12C10 13.1046 9.32843 14 8.5 14Z"
        stroke="#7289da"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M15.5 14C14.6716 14 14 13.1046 14 12C14 10.8954 14.6716 10 15.5 10C16.3284 10 17 10.8954 17 12C17 13.1046 16.3284 14 15.5 14Z"
        stroke="#7289da"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
});

export const GitHubIcon = component$<IconProps>(({ w, h }) => {
  return (
    <svg
      width={`${w || 26}px`}
      height={`${h || 26}px`}
      stroke-width="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#fff"
    >
      <path
        d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268"
        stroke="#000000"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
      <path
        d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267"
        stroke="#000000"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  );
});
