'use client'
import { IconName } from "react-icons/bs";
import React, { useEffect, useState } from "react";
import { Table, TableContainer, Td, TableCaption, Thead, Tr, Th, Tbody, HStack, Button } from '@chakra-ui/react';
import axios from "axios";
// import Image from "next/image"
// import productImage from "../../../../public/image.png.jpeg"
import ReactStars from "react-rating-stars-component";
export default function Products({ params }) {

    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(1);
    
    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get(`/api/admin/product/${params.id}`);
                setProduct(response.data.product);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }
        fetchProducts();
    }, []);

    const increaseQuantity = () => {
        if (product.Stock <= quantity) return;
        const qty = quantity + 1;
        setQuantity(qty);
    };

    const decreaseQuantity = () => {
        if (1 >= quantity) return;

        const qty = quantity - 1;
        setQuantity(qty);
    };

    const colours = [
        "Yellow",
        "Green",
        "Red",
        "Blue",
        "Orange",
        "Black",
        "Grey",
    ];

    const quantities = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
    ];


    return (
        <>
            <h1 className="text-center py-4 text-lg">Product #{product._id}</h1>
             {/* <IconName/> */}
            <div className="flex overflow-hidden border rounded-3xl border-black mx-16">
                <div className="w-3/5 bg-amber-500">
                    {/* <Image src={productImage} className="h-[50vw] bg-amber-500" alt="product-img" /> */}
                </div>
                <div className="flex flex-col w-3/5">
                    <div className="p-14">
                        <div className="flex justify-between">
                            <div>
                                <h1 className="text-3xl uppercase">sports shoes 17</h1>
                                <p className="py-1"> Lorem ipsum dolor sit amet</p>
                            </div>
                            <div className="flex justify-end">
                                <h1 className="flex justify-end text-6xl text-red-700">$123</h1>
                            </div>
                        </div>
                        
                        <ReactStars
                            count={5}
                            // onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                        />
                        
                        <h1 className="text-2xl pt-8 uppercase">Description</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <h1 className="text-2xl pt-8 uppercase">color</h1>
                        <select className="uppercase p-3 w-[25vw] mt-2 border border-zinc-800 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black" onChange={(e) => setProduct({ ...product, category: e.target.value })}>
                            {colours.map((col) => (
                                <option key={col} value={col}>
                                    {col}
                                </option>
                            ))}
                        </select><br />
                        <div className="flex flex-col">
                            <h1 className="text-2xl pt-8 uppercase">quantity</h1>
                            <div className="py-2">
                                <button className="border-none bg-zinc-800 px-4 py-2 cursor-pointer text-white" onClick={decreaseQuantity}>-</button>
                                <input className="text-red p-1 border-zinc-800 border-y-2 text-lg pl-7 w-[5vw]" readOnly type="number" value={quantity} />
                                <button className="border-none bg-zinc-800 px-4 py-2 cursor-pointer text-white" onClick={increaseQuantity}>+</button>
                            </div>
                        </div>

                        <div className="flex pt-8">

                            <button
                                className="w-[18vw] p-4 bg-green-500 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                                id="createProductBtn"
                                type="submit"
                            >
                                Add to Cart
                            </button>
                            <button
                                className="ml-5 w-[18vw] bg-blue-500 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                                id="createProductBtn"
                                type="submit"
                            >
                                Add to Wishlist
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};
