export default function Logo() {
  return (
    <span
      aria-label="SocialPilot"
      className="grid h-10 w-10 place-items-center rounded-full bg-white shadow-[0_4px_20px_rgba(255,255,255,0.25)] transition-transform duration-300 hover:scale-105"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 2.5l2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6L3.3 8.8l6.1-.7L12 2.5z"
          fill="#06b6d4"
        />
      </svg>
    </span>
  );
}
