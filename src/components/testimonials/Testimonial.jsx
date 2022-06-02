import React, { useState } from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import section core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import section styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore blanditiis aliquid quidem ipsum deserunt, distinctio vel laudantium quisquam doloremque? Sed cum quaerat deserunt blanditiis consequuntur incidunt ad mollitia nihil obcaecati?",
  },
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore blanditiis aliquid quidem ipsum deserunt, distinctio vel laudantium quisquam doloremque? Sed cum quaerat deserunt blanditiis consequuntur incidunt ad mollitia nihil obcaecati?",
  },
  {
    avatar: AVTR3,
    name: "Kwane Despite",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore blanditiis aliquid quidem ipsum deserunt, distinctio vel laudantium quisquam doloremque? Sed cum quaerat deserunt blanditiis consequuntur incidunt ad mollitia nihil obcaecati?",
  },
  {
    avatar: AVTR4,
    name: "Nana Ama McBrown ",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore blanditiis aliquid quidem ipsum deserunt, distinctio vel laudantium quisquam doloremque? Sed cum quaerat deserunt blanditiis consequuntur incidunt ad mollitia nihil obcaecati?",
  },
];

export default function Testimonial() {
  const [readMore, setReadMore] = useState(false);
  return (
    <section id="testimonials">
      <h5>Reviews from Clients</h5>
      <h2>Tesimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} />
              </div>
              <h5 className="client_name">{name}</h5>
              
              <small className="client_review">
                {/* Creating Read More and Show Less */}
                {readMore ? review : `${review.substring(0, 200)}`}
                <button onClick={() => setReadMore(!readMore)}>
                  {readMore ? "Show less" : "Read more"}
                </button>
              </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

{
  /*<SwiperSlide className="testimonial">
<Swiper className="client_avatar">
<img src={AVTR1} alt="Avatar one" />
</Swiper>
<h5 className="client_name">Ernest Achiever</h5>
<small className="client_review">
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui nobis
impedit rerum reprehenderit beatae facilis odio rem reiciendis totam
consectetur. Harum, consectetur nisi aspernatur iste nobis eligendi!
Labore, exercitationem repellendus!
</small>
<SwiperSlide><SwiperSlide className="testimonial">
<Swiper className="client_avatar">
<img src={AVTR1} alt="Avatar one" />
</Swiper>
<h5 className="client_name">Ernest Achiever</h5>
<small className="client_review">
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui nobis
impedit rerum reprehenderit beatae facilis odio rem reiciendis totam
consectetur. Harum, consectetur nisi aspernatur iste nobis eligendi!
Labore, exercitationem repellendus!
</small>
<SwiperSlide><SwiperSlide className="testimonial">
<Swiper className="client_avatar">
<img src={AVTR1} alt="Avatar one" />
</Swiper>
<h5 className="client_name">Ernest Achiever</h5>
<small className="client_review">
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui nobis
impedit rerum reprehenderit beatae facilis odio rem reiciendis totam
consectetur. Harum, consectetur nisi aspernatur iste nobis eligendi!
Labore, exercitationem repellendus!
</small>
<SwiperSlide><SwiperSlide className="testimonial">
<Swiper className="client_avatar">
<img src={AVTR1} alt="Avatar one" />
</Swiper>
<h5 className="client_name">Ernest Achiever</h5>
<small className="client_review">
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui nobis
impedit rerum reprehenderit beatae facilis odio rem reiciendis totam
consectetur. Harum, consectetur nisi aspernatur iste nobis eligendi!
Labore, exercitationem repellendus!
</small>
<SwiperSlide> */
}
