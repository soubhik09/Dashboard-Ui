import React from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { ArrowUpRight } from "lucide-react";

function ArticleCard({ 
  article, 
  index, 
  isSelected, 
  onToggleSelect 
}) {
  const { title, keyword, words, created } = article;

  return (
    <div className="bg-white shadow-md rounded-xl mx-4 p-4 mb-4 border">
      <div className="flex justify-between items-center mb-2">
        <Checkbox
          checked={isSelected}
          onCheckedChange={() => onToggleSelect(index)}
        />
        <Button size="sm" variant="outline" className="text-green-500 border-green-400">
          View
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon" variant="ghost">
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <div className="p-2 text-sm">1. Option</div>
            <div className="p-2 text-sm">2. Option</div>
            <div className="p-2 text-sm">3. Option</div>
            <div className="p-2 text-sm">4. Option</div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="text-base font-semibold break-words">{title}</div>
      <div className="text-sm text-muted-foreground mt-1">Keyword: {keyword}</div>
      <div className="text-sm text-muted-foreground">Words: {words}</div>
      <div className="text-sm text-muted-foreground">
        Created: {created !== "---" ? created : "Not published"}
      </div>
    </div>
  );
}

export default ArticleCard;
