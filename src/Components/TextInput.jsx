import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
  { type = "text", className = "", isFocused = false, ...props },
  ref
) {
  const input = ref;

  useEffect(() => {
    if (isFocused) {
      input.current?.focus();
    }
  }, []);

  return (
    <div className="flex flex-col items-start">
      <input
        {...props}
        type={type}
        className={
          "p-2 border border-gray-300  focus:border-blue-500  focus:ring-blue-500  rounded-md shadow-sm " +
          className
        }
        ref={input}
      />
    </div>
  );
});
