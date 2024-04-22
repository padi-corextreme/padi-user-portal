import React from 'react'
import logo from '../../assets/images/Carrefour-logo.png';
import imagee from '../../assets/images/headphones.png';








const Store = () => {
  return (
    <div className="card">
      <div style={{ backgroundColor: '#FCE4EC' }}>
        <div className="mt-10 m-10">
          <h1 className="text-xl font-bold mb-2">Carrefour Market</h1>
          <p className="text-zinc-700 text-base">
            Jusqu'à <span className="text-red-500 font-bold">75% de réduction</span>
          </p>
        </div>
        <br />
        <br />
        <br />
        <div className="flex justify-between items-end">
          <div className="flex">
            <img src={logo} alt="Carrefour Logo" className="h-12" />
          </div>
          <div className="flex space-x-1" style={{ marginTop: '-15px' }}>
            <img
              src={imagee}
              alt="Headphones"
              className="h-8"
              style={{ position: 'relative', zIndex: 2, marginLeft: '-8px' }}
            />

            <img
              src="https://images.unsplash.com/photo-1610136649349-0f646f318053?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Sunglasses"
              className="h-8"
              style={{ position: 'relative', zIndex: 3, marginLeft: '-8px' }}
            />

            <img
              src="https://media.istockphoto.com/id/1219038093/photo/leather-new-shiny-business-shoes-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=yLwl-2F02SFz94TBAQEmH-zbRIWoj7GKQEyJKShXhdY="
              alt="Shoes"
              className="h-8"
              style={{ position: 'relative', zIndex: 3, marginLeft: '-8px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;