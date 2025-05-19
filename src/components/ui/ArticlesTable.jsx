import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

import {
  ArrowUpRight,
  ChevronUp,
  ChevronDown,
  ChevronsUpDown,
} from "lucide-react";

import ArticleCard from "../ArticleCard";
import ArticleSkeleton from "../ArticleSkeleton";

const articles = [
  {
    title: "How to Improve Your Skills in League of Legends",
    keyword: "league of legends [2240000]",
    words: 4575,
    created: "20 hours ago",
  },
  {
    title: "How to Master Last Hitting in League of Legends",
    keyword: "league of legends [2240000]",
    words: 3480,
    created: "21 hours ago",
  },
  {
    title: "7 Tips for Better Teamplay in League of Legends",
    keyword: "league of legends [2240000]",
    words: 2676,
    created: "a day ago",
  },
  {
    title: "Top Virtual Executive Assistant Services (2024)",
    keyword: "virtual executive assistant [2900]",
    words: 2408,
    created: "1 Oct, 24",
  },
  {
    title: "Unlimited Graphics Design Solutions",
    keyword: "unlimited graphic design services [390]",
    words: 1793,
    created: "---",
  },
  {
    title: "Top Amazon Payment Methods for Quick Access to Funds",
    keyword: "amazon payment methods [3600]",
    words: 2647,
    created: "---",
  },
  {
    title:
      "Backlinks 101: What are backlinks and why they're important [Free template]",
    keyword: "backlinks [8100]",
    words: 2261,
    created: "---",
  },
  {
    title: "7 Leading AI SEO Tools in 2024 (Ranked & Compared)",
    keyword: "ai seo software [880]",
    words: 1543,
    created: "---",
  },
  {
    title: "Unlimited Graphic Design Services You Can Rely On",
    keyword: "unlimited graphic design services [390]",
    words: 1974,
    created: "---",
  },
  {
    title: "Unlimited Graphic Design Services You Can Rely On",
    keyword: "unlimited graphic design services [390]",
    words: 1974,
    created: "---",
  },
  {
    title: "Unlimited Graphic Design Services You Can Rely On",
    keyword: "unlimited graphic design services [390]",
    words: 1974,
    created: "---",
  },
  {
    title: "How to Improve Your Skills in League of Legends",
    keyword: "league of legends [2240000]",
    words: 4575,
    created: "20 hours ago",
  },
  {
    title: "How to Master Last Hitting in League of Legends",
    keyword: "league of legends [2240000]",
    words: 3480,
    created: "21 hours ago",
  },
  {
    title: "7 Tips for Better Teamplay in League of Legends",
    keyword: "league of legends [2240000]",
    words: 2676,
    created: "a day ago",
  },
  {
    title: "Top Virtual Executive Assistant Services (2024)",
    keyword: "virtual executive assistant [2900]",
    words: 2408,
    created: "1 Oct, 24",
  },
  {
    title: "Unlimited Graphics Design Solutions",
    keyword: "unlimited graphic design services [390]",
    words: 1793,
    created: "---",
  },
  {
    title: "Top Amazon Payment Methods for Quick Access to Funds",
    keyword: "amazon payment methods [3600]",
    words: 2647,
    created: "---",
  },
  {
    title:
      "Backlinks 101: What are backlinks and why they're important [Free template]",
    keyword: "backlinks [8100]",
    words: 2261,
    created: "---",
  },
  {
    title: "7 Leading AI SEO Tools in 2024 (Ranked & Compared)",
    keyword: "ai seo software [880]",
    words: 1543,
    created: "---",
  },
  {
    title: "Unlimited Graphic Design Services You Can Rely On",
    keyword: "unlimited graphic design services [390]",
    words: 1974,
    created: "---",
  },
  {
    title: "Unlimited Graphic Design Services You Can Rely On",
    keyword: "unlimited graphic design services [390]",
    words: 1974,
    created: "---",
  },
  {
    title: "Unlimited Graphic Design Services You Can Rely On",
    keyword: "unlimited graphic design services [390]",
    words: 1974,
    created: "---",
  },
];

