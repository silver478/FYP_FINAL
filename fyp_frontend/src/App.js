import React, { useEffect, useRef,useState } from "react";
import Font_1 from './Font_1';
import Font_2 from './Font_2';
import Font_3 from './Font_3';
import Font_4 from './Font_4';

const App = () => {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const stripRef = useRef(null);
  
  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const [ss_im, setImage] = useState("");
  const [ss_im_data, setImagedata] = useState("");
  const [ss_im_mood, setmood] = useState("Blue");

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error("error:", err);
      });
  };

  const paintToCanvas = () => {
    let video = videoRef.current;
    let photo = photoRef.current;
    let ctx = photo.getContext("2d");

    const width = 320;
    const height = 240;
    photo.width = width;
    photo.height = height;

    
    

    return setInterval(() => {
      ctx.drawImage(video, 0, 0, width, height);
      setImage(photo.toDataURL("image/jpeg"))
      setImagedata(ctx.getImageData(0, 0, width, height).data);
      console.log(ctx.getImageData(0, 0, width, height))
      let formData = new FormData();
			formData.append('image' ,ctx.getImageData(0, 0, width, height).data[0] );
      console.log(photo.toDataURL("image/jpeg"))
      fetch("http://127.0.0.1:5000/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
       
      },
      body: JSON.stringify({
        fullname:photo.toDataURL("image/jpeg"),
        age:17,
        Gender:"Male"
      })
    }).then(response => response.text()).then(res => setmood(res))

    
    
  
    
      

    }, 11000);
  };

  const takePhoto = () => {
    let photo = photoRef.current;
    let strip = stripRef.current;

    console.warn(strip);

    const data = photo.toDataURL("image/jpeg");

    console.warn(data);
    const link = document.createElement("a");
    link.href = data;
    link.setAttribute("download", "myWebcam");
    link.innerHTML = `<img src='${data}' alt='thumbnail'/>`;
    strip.insertBefore(link, strip.firstChild);
  };

  {
  return (
    <div>
      <button onClick={() => takePhoto()}>Take a photo</button>
      <video onCanPlay={() => paintToCanvas()}   ref={videoRef} hidden />
      <canvas ref={photoRef} />
      
      <div>
        <div ref={stripRef} />
      </div>
      <Font_4 color={ss_im_mood}/>
    </div>
  );
}

};

export default App;
