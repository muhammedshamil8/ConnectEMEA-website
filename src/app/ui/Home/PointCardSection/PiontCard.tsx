import Link from 'next/link';
import { BsCaretRight } from "react-icons/bs";
import '@/app/styles/style.css'

export function PiontCard() {
  return (
    <div className="flex gap-4 flex-col items-center justify-center ">
      <div>

        <h1 className="text-4xl text-center md:text-6xl bg-gradient-to-b text-transparent bg-clip-text from-violet to-[#ffffff]/70 my-10 font-extrabold">Why do you want to join us?</h1>
      </div>
      <div className="flex flex-wrap gap-4 gap-y-6 mx-auto items-center justify-center ">

        {cards.map((card, index) => (
          <div key={index} className=" cursor-default parent-point-card">
            <div className="max-w-[280px] md:max-w-[340px] min-h-[180px] m-2 bg-white/10 dark:bg-black/10 backdrop-blur border border-gray-400 shadow-lg rounded-[25px] p-4 text-white dark:text-black transition-all ease-in duration-300 hover:-translate-y-1 hover:border-secondary">
              <div className='flex gap-1'>
                <div className='items-start'>
                  <span>
                    <BsCaretRight className='text-[22px] sm:text-[28px] text-secondary' />
                  </span>

                </div>
                <div className='flex-1 select-none'>
                  {/* <span className="text-6xl bg-gradient-to-b text-transparent bg-clip-text from-violet to-[#ffffff]/70 font-extrabold">0{index + 1}</span> */}
                  <h2 className="text-md sm:text-xl font-semibold">{card.title}</h2>
                  <p className="text-gray-300 mt-2 sm:mt-4 dark:text-gray-700">{card.description}</p>

                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>

  );
}
export const cards = [
  {
    title: "Networking",
    description:
      "Expand your network with like-minded peers and industry professionals for career opportunities.",
  },
  {
    title: "Skill Development",
    description:
      "Enhance your skills through workshops and boot camps led by experts in various fields.",
  },
  {
    title: "Alumni Meets",
    description:
      "Get motivated and inspired by successful alumni and industry leaders through engaging talk sessions.",
  },
  {
    title: "Community Support",
    description:
      "Receive support and guidance from fellow students and mentors to navigate your career journey.",
  },
  {
    title: "Career Advancement",
    description:
      "Gain valuable insights and resources to excel in your chosen career path, all for free.",
  },
];
