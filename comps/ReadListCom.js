import React from "react";
import { useDrag } from "react-dnd";

const ReadListCom=({ book,
ReadlistClick=()=>{},
OnDoubleClick=()=>{},
text="A book"
})=>{
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "book",
        item: { obj: book },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      }));
return (
<div className='ReadListCom' onDoubleClick={OnDoubleClick} ref={drag} >
{text}
<button onClick={ReadlistClick}>x</button>
</div>


)

}

export default ReadListCom