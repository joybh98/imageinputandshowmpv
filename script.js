const imageInput= document.querySelector("#image-input");

imageInput.addEventListener("change",function() {
    
    for(const file of imageInput.files) {
        console.log(file);
        console.log('---');
    }
})