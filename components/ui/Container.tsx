type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[90rem] px-4 sm:px-6 lg:px-10 ${className}`}
    >
      {children}
    </div>
  );
}