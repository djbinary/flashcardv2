 
import React, { useEffect, useState,useRef } from 'react';



export default function Upload() {

// JUST READ and display FULL TEXT FILE as it is:

 

let text = "sam hooti is Sam Is sip super super cool if I say so Sam hooti";
  
//Function that takes text, upper cases everything, then turns words into array

function textSplitter(str,start,finish) {
   let capitalize = str.toUpperCase();
   let sliceStr = capitalize.slice(start,finish);
   let str2Array = sliceStr.split(" ");
   //let uniqStr = new Set(str2Array); 
   let fArray= str2Array.filter((a, b) => str2Array.indexOf(a) === b) ;
   // get rid of Is It I Am Up To A if so (only keep words more than 2 char)
  let fArray2 = fArray.filter(word => word.length >= 3);
  console.log("textSplitter");
  console.log(fArray2);
   return fArray2;

   //return str2Array;
}; 

let senecaShort = (textSplitter(text,0,80));
console.log(senecaShort[0]);
console.log(senecaShort[1]);
console.log(senecaShort.length); //doesn't work, not sure why?!



    const [count, setCount] = useState(0);
    const [textTwo, setText] = useState("");
    const inputRef = useRef();
    //console.log(setText);
    useEffect(() => {
       var x = inputRef.current.value;
       console.log(x + "from useEffect");

    })
   
    //<textarea  id="myText" onChange={e => setText(e.target.value)} className = "textAreaBox"></textarea> 
    return(
        <div>
            <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me to cound setEffect
      </button>
      <button onClick={() => textSplitter(inputRef.current.value, 0, 200) }>
GetText      </button>
            <h3>Please Copy/Paste your book here </h3>
            <textarea ref={inputRef} id="myText2"  className = "textAreaBox"></textarea> 
            
            <input  type="submit" value="Create my Flashcards Now" ></input>
            </div>
           
      
       
    );  
}

