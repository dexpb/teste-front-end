import type { SVGProps } from 'react'

type P = SVGProps<SVGSVGElement>

export function BoxIcon(props: P) {
  return (
    <svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.0896 0.100403H2.67065L2.53979 0.111145C2.28135 0.155886 2.04897 0.332299 1.93628 0.569153L1.89038 0.6922V0.693176L0.125732 7.40997L0.124756 7.41095C0.108012 7.47653 0.100211 7.54443 0.100342 7.61212V23.494C0.100386 23.9188 0.481197 24.2996 0.906006 24.2996H23.4939C23.9187 24.2996 24.2995 23.9188 24.2996 23.494V15.0233C24.2994 14.5985 23.9186 14.2176 23.4939 14.2176H14.0642V12.5526C14.0673 12.1642 13.7564 11.8025 13.3718 11.7479H13.3699C13.1827 11.7247 12.9888 11.7698 12.8308 11.8729L8.948 14.3436C8.71328 14.4929 8.60237 14.7634 8.60229 15.0233C8.60229 15.2832 8.7132 15.5545 8.948 15.7039L12.8298 18.1736L12.8308 18.1746C13.0814 18.3316 13.391 18.2988 13.6306 18.1668C13.8702 18.0348 14.0629 17.7906 14.0642 17.4949V15.8289H22.6882V22.6883H1.71167V8.41779H22.6882V11.493L22.6912 11.5721C22.7296 11.9682 23.0918 12.3103 23.4939 12.3104C23.9225 12.3104 24.3054 11.9216 24.2996 11.493V7.61115C24.2991 7.51701 24.2825 7.42305 24.2498 7.33478L21.7791 0.617981V0.617004C21.6721 0.335728 21.398 0.127813 21.0984 0.100403L21.0896 0.0994263V0.100403ZM12.4529 16.032L10.8757 15.0233L12.4529 14.0145V16.032ZM11.7468 6.80548H1.95093L3.28784 1.71173H11.7468V6.80548ZM22.3357 6.80548H13.3591V1.71173H20.4578L22.3357 6.80548Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={0.2}
      />
    </svg>
  )
}

