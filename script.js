function sendMail(){
    var params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        number:document.getElementById("number").value,
        message:document.getElementById("message").value,
    }
    const serviceID="service_xbcv86l";
const templateID="template_gmj3lko";

emailjs.send(serviceID,templateID,params)
.then(
    res=>{
        document.getElementById("name").value="";
        document.getElementById("email").value="";
        document.getElementById("number").value="";
        document.getElementById("message").value="";
        console.log(res);
        alert("your message sent successfully");
    }
).catch((error)=>console.log(err))
}
