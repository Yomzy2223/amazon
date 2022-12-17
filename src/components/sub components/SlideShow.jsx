// import React from "react";
// import { useEffect, useState } from "react";
// import "../../css/slideshow.css";
// import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
// import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
// import { Slideshow_imginfo as img_info } from "../../assets/homepage-products";

// function SlideShow() {
//   const [callEffect, setCallEffect] = useState(false);
//   const [margin, setMargin] = useState({ left: 0, right: 0 });

//   var i = img_info.length > 1 ? 2 : 1;
//   var j = img_info.length;

//   const scrollIntoNext = () => {
//     var element = document.getElementById("slide-images");
//     element.scrollLeft += 1300;
//     // var element = document.getElementById(i);
//     // element.scrollIntoView({ behavior: "smooth" });
//     i = i === img_info.length ? 1 : ++i;
//   };
//   const scrollIntoPrev = () => {
//     var element = document.getElementById(j);
//     element({ behavior: "smooth" });
//     j = j === 1 ? img_info.length : --j;
//   };
//   const autoScroll = () =>
//     setInterval(() => {
//       scrollIntoNext();
//     }, 2000);

//   useEffect(() => {
//     if (callEffect) {
//       autoScroll();
//     } else {
//       setCallEffect(true);
//     }

//     return () => {
//       clearInterval(autoScroll);
//     };
//   });

//   return (
//     <div className="slideshow__container">
//       <div className="prev" tabIndex={0} onClick={scrollIntoPrev}>
//         <ArrowBackIosNewOutlinedIcon sx={{ fontSize: 35 }} />
//       </div>

//       <div
//         id="slide-images"
//         className="slide-images"
//         onScroll={(e) => console.log("You scrolled the container")}
//       >
//         {img_info.map((img) => (
//           <Images link={img.link} id={img.id} key={img.id} />
//         ))}
//       </div>

//       <div className="next" tabIndex={0} onClick={scrollIntoNext}>
//         <ArrowForwardIosOutlinedIcon sx={{ fontSize: 35, color: "black" }} />
//       </div>
//     </div>
//   );
// }

// export default SlideShow;

// function Images({ link, id }) {
//   return <img src={link} alt="" id={id} />;
// }

import React from "react";
import { useEffect, useState } from "react";
import "../../css/slideshow.css";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { Slideshow_imginfo as images } from "../../assets/homepage-products";

const img_info = [...images];

for (var i = 1; i < 10; i++) {
  img_info.push(...images);
}
var id = 0;

function SlideShow() {
  const [callEffect, setCallEffect] = useState(false);

  const bodyWidth = document.querySelector("body").scrollWidth;

  const handleScrollIntoNext = () => {
    scrollIntoNext();
  };
  const handleScrollIntoPrev = () => {
    scrollIntoPrev();
  };
  const scrollIntoNext = () => {
    var element = document.getElementById("slide-images");
    element.scrollLeft += bodyWidth;
  };
  const scrollIntoPrev = () => {
    var element = document.getElementById("slide-images");
    element.scrollLeft -= bodyWidth;
  };

  useEffect(() => {
    if (callEffect) {
      const autoScroll = setInterval(() => {
        scrollIntoNext();
        console.log("autoscroll called");
      }, 5000);
      return () => {
        console.log("autoscroll cleared");
        clearInterval(autoScroll);
      };
    } else {
      setCallEffect(true);
    }
  }, [callEffect]);

  return (
    <div className="slideshow__container">
      <div className="prev" tabIndex={0} onClick={handleScrollIntoPrev}>
        <ArrowBackIosNewOutlinedIcon sx={{ fontSize: 35 }} />
      </div>

      <div id="slide-images" className="slide-images">
        {img_info.map((img) => {
          id++;
          return (
            <Images
              link={img.link}
              id={img.id}
              key={img.id + id}
              style={{ width: bodyWidth }}
            ></Images>
          );
        })}
      </div>

      <div className="next" tabIndex={0} onClick={handleScrollIntoNext}>
        <ArrowForwardIosOutlinedIcon sx={{ fontSize: 35, color: "black" }} />
      </div>
    </div>
  );
}

export default SlideShow;

function Images({ link, id }) {
  return <img src={link} alt="" id={id} />;
}
