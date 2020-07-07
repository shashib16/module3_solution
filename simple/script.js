// taking reference of the 
// node in which we are about to 

// taking reference of div element
var div=document.querySelector("div");

//giving height/width to div as viewport
div.style.height=window.innerHeight + "px";
div.style.width=window.innerWidth + "px";

// resizing div height and width using "onresize" event
window.onresize = function() {
    // winWidth = window.innerWidth;
    // winHeight = window.innerHeight;
    div.style.width =  window.innerWidth+ 'px';
    div.style.height = window.innerHeight + 'px';
  }

// ************************************* Above code have been used to set backgrond image according to width size**********************************************


    //  2
    // Create three variables that hold 
    //  references to the list (<ul>), <input>,
    //   and <button> elements.
  const Ulist=document.querySelector("ul");
  const Uinput=document.querySelector("input");
  const Ubutton=document.querySelector("button");


// function content_storage(){
//         var content_by_custormer=document.getElementById("inputcontent").value;
//     //    var message="hello " + content_by_custormer+"!";
//     //    documet.
//  console.log(document.getElementById("content").innerHTML=content_by_custormer);
// }


        // 3.
        // Create a function that will run 
        // in response to the button being clicked
    Ubutton.onclick=function(){
        //  4.
        //Create three new elements — a list item
        //(<li>), <span>, and <button>, and store them in variables
     var list=document.createElement("LI");
     var Uspan=document.createElement("span");
       var Dbutton=document.createElement("button");
                 
        //  9.
        //   Append the list item as a child of the list.
        
          Ulist.appendChild(list)
        //  5. 
       //  Inside the function body, start off by storing the
        //  current value of the input element in a variable.
       var content_by_custormer=document.getElementById("inputcontent").value;
        console.log(content_by_custormer)
           
           
        //  8.
    //  Set the text content of the span to the input 
    //  element value you saved earlier, and the text content 
    //  of the button to 'Delete'.
        Uspan.textContent=content_by_custormer;
        
        //    7.
          //Append the span and the button as children of the list item.
           list.appendChild(Uspan);
           
           
           //6. 
        //    empty the input element by 
        //   setting its value to an empty string — ''.
        document.getElementById("inputcontent").value=""
        //   content_by_custormer.innerHTML=""
        //   const Dbutton=document.createElement("button");

        

    //    7.
    //       //Append the span and the button as children of the list item.
    //  list.appendChild(Uspan);
     list.appendChild(Dbutton);
   

    //  8.
    //  Set the text content of the span to the input 
    //  element value you saved earlier, and the text content 
    //  of the button to 'Delete'.
          Dbutton.textContent="Delete"

        //   10.
        // an event handler to the delete button,
         //  so that when clicked it will delete the
           //   entire list item it is inside.   // an event handler to the delete button,
         //  so that when clicked it will delete the
           //   entire list item it is inside.

         Dbutton.onclick=function(){
           //  when i try to delete list using fowwing code  
    // list.removeChild(Uspan)
            // script.js:76 Uncaught DOMException:
            //  Failed to execute 'removeChild' on 'Node':
            //   The node to be removed is not a child of this node.
           //   at HTMLButtonElement.Dbutton.onclick 
        //  And I tried following and work done
    Ulist.removeChild(list);
     }
    //  11.
    //  use the focus() method to focus
    //   the input element ready for entering the next shopping list item.
     
     Uinput.focus();
    }