export default function Button({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`bg-[#f0c14b] border mt-[10px] border-t-[#a88734] border-x-[#9c7e31] border-b-[#846a29] text-[#111] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
