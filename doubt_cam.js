const video = document.getElementById("video");
const btn = document.getElementById("btn");
const img = document.getElementById("img");
const canvas = document.getElementById("canvas");

async function startcam() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
        video.play();
    }
    catch (err) {
        console.log(err);
    }
}
btn.addEventListener("click",()=>{
    canvas.width=video.videoWidth;
    canvas.height=video.videoHeight;
    const context=canvas.getContext('2d');
    context.drawImage(video,0,0,canvas.width,canvas.height);
    img.src=canvas.toDataUrl('image/png');
    img.style.display="block";
})

startcam(); 