import React, { useRef, useState , useEffect} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useRouter } from 'next/navigation';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../styles/swiper.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

import { db, auth, storage } from "@/app/server/config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

export default function Slider() {
  const router = useRouter();
  const [centerSlideIndex, setCenterSlideIndex] = useState(0);
  const [events, setEvents] = useState([]);
  const eventsCollection = collection(db, "Events");

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    try {
      const data = await getDocs(eventsCollection);
      console.log("Fetched data:", data);
      const eventsData = data.docs.map((doc) => ({
        key: doc.id,
        title: doc.data().title,
        Summary: doc.data().Summary,
        short_description: doc.data().short_description,
        Date: doc.data().Date,
        imageUrl: doc.data().imageUrl,
      }));
      setEvents(eventsData);
      console.log("Events data:", eventsData);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSlideChange = (swiper) => {
    setCenterSlideIndex(swiper.realIndex);
  };
  const slideContent = [
    {
      id: 1,
      title: 'Lorem ipsum dolor ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',

    },
    {
      id: 3,
      title: 'Lorem ipsum dolor ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    },
    {
      id: 5,
      title: 'Lorem ipsum dolor ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    },
    {
      id: 6,
      title: 'Lorem ipsum dolor ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    }
  ];
  const pagination = {
    clickable: true,
    dynamicBullets: true,
    renderBullet: function (index, className) {
      return '<span class=" ' + className + '"></span>';
    },
  };
  const handleOpen = (id) => () => {
    router.push(`/event/${id}`);
  }
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        // pagination={{
        //   dynamicBullets: true,
        //   clickable: true,
        // }}
        pagination={pagination}
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        {events.map((slide, index) => (
          <SwiperSlide key={index} className={centerSlideIndex === (index - 1 + slideContent.length) % slideContent.length ? 'center-slide' : ''}>
            <div className='bg-gradient-to-b  from-secondary to-violet text-left p-6 min-w-[200px]'>
            <h1 className='text-white font-bold text-3xl'>
              {slide.title}
            </h1>
            <p className='text-white font-medium'>
              {slide.short_description}
            </p>
            <div className='flex justify-end p-2 py-4'>
            <button className='bg-white text-[8px] text-black rounded-full px-4 py-[5px] flex items-center gap-1 font-medium' onClick={handleOpen(slide.key)}>
              Open <MdKeyboardDoubleArrowRight className='text-xl'/>
            </button>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </>
  );
}