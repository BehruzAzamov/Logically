
function Navbar({ cartCount }) {
  let price = 125.00 * cartCount;

  return (
    <div className="navbar border-b pt-10 pb-10 mx-auto max-w-[1100px]">
      <div className="navbar-start">
        <h1 className="text-4xl text-black font-bold font-mono">sneakers</h1>
      </div>
      <div className="navbar-center ml-[-300px]">
        <ol className="flex gap-8">
          <li><a href="/">Collections</a></li>
          <li><a href="/">Men</a></li>
          <li><a href="/">Women</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
        </ol>
      </div>
      <div className="navbar-end flex gap-x-4">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar relative"
          >
            <div className="">
              <img
                className="hover:border-orange-400 w-5 h-5"
                alt="Tailwind CSS Navbar component"
                src="./public/icon-cart.svg"
              />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-400 text-white rounded-full px-2 py-1 text-xs font-bold">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-80"
          >
            {cartCount > 0 && (
              <div className="card-body">
                <h2 className="card-title border-b pb-4">Cart</h2>
                <div className='flex gap-x-4 font-think'>
                  <img className='w-12 h-12 rounded-lg' src="./public/image-product-1.jpg" alt="" />
                  <div>
                    <p>Fall Limited Edition Sneakers</p>
                    <div className="flex">
                      <p>$125.00 * {cartCount} </p>
                      <span className='font-bold ml-[-20px]'>${price}.00</span>
                    </div>
                    <button className="btn bg-orange-500 text-white w-56 mt-5 ml-[-60px]">Checkout</button>
                  </div>
                </div>
              </div>
            )}
            {cartCount === 0 && <div className="card-body">
              <h2 className="card-title border-b pb-4">Cart</h2>
              <p>Your cart is empty.</p>
            </div>
            }
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full ">
              <img
                className="hover:border-orange-400"
                alt="Tailwind CSS Navbar component"
                src="./public/image-avatar.png"
              />
            </div>
          </div>
          <div
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-80"
          >
            {cartCount > 0 && (
              <div className="card-body">
                <h2 className="card-title border-b pb-4">Cart</h2>
                <div className='flex gap-x-4 font-think'>
                  <img className='w-12 h-12 rounded-lg' src="./public/image-product-1.jpg" alt="" />
                  <div>
                    <p>Fall Limited Edition Sneakers</p>
                    <div className="flex">
                      <p>$125.00 * {cartCount} </p>
                      <span className='font-bold '>${price}.00</span>

                    </div>
                    <button className="btn bg-orange-500 text-white w-56 mt-5 ml-[-60px]">Checkout</button>
                  </div>
                </div>
              </div>
            )}
            {cartCount === 0 && <div className="card-body">
              <h2 className="card-title border-b pb-4">Cart</h2>
              <p>Your cart is empty.</p>
            </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