export default function ArticlesTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isloading, setIsLoading] = useState(true);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });
  const [selectedArticles, setSelectedArticles] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return {
          key,
          direction: prev.direction === "asc" ? "desc" : "asc",
        };
      }
      return { key, direction: "asc" };
    });
  };

  const sortedArticles = [...articles].sort((a, b) => {
    const { key, direction } = sortConfig;
    if (!key) return 0;

    let valA = a[key];
    let valB = b[key];

    if (key === "words") {
      valA = parseInt(valA);
      valB = parseInt(valB);
    }

    if (valA < valB) return direction === "asc" ? -1 : 1;
    if (valA > valB) return direction === "asc" ? 1 : -1;
    return 0;
  });

  const filteredArticles = sortedArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.keyword.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedArticles = filteredArticles.slice(0, itemsPerPage);

  const isAllSelected =
    paginatedArticles.length > 0 &&
    selectedArticles.length === paginatedArticles.length;

  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedArticles([]);
    } else {
      const allIndexes = paginatedArticles.map((_, idx) => idx);
      setSelectedArticles(allIndexes);
    }
  };

  const toggleSelectOne = (idx) => {
    setSelectedArticles((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const renderSortIcon = (columnKey) => {
    if (sortConfig.key !== columnKey)
      return <ChevronsUpDown className="ml-1 w-4 h-4" />;
    return sortConfig.direction === "asc" ? (
      <ChevronUp className="ml-1 w-4 h-4" />
    ) : (
      <ChevronDown className="ml-1 w-4 h-4" />
    );
  };

  return (
    <div>
      {isloading ? (
        <ArticleSkeleton />
      ) : (
        <div className="space-y-4">
          <Input
            placeholder="Search for Title & Keywords..."
            className="w-[250px] mx-auto border-1 border-gray-300 md:mt-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="hidden xl:block overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <Checkbox
                      checked={isAllSelected}
                      onCheckedChange={toggleSelectAll}
                    />
                  </TableHead>
                  <TableHead className="min-w-[200px]">Article Title</TableHead>
                  <TableHead
                    className="min-w-[180px] cursor-pointer"
                    onClick={() => handleSort("keyword")}
                  >
                    <div className="flex items-center">
                      Keyword [Traffic] {renderSortIcon("keyword")}
                    </div>
                  </TableHead>
                  <TableHead
                    className="cursor-pointer"
                    onClick={() => handleSort("words")}
                  >
                    <div className="flex items-center">
                      Words {renderSortIcon("words")}
                    </div>
                  </TableHead>
                  <TableHead>Created On</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Publish</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedArticles.map((article, idx) => (
                  <TableRow key={idx}>
                    <TableCell>
                      <Checkbox
                        checked={selectedArticles.includes(idx)}
                        onCheckedChange={() => toggleSelectOne(idx)}
                      />
                    </TableCell>
                    <TableCell className={`whitespace-normal max-w-[300px]`}>
                      {article.title}
                    </TableCell>
                    <TableCell>{article.keyword}</TableCell>
                    <TableCell>{article.words}</TableCell>
                    <TableCell>
                      {article.created !== "---"
                        ? article.created
                        : "Not published"}
                    </TableCell>
                    <TableCell>
                      <Button
                        size="sm"
                        variant="outline"
                        className={`border-green-400 text-green-400`}
                      >
                        View
                      </Button>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button size="icon" variant="ghost">
                            <ArrowUpRight className={`w-4 h-4`} />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <div className="p-2 text-sm">1. Option</div>
                          <div className="p-2 text-sm">2. Option</div>
                          <div className="p-2 text-sm">3. Option</div>
                          <div className="p-2 text-sm">4. Option</div>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Mobile Responsive */}
          <div className="xl:hidden flex justify-between items-center px-5">
            <div className="px-2">
              <Checkbox
                checked={isAllSelected}
                onCheckedChange={toggleSelectAll}
              />
              <span className="ml-2">Select all</span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="ghost" className={`w-fit px-2`}>
                  <span>Sort by</span>
                  <ChevronsUpDown className={`w-4 h-4`} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className={`mx-10`}>
                <div
                  className={`p-2 text-sm cursor-pointer hover:bg-gray-100 ${
                    sortConfig.key === "keyword" &&
                    sortConfig.direction === "asc"
                      ? "bg-gray-200 font-medium"
                      : ""
                  }`}
                  onClick={() =>
                    setSortConfig({ key: "keyword", direction: "asc" })
                  }
                >
                  Keyword: low to high
                </div>
                <div
                  className={`p-2 text-sm cursor-pointer hover:bg-gray-100 ${
                    sortConfig.key === "keyword" &&
                    sortConfig.direction === "desc"
                      ? "bg-gray-200 font-medium"
                      : ""
                  }`}
                  onClick={() =>
                    setSortConfig({ key: "keyword", direction: "desc" })
                  }
                >
                  Keyword: high to low
                </div>
                <div
                  className={`p-2 text-sm cursor-pointer hover:bg-gray-100 ${
                    sortConfig.key === "words" &&
                    sortConfig.direction === "asc"
                      ? "bg-gray-200 font-medium"
                      : ""
                  }`}
                  onClick={() =>
                    setSortConfig({ key: "words", direction: "asc" })
                  }
                >
                  Words: low to high
                </div>
                <div
                  className={`p-2 text-sm cursor-pointer hover:bg-gray-100 ${
                    sortConfig.key === "words" &&
                    sortConfig.direction === "desc"
                      ? "bg-gray-200 font-medium"
                      : ""
                  }`}
                  onClick={() =>
                    setSortConfig({ key: "words", direction: "desc" })
                  }
                >
                  Words: high to low
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {paginatedArticles.map((article, idx) => (
            <div key={idx} className="xl:hidden">
              <ArticleCard
                article={article}
                index={idx}
                isSelected={selectedArticles.includes(idx)}
                onToggleSelect={toggleSelectOne}
              />
            </div>
          ))}

          <div className="flex justify-between items-center text-sm text-muted-foreground px-5 md:px-0 mb-5">
            <span>Total {paginatedArticles.length} Article Titles</span>
            <div className="flex items-center gap-2">
              <span>Show</span>
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
                className="border rounded px-2 py-1 text-sm"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
              <span>entries per page</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
