import React from "react";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ad4c731e-032d-4360-a6df-897bba77e1a8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Successful!",
        text: "Your message has been sent",
        icon: "success",
      });
    }
  };

  useEffect(() => {
    AOS.init({duration:1200})
  
    
  })

  return (
    <div id="contact">
      <div className="bg-black" >
        <div className="flex items-center justify-center">
          <div className="bg-gray-500 w-full h-[2px]  text-white "></div>
          <p className="absolute  text-white text-2xl font-bold text-center bg-black px-4 ">
            CONTACT ME
          </p>
        </div>

        <div className="w-full lg:flex-row flex-col flex items-center justify-around pt-10" data-aos="zoom-in">
          <div className=" flex  flex-col items-center mb-5">
            <img
              className="sm:w-96 w-72"
              src="https://finnovating.com/wp-content/uploads/2021/01/contact-us-03.png"
              alt=""
            />
            <p className="font-semibold text-center sm:text-xl text-lg text-white -mt-5">
              <i className="fa-sharp fa-regular fa-envelope"></i> :
              vaidyadandriyal04@gmail.com
            </p>
          </div>
          <div className="mt-10 flex flex-col items-center">
            <div className="flex">
              <div className="sm:text-4xl text-3xl text-blue-500 font-micro font-bold mb-5">
                GET IN TOUCH
              </div>
              <img
                className="ml-2 w-10 h-10 "
                src="https://cdn3d.iconscout.com/3d/premium/thumb/message-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--messenger-logo-new-get-messages-contact-notice-pack-network-communication-illustrations-4137432.png?f=webp"
                alt=""
              />
            </div>
            <form className="flex flex-col mb-7" onSubmit={onSubmit}>
              <input
                className="rounded-lg shadow-lg shadow-slate-500 mb-5 w-60 sm:w-96 pl-5 py-2 capitalize "
                type="text"
                placeholder="Name"
                name="name"
                id=""
                required
              />
              <input
                className="rounded-lg shadow-lg shadow-slate-500 mb-5 pl-5 py-2 "
                type="email"
                placeholder="Email"
                name="email"
                id=""
                required
              />
              <textarea
                className="rounded-lg mb-5 shadow-lg shadow-slate-500 h-28 pl-5 pt-2  "
                placeholder="Write your message"
                name="message "
                id=""
                required
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600  text-white py-2 font-semibold hover:bg-blue-900 duration-300 rounded-md"
              >
                Send <i className="fa-sharp fa-solid fa-paper-plane ml-1"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="flex items-center w-full justify-center pb-16 pt-6 h-10 space-x-8">
          <a
            href="https://www.linkedin.com/in/vaidyadandriyal/" target="_blank"
            className="transition-transform transform hover:scale-125"
          >
            <img
              className="w-14 "
              src="https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/vaidyad18" target="_blank"
            className="transition-transform transform hover:scale-125"
          >
            <img
              className="invert w-10"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/220px-GitHub_Invertocat_Logo.svg.png"
              alt="GitHub"
            />
          </a>
          <a
            href="https://leetcode.com/u/vaidyad18/" target="_blank"
            className="transition-transform transform hover:scale-125"
          >
            <img
              className="invert w-10"
              src="https://cdn.iconscout.com/icon/free/png-256/free-leetcode-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-4-pack-logos-icons-2944960.png?f=webp"
              alt="LeetCode"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