export function HeartIcon(props: P) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 27C16 27 3.5 20 3.5 11.5C3.50025 9.99768 4.02082 8.5418 4.97318 7.37991C5.92555 6.21801 7.25093 5.42181 8.72399 5.12669C10.197 4.83156 11.7269 5.05572 13.0533 5.76105C14.3798 6.46638 15.421 7.60935 16 8.99564L16 8.99565C16.579 7.60936 17.6202 6.46639 18.9467 5.76106C20.2731 5.05572 21.8029 4.83156 23.276 5.12669C24.7491 5.42181 26.0745 6.21801 27.0268 7.3799C27.9792 8.5418 28.4997 9.99768 28.5 11.5C28.5 20 16 27 16 27Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function MagnifyingGlassIcon(props: P) {
  return (
    <svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.6875 21.875C17.7616 21.875 21.875 17.7616 21.875 12.6875C21.875 7.61338 17.7616 3.5 12.6875 3.5C7.61338 3.5 3.5 7.61338 3.5 12.6875C3.5 17.7616 7.61338 21.875 12.6875 21.875Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.1837 19.1844L24.4994 24.5001"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CrownSimpleIcon(props: P) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.52571 15.3138C3.54519 15.3959 3.58109 15.4733 3.63126 15.5412C3.68142 15.6091 3.7448 15.6662 3.8176 15.709C3.89039 15.7518 3.97108 15.7794 4.05483 15.7902C4.13857 15.801 4.22363 15.7947 4.30489 15.7718C8.03061 14.7431 11.9654 14.7427 15.6913 15.7707C15.7725 15.7936 15.8576 15.7999 15.9413 15.7891C16.025 15.7783 16.1056 15.7507 16.1784 15.7079C16.2512 15.6652 16.3146 15.6081 16.3647 15.5402C16.4149 15.4724 16.4508 15.395 16.4703 15.3129L18.4616 6.85067C18.4883 6.73738 18.4828 6.6189 18.4457 6.50857C18.4087 6.39825 18.3416 6.30045 18.252 6.22621C18.1623 6.15196 18.0538 6.10421 17.9385 6.08834C17.8232 6.07247 17.7057 6.0891 17.5994 6.13637L13.6475 7.89275C13.5048 7.95617 13.3436 7.96388 13.1955 7.91435C13.0474 7.86482 12.9232 7.76165 12.8474 7.62514L10.5464 3.4834C10.4923 3.38597 10.4131 3.30478 10.317 3.24826C10.2209 3.19173 10.1115 3.16193 10 3.16193C9.88857 3.16193 9.77914 3.19173 9.68308 3.24826C9.58701 3.30478 9.50781 3.38597 9.45368 3.4834L7.15272 7.62514C7.07688 7.76165 6.95269 7.86482 6.8046 7.91435C6.6565 7.96388 6.49523 7.95617 6.35253 7.89275L2.40008 6.1361C2.29375 6.08885 2.17634 6.07221 2.06107 6.08807C1.94579 6.10392 1.83724 6.15164 1.74762 6.22586C1.658 6.30007 1.59088 6.39783 1.55381 6.50812C1.51674 6.61842 1.51119 6.73687 1.5378 6.85014L3.52571 15.3138Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function CreditCardIcon(props: P) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.5 4.375H2.5C2.15482 4.375 1.875 4.65482 1.875 5V15C1.875 15.3452 2.15482 15.625 2.5 15.625H17.5C17.8452 15.625 18.125 15.3452 18.125 15V5C18.125 4.65482 17.8452 4.375 17.5 4.375Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.1245 13.125H15.6245"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.37445 13.125H10.6245"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.87445 7.56659H18.1244"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function TruckIcon(props: P) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.75 9.375H13.75V6.25H17.0769C17.2018 6.25 17.3238 6.28743 17.4272 6.35746C17.5307 6.42749 17.6108 6.5269 17.6572 6.64288L18.75 9.375Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1.25 11.25H13.75"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6875 16.875C15.723 16.875 16.5625 16.0355 16.5625 15C16.5625 13.9645 15.723 13.125 14.6875 13.125C13.652 13.125 12.8125 13.9645 12.8125 15C12.8125 16.0355 13.652 16.875 14.6875 16.875Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <path
        d="M5.3125 16.875C6.34803 16.875 7.1875 16.0355 7.1875 15C7.1875 13.9645 6.34803 13.125 5.3125 13.125C4.27697 13.125 3.4375 13.9645 3.4375 15C3.4375 16.0355 4.27697 16.875 5.3125 16.875Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <path
        d="M12.8125 15H7.1875"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.4375 15H1.875C1.70924 15 1.55027 14.9342 1.43306 14.8169C1.31585 14.6997 1.25 14.5408 1.25 14.375V5.625C1.25 5.45924 1.31585 5.30027 1.43306 5.18306C1.55027 5.06585 1.70924 5 1.875 5H13.75V13.3762"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.75 13.3762V9.375H18.75V14.375C18.75 14.5408 18.6842 14.6997 18.5669 14.8169C18.4497 14.9342 18.2908 15 18.125 15H16.5625"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ShieldCheckIcon(props: P) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.125 8.95833V4.375C3.125 4.20924 3.19085 4.05027 3.30806 3.93306C3.42527 3.81585 3.58424 3.75 3.75 3.75H16.25C16.4158 3.75 16.5747 3.81585 16.6919 3.93306C16.8092 4.05027 16.875 4.20924 16.875 4.375V8.95833C16.875 15.522 11.3042 17.6966 10.1919 18.0654C10.0675 18.1082 9.93246 18.1082 9.80811 18.0654C8.69578 17.6966 3.125 15.522 3.125 8.95833Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.4375 8.125L8.85414 12.5L6.5625 10.3125"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ShoppingCartIcon(props: P) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23 23H8.72727L5.2402 3.82112C5.19831 3.5907 5.07688 3.3823 4.89708 3.23225C4.71728 3.08219 4.49052 3 4.25633 3H2"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 28C11.3807 28 12.5 26.8807 12.5 25.5C12.5 24.1193 11.3807 23 10 23C8.61929 23 7.5 24.1193 7.5 25.5C7.5 26.8807 8.61929 28 10 28Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 28C24.3807 28 25.5 26.8807 25.5 25.5C25.5 24.1193 24.3807 23 23 23C21.6193 23 20.5 24.1193 20.5 25.5C20.5 26.8807 21.6193 28 23 28Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.81818 18H23.5127C23.981 18 24.4346 17.8356 24.7942 17.5355C25.1538 17.2354 25.3966 16.8186 25.4804 16.3578L27 8H6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function UserCircleIcon(props: P) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <path
        d="M16 20C18.7614 20 21 17.7614 21 15C21 12.2386 18.7614 10 16 10C13.2386 10 11 12.2386 11 15C11 17.7614 13.2386 20 16 20Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <path
        d="M7.97485 24.9218C8.72812 23.4408 9.8765 22.1971 11.2929 21.3284C12.7093 20.4598 14.3384 20 16 20C17.6615 20 19.2906 20.4598 20.707 21.3284C22.1234 22.1971 23.2718 23.4407 24.0251 24.9217"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function TecnologiaIcon(props: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="4" width="14" height="11" rx="1.5" />
      <path d="M5 18h8M9 15v3" />
      <rect x="15" y="12" width="6" height="10" rx="1" />
      <path d="M16.5 22h3" />
    </svg>
  )
}

export function SupermercadosIcon(props: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 8h15l-1.5 9H7.5L6 8z" />
      <path d="M6 8V6a1 1 0 011-1h3" />
      <circle cx="9" cy="20" r="1" fill="currentColor" stroke="none" />
      <circle cx="18" cy="20" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function WhiskeyIcon(props: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 2h6v3l2 2v12a2 2 0 01-2 2H9a2 2 0 01-2-2V7l2-2V2z" />
      <path d="M9 10h6" />
    </svg>
  )
}

export function FerramentasIcon(props: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.07 7.07l-6.36 6.37a2 2 0 01-2.83-2.83l6.37-6.36a6 6 0 017.07-7.07z" />
    </svg>
  )
}

export function CuidadosDeSaudeIcon(props: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 21s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 11c0 5.5-7 10-7 10z" />
      <path d="M12 11v6M9 14h6" />
    </svg>
  )
}

export function CorridaIcon(props: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="14" cy="4" r="2" />
      <path d="M6 20l4-6 3 3 5-8" />
      <path d="M9 14l-3 6M17 9l3-3" />
    </svg>
  )
}

export function ModaIcon(props: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 4l4 4h4l4-4v6l-2 10H8L6 10V4z" />
      <path d="M10 8h4" />
    </svg>
  )
}

export function ChevronLeftIcon(props: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      aria-hidden="true"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}

export function ChevronRightIcon(props: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      aria-hidden="true"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  )
}

export function InstagramIcon(props: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth={1.5} />
      <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
    </svg>
  )
}

export function FacebookIcon(props: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function LinkedInIcon(props: P) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 9v12M6 6v.01M10 21v-8a3 3 0 0 1 6 0v8"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="6" cy="5" r="2" stroke="currentColor" strokeWidth={1.5} />
    </svg>
  )
}
