type Props = { children: React.ReactNode; className?: string };

export default function Eyebrow({ children, className = '' }: Props) {
  return (
    <span
      className={`text-xs font-bold tracking-widest text-primary uppercase mb-4 block ${className}`}
    >
      {children}
    </span>
  );
}
