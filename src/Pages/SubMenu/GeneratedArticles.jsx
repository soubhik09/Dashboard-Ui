import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ArticlesTable from "@/components/ui/ArticlesTable";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import ArticleSkeleton from "@/components/ArticleSkeleton";

const tabOption = [
  "Generated Articles",
  "Published Articles",
  "Scheduled Articles",
  "Archived Articles",
];

function GeneratedArticles() {
  const [selectedTab, setSelectedTab] = useState("Generated Articles");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className="h-full flex flex-col">
      <div className="mt-4">
        <Tabs defaultValue="generatedArticles" className={`hidden md:flex`}>
          <TabsList className={`mx-auto`}>
            <TabsTrigger
              value="generatedArticles"
              className={`px-7 text-black data-[state=active]:bg-blue-400 data-[state=active]:text-white`}
            >
              Generated Articles
            </TabsTrigger>
            <TabsTrigger
              value="publishedArticles"
              className={`px-7 text-black data-[state=active]:bg-blue-400 data-[state=active]:text-white`}
            >
              Published Articles
            </TabsTrigger>
            <TabsTrigger
              value="scheduledArticles"
              className={`px-7 text-black data-[state=active]:bg-blue-400 data-[state=active]:text-white`}
            >
              Scheduled Articles
            </TabsTrigger>
            <TabsTrigger
              value="archivedArticles"
              className={`px-7 text-black data-[state=active]:bg-blue-400 data-[state=active]:text-white`}
            >
              Archived Articles
            </TabsTrigger>
          </TabsList>
          <TabsContent value="generatedArticles">
            <ArticlesTable />
          </TabsContent>
          <TabsContent value="publishedArticles">
            <ArticleSkeleton />
          </TabsContent>
          <TabsContent value="scheduledArticles">
            <ArticleSkeleton />
          </TabsContent>
          <TabsContent value="archivedArticles">
            <ArticleSkeleton />
          </TabsContent>
        </Tabs>

        {/* Mobile Responsesive */}

        <div className="mb-7 -mt-2 mx-auto md:hidden flex justify-center">
          <DropdownMenu
            open={dropdownOpen}
            onOpenChange={(open) => setDropdownOpen(open)}
          >
            <DropdownMenuTrigger asChild>
              <button
                className={`flex items-center gap-2 bg-blue-400 rounded-md text-white mt-4 p-2 w-[200px] mx-auto",
                  ${
                    dropdownOpen
                      ? "mb-40 transition-all duration-500 ease-in-out"
                      : "transition-all duration-500 ease-in-out"
                  }`}
              >
                <span className="flex-1 text-left px-2">{selectedTab}</span>
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
              {tabOption.map((option) => (
                <DropdownMenuItem
                  key={option}
                  onClick={() => setSelectedTab(option)}
                >
                  {option}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {selectedTab === "Generated Articles" && (
          <div className="md:hidden">
            <ArticlesTable />
          </div>
        )}
        {selectedTab === "Published Articles" && (
          <div>
            <ArticleSkeleton />
          </div>
        )}
        {selectedTab === "Scheduled Articles" && (
          <div>
            <ArticleSkeleton />
          </div>
        )}
        {selectedTab === "Archived Articles" && (
          <div>
            <ArticleSkeleton />
          </div>
        )}
      </div>
    </div>
  );
}

export default GeneratedArticles;
