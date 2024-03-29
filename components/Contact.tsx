import React, { ReactElement } from "react";

interface Props {}

export default function Contact({}: Props): ReactElement {
  return (
    <div className="flex-row w-full h-full py-20 mx-auto lg:flex">
      <div className="w-full h-full py-16 pl-8 bg-white lg:pl-32 lg:w-1/2">
        <h1 className="w-3/4 mb-12 font-sans text-5xl font-extrabold leading-tight lg:leading-loose sm:text-4xl md:text-5xl">
          Let&apos;s create the future together
        </h1>
        <div className="mt-12 min-h-32">
          <h5 className="font-serif text-xs font-black leading-10 tracking-widest uppercase transition duration-300 ease-in-out sm:text-sm hover:text-yellow-600 hover:text-sm">
            Product Design
          </h5>
          <h5 className="font-serif text-xs font-black leading-10 tracking-widest uppercase transition duration-300 ease-in-out sm:text-sm hover:text-yellow-600 hover:text-sm">
            Solutions Architecture
          </h5>
          <h5 className="font-serif text-xs font-black leading-10 tracking-widest uppercase transition duration-300 ease-in-out sm:text-sm hover:text-yellow-600 hover:text-sm">
            Backend Solution
          </h5>
        </div>
        <hr className="w-1/4 mx-2 mt-6 border-gray-400 lg:mb-12" />
        <div className="hidden lg:block">
          <div className="flex mt-4">
            <div className="">
              {/* LinkedIn  */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM11.5216 19.8778H16.9605V36.2196H11.5216V19.8778ZM17.3188 14.8227C17.2835 13.2204 16.1377 12 14.277 12C12.4164 12 11.2 13.2204 11.2 14.8227C11.2 16.3918 12.3805 17.6473 14.2064 17.6473H14.2412C16.1377 17.6473 17.3188 16.3918 17.3188 14.8227ZM30.3131 19.4941C33.8922 19.4941 36.5754 21.8303 36.5754 26.8497L36.5752 36.2196H31.1365V27.4767C31.1365 25.2807 30.3494 23.7822 28.3805 23.7822C26.8779 23.7822 25.9829 24.7924 25.5898 25.7682C25.446 26.1178 25.4107 26.605 25.4107 27.0934V36.22H19.9711C19.9711 36.22 20.0428 21.4117 19.9711 19.8783H25.4107V22.1929C26.1325 21.0802 27.4254 19.4941 30.3131 19.4941Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="mx-2">
              <span className="inline-block text-xs align-middle transition duration-300 ease-in-out hover:text-yellow-600">
                <a href="https://linkedin.com/in/dejibimbola">LinkedIn</a>
              </span>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="">
              {/* WhatsApp */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24ZM39.0621 23.0815C39.059 30.9483 32.6595 37.3493 24.7911 37.3525H24.7852C22.3967 37.3517 20.0498 36.7524 17.9653 35.6155L10.4 37.6L12.4246 30.2048C11.1757 28.0405 10.5186 25.5855 10.5196 23.0702C10.5228 15.2017 16.9248 8.8 24.7909 8.8C28.6086 8.80165 32.1918 10.2879 34.8862 12.9854C37.5806 15.6828 39.0637 19.2683 39.0621 23.0815Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.8265 34.2096L18.3159 33.0319L18.749 33.289C20.5702 34.3697 22.6578 34.9415 24.7863 34.9424H24.7911C31.3289 34.9424 36.6499 29.6212 36.6526 23.0807C36.6538 19.9112 35.4212 16.9311 33.1817 14.689C30.9422 12.4469 27.964 11.2115 24.7958 11.2104C18.2529 11.2104 12.9318 16.5311 12.9292 23.0711C12.9283 25.3124 13.5554 27.4951 14.7428 29.3836L15.0248 29.8324L13.8265 34.2096ZM31.4924 26.1541C31.7411 26.2743 31.9091 26.3554 31.9808 26.4751C32.0699 26.6238 32.0699 27.3378 31.7729 28.1709C31.4756 29.0038 30.0511 29.764 29.3659 29.8663C28.7516 29.9582 27.9742 29.9965 27.12 29.725C26.602 29.5607 25.9379 29.3413 25.0871 28.9739C21.7442 27.5304 19.4851 24.2904 19.0581 23.678C19.0282 23.6351 19.0072 23.6051 18.9956 23.5896L18.9927 23.5857C18.804 23.3339 17.5395 21.6468 17.5395 19.9008C17.5395 18.2583 18.3464 17.3973 18.7178 17.001C18.7432 16.9739 18.7666 16.9489 18.7876 16.926C19.1144 16.569 19.5008 16.4798 19.7385 16.4798C19.9762 16.4798 20.2141 16.482 20.4219 16.4924C20.4475 16.4937 20.4742 16.4935 20.5018 16.4934C20.7096 16.4921 20.9686 16.4906 21.2242 17.1045C21.3225 17.3408 21.4664 17.691 21.6181 18.0603C21.9249 18.8074 22.264 19.6328 22.3236 19.7522C22.4128 19.9307 22.4722 20.1389 22.3534 20.377C22.3355 20.4127 22.319 20.4464 22.3032 20.4785C22.214 20.6608 22.1483 20.7949 21.9968 20.9718C21.9372 21.0414 21.8756 21.1164 21.814 21.1913C21.6914 21.3407 21.5687 21.4901 21.4619 21.5965C21.2834 21.7743 21.0975 21.9673 21.3055 22.3243C21.5135 22.6813 22.2292 23.8489 23.2893 24.7945C24.4288 25.8109 25.4192 26.2405 25.9212 26.4583C26.0192 26.5008 26.0986 26.5352 26.1569 26.5644C26.5133 26.7429 26.7214 26.7131 26.9294 26.4751C27.1374 26.2372 27.8208 25.4339 28.0585 25.0769C28.2961 24.7201 28.534 24.7795 28.8608 24.8985C29.1877 25.0176 30.9408 25.8801 31.2974 26.0586C31.367 26.0935 31.4321 26.1249 31.4924 26.1541Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="mx-2">
              <span className="inline-block text-xs align-middle transition duration-300 ease-in-out hover:text-yellow-600">
                <a href="https://wa.me/+2347065249677">WhatsApp Chat</a>
              </span>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="">
              <svg
                width="24"
                height="24"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM16.7878 12C16.8588 12.0563 16.9151 12.0563 16.9714 12.049C17.2629 12.0245 17.5127 12.0955 17.6743 12.3625C17.7028 12.4087 17.7313 12.4549 17.7599 12.5012C18.0941 13.0428 18.4288 13.5854 18.747 14.1404C18.9773 14.5417 19.197 14.9495 19.4169 15.3577C19.5782 15.657 19.7396 15.9566 19.9054 16.254C19.9695 16.3745 20.0497 16.488 20.1299 16.6016C20.1752 16.6657 20.2205 16.7298 20.2629 16.7952C20.3652 16.9579 20.463 17.125 20.5586 17.2881L20.5739 17.3144C20.7797 17.7038 20.7699 18.0956 20.4637 18.4066C20.1415 18.7361 19.7952 19.0482 19.4495 19.3597C19.3275 19.4696 19.2056 19.5794 19.0849 19.6899C18.9349 19.8276 18.7826 19.9632 18.6304 20.0986C18.3901 20.3124 18.1501 20.526 17.9192 20.7479C17.6253 21.032 17.5494 21.3871 17.7478 21.7618C17.7661 21.7962 17.7845 21.8306 17.8028 21.8649C18.0905 22.4036 18.3777 22.9416 18.6931 23.4688C19.9372 25.5431 21.5266 27.3064 23.5348 28.6656C24.3087 29.1921 25.1144 29.6746 25.9275 30.135C26.694 30.5685 26.9928 30.495 27.5879 29.8313C27.9023 29.4822 28.2103 29.13 28.5187 28.7773C28.7533 28.5089 28.9882 28.2402 29.2263 27.9725C29.3586 27.8231 29.5178 27.6909 29.6721 27.5635C29.9855 27.299 30.3284 27.2696 30.6884 27.4509C30.711 27.4619 30.7339 27.4726 30.7569 27.4834C30.8363 27.5207 30.9164 27.5582 30.9847 27.6076C31.6233 28.0645 32.3123 28.4315 33.0004 28.7981C33.3414 28.9798 33.6823 29.1614 34.0166 29.3538C34.3613 29.5519 34.7001 29.7589 35.0379 29.9654C35.2305 30.0831 35.4229 30.2006 35.6158 30.3162C35.9024 30.4852 36.0175 30.7326 35.9979 31.073C35.944 32.0305 35.7848 32.971 35.2289 33.7791C34.9962 34.1147 34.6656 34.4085 34.3325 34.6461C33.4093 35.2926 32.3782 35.6918 31.2811 35.9367C30.2843 36.1596 29.29 36.0788 28.3349 35.78C26.4908 35.2118 24.6736 34.5604 23.0009 33.5734C21.4825 32.6746 20.1013 31.5897 18.8229 30.3775C17.2041 28.837 15.7592 27.157 14.591 25.2443C13.8293 24.0027 13.2857 22.6655 12.7934 21.3014C12.4946 20.4785 12.2007 19.663 12.0685 18.7911C11.9167 17.8042 12.022 16.854 12.3379 15.9184C12.622 15.0735 12.9771 14.2653 13.5134 13.5429C13.9346 12.9821 14.4612 12.5706 15.142 12.3869C15.5267 12.2852 15.9138 12.198 16.3008 12.1108C16.4632 12.0742 16.6256 12.0376 16.7878 12Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="mx-2">
              <span className="inline-block text-xs align-middle transition duration-300 ease-in-out hover:text-yellow-600">
                <a href="tel:+2347065249677">+2347065249677</a>
              </span>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="">
              <svg
                width="24"
                height="24"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48ZM24.3344 22.653C26.2995 22.653 35.8544 17.28 35.8544 17.28L35.8698 16.32C35.8698 15.2602 35.0096 14.4 33.9469 14.4H14.7219C13.6602 14.4 12.8 15.2602 12.8 16.32V17.1754C12.8 17.1754 22.4595 22.653 24.3344 22.653ZM12.8154 20.16C12.8144 20.16 22.4595 25.293 24.3344 25.293C26.3898 25.293 35.8544 20.16 35.8544 20.16L35.8698 31.68C35.8698 32.7398 35.0096 33.6 33.9469 33.6H14.7219C13.6611 33.6 12.8 32.7398 12.8 31.68L12.8154 20.16Z"
                  fill="black"
                />
              </svg>
            </div>
            <div className="mx-2">
              <span className="inline-block text-xs align-middle transition duration-300 ease-in-out hover:text-yellow-600">
                <a href="mailto:dejibimbola@gmail.com">dejibimbola@gmail.com</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-full overflow-x-hidden lg:w-1/2">
        <div className="bg-yellow-600 rounded-md lg:mx-20 yellow-card"></div>
        <div className="p-2 bg-white border border-black rounded-lg shadow-md contact-form">
          <div className="my-2">
            <h1 className="font-sans text-sm font-extrabold leading-8 text-center uppercase">
              Send me a message
            </h1>
            <p className="text-xs font-bold text-center">
              I will respond in less than 24 hours
            </p>
          </div>
          <div className="flex-col my-4">
            <input
              className="w-full p-1 my-3 text-sm placeholder-gray-400 border border-yellow-600 border-solid rounded-sm"
              type="email"
              placeholder="Email"
              id=""
            />
            <input
              className="w-full p-1 my-3 text-sm placeholder-gray-400 border border-yellow-600 border-solid rounded-sm"
              type="text"
              placeholder="Name"
              id=""
            />
            <div className="h-32 pb-4 mb-6 overflow-hidden max-h-32">
              <textarea
                className="w-full h-full max-h-full p-1 my-3 text-sm placeholder-gray-400 border border-yellow-600 border-solid rounded-sm"
                placeholder="Enter a message"
                name=""
                id="message-input"
                rows={5}
              />
            </div>
            <button
              className="w-full h-10 font-sans font-bold text-center text-white bg-yellow-600 rounded-sm hover:bg-yellow-600 focus:bg-yellow-700"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
      <div className="mx-4 my-8 lg:hidden">
        <div className="flex mt-4">
          <div className="">
            {/* LinkedIn */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM11.5216 19.8778H16.9605V36.2196H11.5216V19.8778ZM17.3188 14.8227C17.2835 13.2204 16.1377 12 14.277 12C12.4164 12 11.2 13.2204 11.2 14.8227C11.2 16.3918 12.3805 17.6473 14.2064 17.6473H14.2412C16.1377 17.6473 17.3188 16.3918 17.3188 14.8227ZM30.3131 19.4941C33.8922 19.4941 36.5754 21.8303 36.5754 26.8497L36.5752 36.2196H31.1365V27.4767C31.1365 25.2807 30.3494 23.7822 28.3805 23.7822C26.8779 23.7822 25.9829 24.7924 25.5898 25.7682C25.446 26.1178 25.4107 26.605 25.4107 27.0934V36.22H19.9711C19.9711 36.22 20.0428 21.4117 19.9711 19.8783H25.4107V22.1929C26.1325 21.0802 27.4254 19.4941 30.3131 19.4941Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="mx-2">
            <span className="inline-block text-xs align-middle transition duration-300 ease-in-out hover:text-yellow-600">
              <a href="https://linkedin.com/in/dejibimbola">LinkedIn</a>
            </span>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="">
            {/* WhatsApp  */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24ZM39.0621 23.0815C39.059 30.9483 32.6595 37.3493 24.7911 37.3525H24.7852C22.3967 37.3517 20.0498 36.7524 17.9653 35.6155L10.4 37.6L12.4246 30.2048C11.1757 28.0405 10.5186 25.5855 10.5196 23.0702C10.5228 15.2017 16.9248 8.8 24.7909 8.8C28.6086 8.80165 32.1918 10.2879 34.8862 12.9854C37.5806 15.6828 39.0637 19.2683 39.0621 23.0815Z"
                fill="black"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.8265 34.2096L18.3159 33.0319L18.749 33.289C20.5702 34.3697 22.6578 34.9415 24.7863 34.9424H24.7911C31.3289 34.9424 36.6499 29.6212 36.6526 23.0807C36.6538 19.9112 35.4212 16.9311 33.1817 14.689C30.9422 12.4469 27.964 11.2115 24.7958 11.2104C18.2529 11.2104 12.9318 16.5311 12.9292 23.0711C12.9283 25.3124 13.5554 27.4951 14.7428 29.3836L15.0248 29.8324L13.8265 34.2096ZM31.4924 26.1541C31.7411 26.2743 31.9091 26.3554 31.9808 26.4751C32.0699 26.6238 32.0699 27.3378 31.7729 28.1709C31.4756 29.0038 30.0511 29.764 29.3659 29.8663C28.7516 29.9582 27.9742 29.9965 27.12 29.725C26.602 29.5607 25.9379 29.3413 25.0871 28.9739C21.7442 27.5304 19.4851 24.2904 19.0581 23.678C19.0282 23.6351 19.0072 23.6051 18.9956 23.5896L18.9927 23.5857C18.804 23.3339 17.5395 21.6468 17.5395 19.9008C17.5395 18.2583 18.3464 17.3973 18.7178 17.001C18.7432 16.9739 18.7666 16.9489 18.7876 16.926C19.1144 16.569 19.5008 16.4798 19.7385 16.4798C19.9762 16.4798 20.2141 16.482 20.4219 16.4924C20.4475 16.4937 20.4742 16.4935 20.5018 16.4934C20.7096 16.4921 20.9686 16.4906 21.2242 17.1045C21.3225 17.3408 21.4664 17.691 21.6181 18.0603C21.9249 18.8074 22.264 19.6328 22.3236 19.7522C22.4128 19.9307 22.4722 20.1389 22.3534 20.377C22.3355 20.4127 22.319 20.4464 22.3032 20.4785C22.214 20.6608 22.1483 20.7949 21.9968 20.9718C21.9372 21.0414 21.8756 21.1164 21.814 21.1913C21.6914 21.3407 21.5687 21.4901 21.4619 21.5965C21.2834 21.7743 21.0975 21.9673 21.3055 22.3243C21.5135 22.6813 22.2292 23.8489 23.2893 24.7945C24.4288 25.8109 25.4192 26.2405 25.9212 26.4583C26.0192 26.5008 26.0986 26.5352 26.1569 26.5644C26.5133 26.7429 26.7214 26.7131 26.9294 26.4751C27.1374 26.2372 27.8208 25.4339 28.0585 25.0769C28.2961 24.7201 28.534 24.7795 28.8608 24.8985C29.1877 25.0176 30.9408 25.8801 31.2974 26.0586C31.367 26.0935 31.4321 26.1249 31.4924 26.1541Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="mx-2">
            <span className="inline-block text-xs align-middle transition duration-300 ease-in-out hover:text-yellow-600">
              <a href="https://wa.me/+2347065249677">WhatsApp Chat</a>
            </span>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="">
            <svg
              width="24"
              height="24"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM16.7878 12C16.8588 12.0563 16.9151 12.0563 16.9714 12.049C17.2629 12.0245 17.5127 12.0955 17.6743 12.3625C17.7028 12.4087 17.7313 12.4549 17.7599 12.5012C18.0941 13.0428 18.4288 13.5854 18.747 14.1404C18.9773 14.5417 19.197 14.9495 19.4169 15.3577C19.5782 15.657 19.7396 15.9566 19.9054 16.254C19.9695 16.3745 20.0497 16.488 20.1299 16.6016C20.1752 16.6657 20.2205 16.7298 20.2629 16.7952C20.3652 16.9579 20.463 17.125 20.5586 17.2881L20.5739 17.3144C20.7797 17.7038 20.7699 18.0956 20.4637 18.4066C20.1415 18.7361 19.7952 19.0482 19.4495 19.3597C19.3275 19.4696 19.2056 19.5794 19.0849 19.6899C18.9349 19.8276 18.7826 19.9632 18.6304 20.0986C18.3901 20.3124 18.1501 20.526 17.9192 20.7479C17.6253 21.032 17.5494 21.3871 17.7478 21.7618C17.7661 21.7962 17.7845 21.8306 17.8028 21.8649C18.0905 22.4036 18.3777 22.9416 18.6931 23.4688C19.9372 25.5431 21.5266 27.3064 23.5348 28.6656C24.3087 29.1921 25.1144 29.6746 25.9275 30.135C26.694 30.5685 26.9928 30.495 27.5879 29.8313C27.9023 29.4822 28.2103 29.13 28.5187 28.7773C28.7533 28.5089 28.9882 28.2402 29.2263 27.9725C29.3586 27.8231 29.5178 27.6909 29.6721 27.5635C29.9855 27.299 30.3284 27.2696 30.6884 27.4509C30.711 27.4619 30.7339 27.4726 30.7569 27.4834C30.8363 27.5207 30.9164 27.5582 30.9847 27.6076C31.6233 28.0645 32.3123 28.4315 33.0004 28.7981C33.3414 28.9798 33.6823 29.1614 34.0166 29.3538C34.3613 29.5519 34.7001 29.7589 35.0379 29.9654C35.2305 30.0831 35.4229 30.2006 35.6158 30.3162C35.9024 30.4852 36.0175 30.7326 35.9979 31.073C35.944 32.0305 35.7848 32.971 35.2289 33.7791C34.9962 34.1147 34.6656 34.4085 34.3325 34.6461C33.4093 35.2926 32.3782 35.6918 31.2811 35.9367C30.2843 36.1596 29.29 36.0788 28.3349 35.78C26.4908 35.2118 24.6736 34.5604 23.0009 33.5734C21.4825 32.6746 20.1013 31.5897 18.8229 30.3775C17.2041 28.837 15.7592 27.157 14.591 25.2443C13.8293 24.0027 13.2857 22.6655 12.7934 21.3014C12.4946 20.4785 12.2007 19.663 12.0685 18.7911C11.9167 17.8042 12.022 16.854 12.3379 15.9184C12.622 15.0735 12.9771 14.2653 13.5134 13.5429C13.9346 12.9821 14.4612 12.5706 15.142 12.3869C15.5267 12.2852 15.9138 12.198 16.3008 12.1108C16.4632 12.0742 16.6256 12.0376 16.7878 12Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="mx-2">
            <span className="inline-block text-xs align-middle transition duration-300 ease-in-out hover:text-yellow-600">
              <a href="tel:+2347065249677">+2347065249677</a>
            </span>
          </div>
        </div>
        <div className="flex mt-4">
          <div className="">
            <svg
              width="24"
              height="24"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48ZM24.3344 22.653C26.2995 22.653 35.8544 17.28 35.8544 17.28L35.8698 16.32C35.8698 15.2602 35.0096 14.4 33.9469 14.4H14.7219C13.6602 14.4 12.8 15.2602 12.8 16.32V17.1754C12.8 17.1754 22.4595 22.653 24.3344 22.653ZM12.8154 20.16C12.8144 20.16 22.4595 25.293 24.3344 25.293C26.3898 25.293 35.8544 20.16 35.8544 20.16L35.8698 31.68C35.8698 32.7398 35.0096 33.6 33.9469 33.6H14.7219C13.6611 33.6 12.8 32.7398 12.8 31.68L12.8154 20.16Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="mx-2">
            <span className="inline-block text-xs align-middle transition duration-300 ease-in-out hover:text-yellow-600">
              <a href="mailto:dejibimbola@gmail.com">dejibimbola@gmail.com</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
