"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProductList({ dataItem, active }) {
  const router = useRouter();

  // 🔢 Pagination setup
  const itemsPerPage = 6; // how many products per page
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(dataItem.length / itemsPerPage);

  // 🧮 Slice products for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = dataItem.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // window.scrollTo({ top: 0, behavior: "smooth" }); // scroll up when page changes
  };

  return (
    <>
      <div className="lg:col-span-3">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {currentItems.map((data) => (
            <li
              key={data.id}
              onClick={() =>
                router.push(`/${active ? "machine" : "product"}/${data.id}`)
              }
              className="cursor-pointer"
            >
              <a className="group block overflow-hidden">
                <Image
                  src={data.images[0]}
                  alt={data.productName}
                  className="object-cover w-full h-[450px] group-hover:scale-105 transition duration-300"
                  height={600}
                  width={300}
                  priority
                />
                <div className="relative bg-white pt-3 p-2">
                  <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    {data.productName}
                  </h3>
                  <p className="mt-2 flex justify-between items-center">
                    <span className="tracking-wider text-gray-900">
                      💸 {data.price}
                    </span>
                    <button className="bg-amber-500 text-white px-2 py-1 rounded-lg text-sm hover:bg-amber-600">
                      Get Details
                    </button>
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>

        {/* 🧭 Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-6">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-200 rounded-md disabled:opacity-50 hover:bg-gray-300"
            >
              Previous
            </button>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-1 rounded-md ${
                  currentPage === index + 1
                    ? "bg-amber-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-200 rounded-md disabled:opacity-50 hover:bg-gray-300"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
}

