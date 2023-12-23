export default function Container({
  children,
  size = "max-w-7xl",
  padding = "p-6",
  ypadding = "py-4 sm:py-12",
  xpadding = "sm:px-6 lg:px-8",
  className = "",
  transparent = false,
}) {
  return (
    <div className={ypadding}>
      <div className={`${size} mx-auto ${xpadding}`}>
        <div
          className={`${
            transparent
              ? ""
              : "bg-white border shadow-sm sm:rounded-lg border-gray-200"
          } overflow-hidden `}
        >
          <div className={`${padding} ${className} text-gray-900`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
