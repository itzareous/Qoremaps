type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function SecondaryButton({
  children,
  onClick,
  className = '',
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border border-gray-200 text-gray-600 px-8 py-4 font-semibold hover:border-gray-400 transition-colors ${className}`}
    >
      {children}
    </button>
  );
}
