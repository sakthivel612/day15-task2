
const totalPages = 10;

function create_pagination_Button(totalPages){
    // create a container element for pagination button
    const container = document.createElement("div");
    container.classList.add("container")
    container.style.display = "inline-block";
    container.style.textAlign = "center";
    container.style.marginTop = "50vh"
    container.style.width = "100%";

    // create first button
    const Frist_btn = document.createElement("button");
    Frist_btn.innerText = "First";
    container.appendChild(Frist_btn);

    // styling
    Frist_btn.style.backgroundColor = "#fff000";
    Frist_btn.style.borderRadius = "12px"
    Frist_btn.style.color = "#000"
    Frist_btn.style.cursor = "pointer"
    Frist_btn.style.fontWeight = "bold"
    Frist_btn.style.padding = "10px 15px"
    Frist_btn.style.textAlign = "center"
    Frist_btn.style.boxSizing = "border-box"
    Frist_btn.style.border = "0";
    Frist_btn.style.fontSize = "14px"


    // create previous button
    const Previous = document.createElement("button");
    Previous.innerText = "Previous";

    // styling
    Previous.style.backgroundColor = "#fff000";
    Previous.style.borderRadius = "12px"
    Previous.style.color = "#000"
    Previous.style.cursor = "pointer"
    Previous.style.fontWeight = "bold"
    Previous.style.padding = "10px 15px"
    Previous.style.textAlign = "center"
    Previous.style.boxSizing = "border-box"
    Previous.style.border = "0";
    Previous.style.fontSize = "14px"
  

    Previous.addEventListener("click", ()=>{
      // handle previous button click  
  });

  container.appendChild(Previous);


    // create a page buttons
    for(let i=2; i<=totalPages; i++){
        const pageButton = document.createElement("button");
        pageButton.innerText = i;

         pageButton.addEventListener("click", ()=>{
            // handle page button click
          
        });

        // styling
        pageButton.style.backgroundColor = "#fff000";
        pageButton.style.borderRadius = "12px"
        pageButton.style.color = "#000"
        pageButton.style.cursor = "pointer"
        pageButton.style.fontWeight = "bold"
        pageButton.style.padding = "10px 15px"
        pageButton.style.textAlign = "center"
        pageButton.boxSizing = "border-box"
        pageButton.style.border = "0";
        pageButton.style.fontSize = "14px"
        
        container.appendChild(pageButton);
    }

    // create next button
    const NextButton = document.createElement("button");
    NextButton.innerText = "Next";
    

    NextButton.style.backgroundColor = "#fff000";
    NextButton.style.borderRadius = "12px"
    NextButton.style.color = "#000"
    NextButton.style.cursor = "pointer"
    NextButton.style.fontWeight = "bold"
    NextButton.style.padding = "10px 15px"
    NextButton.style.textAlign = "center"
    NextButton.style.boxSizing = "border-box"
    NextButton.style.border = "0";
    NextButton.style.fontSize = "14px"

    NextButton.addEventListener("click", ()=>{
        // handle next button 
        
    });
    container.appendChild(NextButton);
    
    return container;

}

const container = create_pagination_Button(totalPages);
document.body.appendChild(container);










