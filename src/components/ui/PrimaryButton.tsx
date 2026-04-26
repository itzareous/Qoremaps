type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

export default function PrimaryButton({
  children,
  onClick,
  className = '',
  disabled,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`qm-press rounded-full bg-primary text-white px-8 py-4 font-semibold hover:bg-primary-dark disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
      style={{ transition: 'transform 160ms var(--ease-out), background-color 200ms var(--ease-out)' }}
    >
      {children}
    </button>
  );
}
