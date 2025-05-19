import {
  Bell,
  ChevronDown,
  CreditCard,
  DollarSign,
  FileTextIcon,
  HelpCircle,
  Link,
  Link2,
  MessageSquare,
  Newspaper,
  Puzzle,
  User,
} from "lucide-react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import SidebarDropdown from "../SidebarDropdown";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

const items = [
  {
    title: "Articles",
    url: "/",
    icon: FileTextIcon,
    subMenu: [
      "Create Article",
      "Generated Articles",
      "Keyword Projects",
      "Al Keyword to Article",
      "Steal Competitor Keyword",
      "Import Keyword from GSC",
      "Manual Keyword to Article",
      "Bulk Keyword to Article",
      "Longtail Keyword to Article",
      "Article Settings",
    ],
  },
  { title: "Auto Blog", url: "/auto-blog", icon: Newspaper },
  { title: "Internal Links", url: "/internal-links", icon: Link2 },
  { title: "Free Backlinks", url: "/free-backlinks", icon: Link },
  { title: "Integrations", url: "/integrations", icon: Puzzle },
  { title: "Subscription", url: "/subscription", icon: CreditCard },
  { title: "Affiliate Program", url: "/affiliate-program", icon: DollarSign },
  { title: "Help Center", url: "/help-center", icon: HelpCircle },
  { title: "Updates", url: "/updates", icon: Bell },
  {
    title: "Live Chat Support",
    url: "/live-chat-support",
    icon: MessageSquare,
  },
];

export function AppSidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogo = () => {
    navigate("/", { replace: true });
  };

  return (
    <Sidebar>
      <SidebarContent className="overflow-auto no-scrollbar">
        <div>
          <SidebarGroup>
            <SidebarGroupLabel className="text-3xl font-bold text-black flex justify-center">
              <p onClick={handleLogo} className="cursor-pointer">abun</p>
            </SidebarGroupLabel>
            
            <SidebarDropdown />

            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) =>
                  item.subMenu ? (
                    <Collapsible key={item.title} className="group/collapsible">
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton>
                            <item.icon className="text-blue-700" />
                            <span>{item.title}</span>
                            <ChevronDown className="ml-auto size-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.subMenu.map((sub, idx) => {
                              const slug = sub
                                .toLowerCase()
                                .replace(/\s+/g, "-");
                              const path = `/articles${item.url}${slug}`;
                              const isActive = location.pathname === path;

                              return (
                                <div
                                  key={idx}
                                  className={`mb-2 ${
                                    isActive
                                      ? "text-blue-700 font-semibold"
                                      : ""
                                  } hover:text-blue-700 transition-colors duration-300 ease-in-out`}
                                >
                                  <SidebarMenuSubItem>
                                    <RouterLink to={path}>{sub}</RouterLink>
                                  </SidebarMenuSubItem>
                                </div>
                              );
                            })}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  ) : (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <RouterLink to={item.url}>
                          <item.icon className="text-blue-700" />
                          <span>{item.title}</span>
                        </RouterLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>

        <div className="p-2 list-none border-t border-gray-200">
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <RouterLink to="/profile">
                <User className="text-blue-700" />
                <span>Profile</span>
              </RouterLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
