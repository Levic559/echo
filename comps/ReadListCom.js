import React from "react";
import { useDrag } from "react-dnd";

const ReadListCom=({ id,
ReadlistClick=()=>{},
OnDoubleClick=()=>{},
text="A book"
})=>{
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "book",
        item: { id: id },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      }));
return (
<div className='ReadListCom' onDoubleClick={OnDoubleClick} ref={drag}>
{text}
<button onClick={ReadlistClick}>x</button>
</div>


)

}

export default ReadListCom