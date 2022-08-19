const image_input = document.querySelector("#image-input");image_input.addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const uploaded_image = reader.result;
      document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(this.files[0]);
  });

function validate(){
    const firstname=document.getElementById("firstname").value;
    console.log("firstname "+firstname);
    const lastname=document.getElementById("lastname").value;
    console.log("lastname "+lastname);
    const fathername=document.getElementById("fathername").value;
    console.log("fathername "+fathername);
    const mothername=document.getElementById("mothername").value;
    console.log("mothername "+mothername);
    if(firstname=="" ||firstname==undefined){
        const errFirstName=document.getElementById("errFirstName");
        errFirstName.innerHTML="firstname required!.";
        return false;
    }
    if(lastname=="" ||lastname==undefined){
        const errLastName=document.getElementById("errLastName");
        errLastName.innerHTML="lastname required!.";
        return false;
    }
    if(fathername=="" ||fathername==undefined){
        const errFatherName=document.getElementById("errFatherName");
        errFatherName.innerHTML="fathername required!.";
        return false;
    }
    if(mothername=="" ||mothername==undefined){
        const errMotherName=document.getElementById("errMotherName");
        errMotherName.innerHTML="mothername required!.";
        return false;
    }
    return true;
}