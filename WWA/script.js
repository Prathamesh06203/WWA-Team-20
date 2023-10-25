const search = () =>{
    const searchbox = document.getElementById("search-job").value.toUpperCase();
    const storeitems = document.getElementById("job-list");
    const product = document.querySelector(".card");
    const pName = storeitems.getElementsByTagName("h2");

    for(let i = 0; i < pName.length; i++) {
        let match = product[i].getElementsByTagName('h2')[0];
        if (match) {
            let textValue = match.textContent || match.innerHTML;
            if(textValue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display="";
            } else {
                product[i].style.display =  "none";
            }
        }
    }
} 
