"use client";

import React from "react";
import { useRouter, useSearchParams } from 'next/navigation'

type PaginationProps = {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  totalPages: number;
}

const Pagination:React.FC<PaginationProps> = ({
  hasNextPage,
  hasPrevPage,
  totalPages,
}) => {
  
  const router = useRouter()
  const searchParams = useSearchParams()
  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '4'

  return (
    <>
        <nav
          className="flex items-center justify-center space-x-3 mt-5 mb-10"
          aria-label="Pagination"
          >
          {/* previous */}
            <button
              disabled={!hasPrevPage}
              onClick={() => {
              router.push(`?page=${Number(page) - 1}&per_page=${per_page}`)
              }}
              className={`rounded px-2 py-1.5 ${hasPrevPage? "text-white hover:bg-slate-600" : "text-slate-600"}  `}
            >
              <span className="sr-only">Previous</span>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                height="50"
                width="50"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

          {/* page index */}
          <div className="text-lg">
            {page} / {totalPages}
          </div>

          {/* next page */}
          <button
            disabled={!hasNextPage}
            onClick={() => {
            router.push(`?page=${Number(page) + 1}&per_page=${per_page}`)
            }}
            className={`rounded px-2 py-1.5 ${hasNextPage? "text-white hover:bg-slate-600" : "text-slate-600"}  `}
          >
              <span className="sr-only">Next</span>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                height="50"
                width="50"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
          </button>
        </nav>
    </>
  );
};

export default Pagination;


