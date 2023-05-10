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


// const images = document.querySelectorAll('.image');
// const imgExtension = 'jpg'; // ekstensi gambar

// for (let i = 1; i <= 10; i++) {
//   images.forEach(image => {
//     const dataName = image.getAttribute('data-name');
//     const img = image.querySelector('img');
//     const imgPath = img.getAttribute('src');
//     const newImgPath = `assets/gallery/${dataName}/gallery${i}.${imgExtension}`;
//     img.setAttribute('src', newImgPath);
//   });
// }
