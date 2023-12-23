export default function TextInput({
  type = "text",
  className = "",
  isFocused = false,
  ...props
}) {
  return (
    <div className="flex flex-col items-start">
      <textarea
        {...props}
        type={type}
        className={
          "border-gray-300 border  bg-gray-100   focus:border-blue-500  focus:ring-blue-500  rounded-md shadow-sm p-2 " +
          className
        }
      />
    </div>
  );
}
