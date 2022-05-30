import { useRef } from "react";

// presentational 컴포넌트
export default function TodoForm({add}) {
  const inputRef = useRef();

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={click}>추가</button>
    </div>
  )

  function click() {
    add(inputRef.current.value);
  }

}


// container
