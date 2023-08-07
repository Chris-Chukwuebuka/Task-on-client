import { useState, useEffect } from "react";
import one from "../assets/img1.png"
import two from "../assets/FrameB.png";
import three from "../assets/FrameC.png";


const images = [one, two, three];

// export default function ImageSwapper() {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             if(currentIndex === images.length - 1) {
//                 setCurrentIndex(0);
//             }
//             else {
//                  setCurrentIndex(currentIndex + 1);
//             }
//         }, 2000)

//         return () => clearInterval(intervalId);
//     }, [])

//     return (
//         <div>
//             <img src={images[currentIndex]} />
//         </div>
//     )
// }

export default function ImageSwapper() {
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <img src={currentImage} />
    </div>
  );
}
