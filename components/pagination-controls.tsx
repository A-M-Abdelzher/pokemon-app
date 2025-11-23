"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ITEMS_PER_PAGE } from "@/lib/constants";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
}

export function PaginationControls({
  currentPage,
  totalPages,
}: PaginationControlsProps) {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    router.push(`/pokemon/pagination-view?page=${page}`);
  };

  const getPageNumbers = () => {
    const pages: (number | "ellipsis-start" | "ellipsis-end")[] = [];
    const maxVisiblePages = 6; // Maximum number of page buttons to show

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is less than or equal to max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      // Calculate the range of pages to show around current page
      const sidePages = 2; // Number of pages to show on each side of current page
      let start = Math.max(2, currentPage - sidePages);
      let end = Math.min(totalPages - 1, currentPage + sidePages);

      // Adjust if we're near the beginning
      if (currentPage <= sidePages + 2) {
        start = 2;
        end = Math.min(maxVisiblePages - 1, totalPages - 1);
      }

      // Adjust if we're near the end
      if (currentPage >= totalPages - sidePages - 1) {
        start = Math.max(2, totalPages - (maxVisiblePages - 2));
        end = totalPages - 1;
      }

      // Add ellipsis before if there's a gap
      if (start > 2) {
        pages.push("ellipsis-start");
      }

      // Add pages in the range
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      // Add ellipsis after if there's a gap
      if (end < totalPages - 1) {
        pages.push("ellipsis-end");
      }

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <>
      <div className="flex justify-center items-center gap-2 pt-8 pb-4">
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          variant="outline"
          size="default"
          aria-label="Previous page"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="">Previous</span>
        </Button>

        <div className="flex items-center gap-1">
          {getPageNumbers().map((page, index) => {
            if (page === "ellipsis-start" || page === "ellipsis-end") {
              return (
                <div
                  key={`ellipsis-${index}`}
                  className="px-2 text-muted-foreground"
                >
                  <MoreHorizontal className="w-4 h-4" />
                </div>
              );
            }

            const pageNum = page as number;
            const isActive = pageNum === currentPage;

            return (
              <Button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                variant={isActive ? "default" : "outline"}
                size="icon"
                className={cn(
                  "w-10 h-10",
                  isActive && "bg-primary text-primary-foreground"
                )}
              >
                {pageNum}
              </Button>
            );
          })}
        </div>

        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          variant="outline"
          size="default"
          aria-label="Next page"
        >
          <span className="">Next</span>
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
      <p className="text-center text-muted-foreground">
        Page {currentPage} of {totalPages} ({ITEMS_PER_PAGE} Pokémon shown)
      </p>
    </>
  );
}
