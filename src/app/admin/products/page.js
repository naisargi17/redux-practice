'use client'
import React, { useEffect, useState } from "react";
import { Table, TableContainer, Td, TableCaption, Thead, Tr, Th, Tbody, HStack, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import Link from "next/link";
import Spinner from "@/components/Spinner";
import { toast } from "react-toastify";
import { IoSearch } from "react-icons/io5";
import {useDispatch,useSelector} from "react-redux"

import {showProduct,deleteProduct,clearError,clearMessage} from "@/redux/silces/productsilce"

import Filter from "@/components/Filter";



// import { Checkbox } from 'flowbite-react';

export default function Products({ params }) {

  // const [product, setProduct] = useState([]);
  const [sort, setSort] = useState('');
  
  const [searchInput, setSearchInput] = useState('');
  const [filter, setFilter] = useState('');
  const {error,message,products,loading} = useSelector((state)=> state.app);

  

  

  const dispatch = useDispatch()

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
  }
  if (message) {
      toast.success(message);
      dispatch(clearMessage());
  }
      dispatch(showProduct());
      // setProduct(products);
  
  }, [error, message, dispatch]);
 


  

  const filters = [
    "Low to High",
    "High to Low",
  ];

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col">
          <div className="flex mx-[7vw] mt-8 justify-between">
            <h1 className="md:text-2xl uppercase font-bold lg:text-4xl">List Of Products</h1>
            <div>
              <Link href="/createproduct">
                <Button className="border rounded-lg bg-amber-500 p-2 border-white text-white">+ Add New Product</Button>
              </Link>
            </div>
          </div>
          <TableContainer className=" mx-[7vw] my-[2vw] rounded-lg border-2 flex items-center justify-center bg-white" >
            <Table className="w-full min-w-max table-auto text-left" >
              <TableCaption className="py-4">All available products in the database</TableCaption>

              <Thead>

                <Tr>

                  <Td className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4" >
                    <div className="flex justify-start">
                     
                  
                      <Filter />
                    </div>

                  </Td>

                  <Td colSpan={6} className="p-4 lg:pr-11" >
                    <div className="flex justify-end">
                      <label class="relative block">
                        <span class="sr-only">Search</span>
                        <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                          <IoSearch color="#C0C2C9" />
                        </span>
                        <input autoComplete="off" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
                      </label>
                    </div>
                  </Td>

                </Tr>

                <Tr>
                  
                  <Th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Id</Th>
                  <Th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Name</Th>
                  <Th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Description</Th>
                  <Th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Price</Th>
                  <Th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Quantity</Th>
                  <Th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">Action</Th>
                </Tr>
              </Thead>
              <Tbody>
             
                {products && products
                  .filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase()))
                  .sort((a, b) => {
                    if (sort === 'Low to High') {
                      return a.price - b.price;
                    } else if (sort === 'High to Low') {
                      return b.price - a.price;
                    }
                    return 0;
                  })
                  .map((item) => (
                    // <Row key={item._id} item={item}  loading={loading} />



                    <Tr key={item._id}>
                    
                    <Td className="p-4 border-b border-blue-gray-50">{item._id}</Td>
                    <Td className="p-4 border-b border-blue-gray-50">{item.name}</Td>
                    <Td className="p-4 border-b border-blue-gray-50">{item.description}</Td>
                    <Td className="p-4 border-b border-blue-gray-50">{item.price}</Td>
                    <Td className="p-4 border-b border-blue-gray-50">{item.stock}</Td>
                    <Td className="p-4 border-b border-blue-gray-50">
                      <HStack justifyContent={"flex-start"}>
                        <Link href={`/product/${item._id}`}>
                          <Button className="border rounded-lg bg-green-700 p-2 border-white text-white">View details</Button>
                        </Link>
                        <Link href={`/updateproduct/${item._id}`}>
                          <Button className="border rounded-lg bg-blue-600 p-2 border-white text-white">Update details</Button>
                        </Link>
                        <Button isLoading={loading} onClick={()=>dispatch(deleteProduct(item._id))}className="border rounded-lg p-3 bg-rose-700 border-white text-white">
                          <RiDeleteBin7Fill />
                        </Button>
                      </HStack>
                    </Td>
                  </Tr>




                  ))}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      )}
    </>);
};

// function Row({ item, loading }) {

  
//   return (
    
//   )
// }
