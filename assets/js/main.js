const filterEvent = document.querySelector(".btns-group");
const filterImg = document.querySelectorAll(".image");

window.onload = ()=>{
  filterEvent.onclick = (selectedEvent) => {
    if(selectedEvent.target.classList.contains("buttons")){
      filterEvent.querySelector(".active").classList.remove("active");
      selectedEvent.target.classList.add("active");
      
      let filterData = selectedEvent.target.getAttribute("data-name");
      

      filterImg.forEach((image) => {
        let filterImages = image.getAttribute("data-name");        

        if((filterImages == filterData) || filterData == "all"){
          image.classList.remove("hide");
          image.classList.add("show");
          
        } else {
          image.classList.add("hide");
          image.classList.remove("show");
        }
      });
      
    }
  }
}