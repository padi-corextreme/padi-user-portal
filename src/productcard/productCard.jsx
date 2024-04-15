// import React from "react";

// const ProductCard = ({ product }) => {
//   return (
//     <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
//       <div className="md:flex">
//         <div className="md:flex-shrink-0">
//           <img
//             className="h-48 w-full object-cover md:w-48"
//             src={product.image}
//             alt="Product"
//           />
//         </div>
//         <div className="p-8">
//           <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
//             {product.category}
//           </div>
//           <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
//             {product.name}
//           </p>
//           <p className="mt-2 text-gray-500">{product.description}</p>
//           <div className="mt-4">
//             <button
//               className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               onClick={() => addToWishlist(product.id)}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 mr-2"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M12 4l-1.5 2-4.5 6h12l-4.5-6-1.5-2z"
//                 />
//               </svg>
//               Add to Wishlist
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
