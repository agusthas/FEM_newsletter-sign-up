import { cn } from "../lib/utils";

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function PrimaryButton({
  children,
  className,
  ...props
}: PrimaryButtonProps) {
  return (
    <button
      className={cn(
        "px-6 py-5 w-full bg-dark-slate-grey text-white font-bold rounded-lg mt-6 hover:bg-gradient-to-r hover:from-[#FF5478] hover:to-[#FF693E]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
