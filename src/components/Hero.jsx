import React, { useState } from 'react';

function Hero({ setCartCount }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [amount, setAmount] = useState(0);
  const images = ['./public/image-product-1.jpg', './public/image-product-2.jpg', './public/image-product-3.jpg', './public/image-product-4.jpg'];

  const openModal = (index) => {
    setCurrentImageIndex(index);
    document.getElementById('my_modal_2').showModal();
  };

  const closeModal = () => {
    document.getElementById('my_modal_2').close();
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const decreaseAmount = () => {
    setAmount((prevAmount) => (prevAmount > 0 ? prevAmount - 1 : 0));
  };

  const increaseAmount = () => {
    setAmount((prevAmount) => prevAmount + 1);
  };

  const addToCart = () => {
    setCartCount((prevCount) => prevCount + amount);
    setAmount(0);
  };

  return (
    <div className="mt-20 mx-auto max-w-[1100px] pl-14 flex gap-x-32">
      <div className="pl-4">
        <button onClick={() => openModal(0)}><img className="w-96 h-96 rounded-lg" src="./public/image-product-1.jpg" alt="" /></button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box relative flex flex-col items-center">
            <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={closeModal}>✕</button>
            <img className="object-cover w-full h-full" src={images[currentImageIndex]} alt="" />
            <div className="flex justify-between w-full mt-4">
              <button className="btn btn-circle" onClick={prevImage}>
                <img src="./public/icon-previous.svg" alt="Previous" />
              </button>
              <button className="btn btn-circle" onClick={nextImage}>
                <img src="./public/icon-next.svg" alt="Next" />
              </button>
            </div>
          </div>
        </dialog>
        <div className="flex gap-x-5">
          {images.map((image, index) => (
            <img
              key={index}
              className="w-20 h-20 rounded-lg cursor-pointer"
              src={image}
              alt={`Image ${index + 1}`}
              onClick={() => openModal(index)}
            />
          ))}
        </div>
      </div>
      <div className="mt-10">
        <span className="text-orange-500 font-medium">SNEAKER COMPANY</span>
        <h2 className="text-4xl font-bold text-black w-[445px] mb-7">
          Fall Limited Edition Sneakers
        </h2>
        <p className="w-[445px]">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="flex mt-7 gap-x-4">
          <h3 className="text-3xl font-bold text-black">$125.00</h3>
          <span className="py-[7px] px-2 bg-orange-200 rounded-lg text-orange-600">
            50%
          </span>
        </div>
        <span className="mt-4 text-xl line-through text-gray-400">$250.00</span>
        <div className="mt-4 flex gap-x-5">
          <div className="btn mt-4 h-14 w-40">
            <span>
              <img src="./public/icon-minus.svg" alt="" onClick={decreaseAmount} />
            </span>
            <span className="mx-7">{amount}</span>
            <span>
              <img src="./public/icon-plus.svg" alt="" onClick={increaseAmount} />
            </span>
          </div>
          <button className="btn w-72 text-white mt-4 bg-orange-400" onClick={addToCart}>
            <img
              className="text-white"
              src="./public/icon-cart-white.svg"
              alt=""
            />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;