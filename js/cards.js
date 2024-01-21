//getting all required elements 
/*
const gallery  = document.querySelectorAll(".image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
currentImg = previewBox.querySelector(".current-img"),
totalImg = previewBox.querySelector(".total-img"),
shadow = document.querySelector(".shadow");

window.onload = ()=>{
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length; //passing total img length to totalImg variable
        let newIndex = i; //passing i value to newIndex variable
        let clickedImgIndex; //creating new variable
        
        gallery[i].onclick = () =>{
            clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
            function preview(){
                currentImg.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
                let imageURL = gallery[newIndex].querySelector("img").src; //getting user clicked img url
                previewImg.src = imageURL; //passing user clicked img url in previewImg src
            }
            preview(); //calling above function
    
            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if(newIndex == 0){ //if index value is equal to 0 then hide prevBtn
                prevBtn.style.display = "none"; 
            }
            if(newIndex >= gallery.length - 1){ //if index value is greater and equal to gallery length by -1 then hide nextBtn
                nextBtn.style.display = "none"; 
            }
            prevBtn.onclick = ()=>{ 
                newIndex--; //decrement index
                if(newIndex == 0){
                    preview(); 
                    prevBtn.style.display = "none"; 
                }else{
                    preview();
                    nextBtn.style.display = "block";
                } 
            }
            nextBtn.onclick = ()=>{ 
                newIndex++; //increment index
                if(newIndex >= gallery.length - 1){
                    preview(); 
                    nextBtn.style.display = "none";
                }else{
                    preview(); 
                    prevBtn.style.display = "block";
                }
            }
            document.querySelector("body").style.overflow = "hidden";
            previewBox.classList.add("show"); 
            shadow.style.display = "block"; 
            closeIcon.onclick = ()=>{
                newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
                prevBtn.style.display = "block"; 
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "scroll";
            }
        }
        
    } 
}

----------------------------------
window.onload = () => {
    const galleries = document.querySelectorAll(".gallery");
  
    galleries.forEach((gallery, index) => {
      const images = gallery.querySelectorAll("img");
      const totalImg = images.length;
      let currentImg = 1;
  
      const previewBox = document.createElement("div");
      previewBox.classList.add("preview-box");
      gallery.appendChild(previewBox);
  
      const previewImg = document.createElement("img");
      previewBox.appendChild(previewImg);
  
      const closeIcon = document.createElement("span");
      closeIcon.classList.add("icon");
      previewBox.appendChild(closeIcon);
  
      const prevBtn = document.createElement("span");
      prevBtn.classList.add("prev");
      previewBox.appendChild(prevBtn);
  
      const nextBtn = document.createElement("span");
      nextBtn.classList.add("next");
      previewBox.appendChild(nextBtn);
  
      const shadow = document.createElement("div");
      shadow.classList.add("shadow");
      document.body.appendChild(shadow);
  
      images.forEach((image, imgIndex) => {
        image.onclick = () => {
          showPreview(imgIndex);
        };
      });
  
      function showPreview(newIndex) {
        currentImg = newIndex + 1;
        const imageURL = images[newIndex].src;
        previewImg.src = imageURL;
  
        prevBtn.style.display = newIndex === 0 ? "none" : "block";
        nextBtn.style.display = newIndex === totalImg - 1 ? "none" : "block";
  
        previewBox.classList.add("show");
        shadow.style.display = "block";
        document.body.style.overflow = "hidden";
  
        prevBtn.onclick = () => {
          showPreview(newIndex - 1);
        };
  
        nextBtn.onclick = () => {
          showPreview(newIndex + 1);
        };
  
        closeIcon.onclick = () => {
          previewBox.classList.remove("show");
          shadow.style.display = "none";
          document.body.style.overflow = "scroll";
        };
      }
    });
  };
  */
  window.onload = () => {
    const galleries = document.querySelectorAll(".gallery");

    galleries.forEach((gallery) => {
      const images = gallery.querySelectorAll("img");
      const totalImg = images.length;
      let currentImgIndex = 0;

      const previewBox = document.createElement("div");
      previewBox.classList.add("preview-box");
      gallery.appendChild(previewBox);

      const previewImg = document.createElement("img");
      previewImg.style.maxWidth = "100%"; 
      previewImg.style.maxHeight = "100%";
      previewImg.style.borderRadius = "5px";
      previewImg.style.margin = "10px";
      previewBox.appendChild(previewImg);

      const closeIcon = document.createElement("span");
      closeIcon.classList.add("icon", "icon-close");
      closeIcon.innerHTML = '<i class="fa-solid fa-xmark icon_card""></i>';
      previewBox.appendChild(closeIcon);

      const prevBtn = document.createElement("span");
      prevBtn.classList.add("icon", "icon-prev");
      prevBtn.innerHTML = '<i class="fa-solid fa-caret-right fa-rotate-180 icon_card""></i>';
      previewBox.appendChild(prevBtn);

      const nextBtn = document.createElement("span");
      nextBtn.classList.add("icon", "icon-next");
      nextBtn.innerHTML = '<i class="fa-solid fa-caret-right icon_card" "></i>';
      previewBox.appendChild(nextBtn);

      const imageCounter = document.createElement("div");
      imageCounter.classList.add("image-counter");
      previewBox.appendChild(imageCounter);

      updateImageCounter();

      const shadow = document.createElement("div");
      shadow.classList.add("shadow");
      document.body.appendChild(shadow);

      images.forEach((image, imgIndex) => {
        image.onclick = () => {
          showPreview(imgIndex);
        };
      });

      function showPreview(newIndex) {
        currentImgIndex = newIndex;
        const imageURL = images[newIndex].src;
        previewImg.src = imageURL;

        prevBtn.style.display = newIndex === 0 ? "none" : "block";
        nextBtn.style.display = newIndex === totalImg - 1 ? "none" : "block";

        previewBox.style.display = "flex";
        shadow.style.display = "block";
        document.body.style.overflow = "hidden";

        updateImageCounter();
      }

      function closePreview() {
        previewBox.style.display = "none";
        shadow.style.display = "none";
        document.body.style.overflow = "scroll";
      }

      function updateImageCounter() {
        imageCounter.innerHTML = `<p class="legenda_slide"> Imagem ${currentImgIndex + 1} de ${totalImg}</p>`;
      }

      closeIcon.onclick = closePreview;
      prevBtn.onclick = () => {
        const newIndex = currentImgIndex === 0 ? totalImg - 1 : currentImgIndex - 1;
        showPreview(newIndex);
      };

      nextBtn.onclick = () => {
        const newIndex = currentImgIndex === totalImg - 1 ? 0 : currentImgIndex + 1;
        showPreview(newIndex);
      };
    });
  };