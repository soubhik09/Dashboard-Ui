import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const domains = [
  "amazon.com",
  "flipkart.com",
  "meesho.com",
  "ebay.com",
  "aliexpress.com",
];

function SidebarDropdown() {
  const [selectedDomain, setSelectedDomain] = useState("amazon.com");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className="mb-5 mx-auto">
      <DropdownMenu
        open={dropdownOpen}
        onOpenChange={(open) => setDropdownOpen(open)}
      >
        <DropdownMenuTrigger asChild>
          <button
            className={`flex items-center gap-2 border border-black rounded-full mt-4 p-1 w-[200px] mx-auto",
                  ${
                    dropdownOpen
                      ? "mb-47 transition-all duration-500 ease-in-out"
                      : "transition-all duration-500 ease-in-out"
                  }`}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-400 to-purple-500" />
            <span className="flex-1 text-left">{selectedDomain}</span>
            <ChevronDown
              className={`mr-1 ${
                dropdownOpen
                  ? "rotate-180 duration-500 ease-in-out "
                  : "rotate-360 duration-500 ease-in-out "
              }`}
            />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-[200px] mx-auto">
          {domains.map((domain) => (
            <DropdownMenuItem
              key={domain}
              onClick={() => setSelectedDomain(domain)}
            >
              {domain}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default SidebarDropdown;
