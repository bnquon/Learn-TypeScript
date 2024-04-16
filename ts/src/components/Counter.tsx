import React, { useState } from "react";

const Counter: React.FC<{}> = () => {
    const [num, setNum] = useState<number>(0);

    const handleClick = () => {
        setNum(num + 1);
      };

    return (
        <div className="counterContainer">
            <button onClick={handleClick}>Increment</button>
            <h2>{num}</h2>
        </div>
    )

}

export default Counter;