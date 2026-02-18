"use client";

import {
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  Library,
  ListVideo,
  Sparkles,
  Calendar,
  ClipboardList,
  Settings,
  Trophy,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { usePermission } from "@/contexts/permission-context";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavUser } from "@/components/layout/nav-user";

const navItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
    permission: "view_dashboard",
  },
  {
    title: "Challenges",
    url: "/challenges",
    icon: Trophy,
    permission: "view_challenge_library",
  },
  {
    title: "Lesson Plans",
    url: "/lesson-plans",
    icon: BookOpen,
    permission: "view_lesson_plans",
  },
  {
    title: "Training Videos",
    url: "/training-videos",
    icon: ListVideo,
    permission: "view_training_videos",
  },
  {
    title: "Programs",
    url: "/programs",
    icon: GraduationCap,
    permission: "view_all_programs",
  },
  {
    title: "Events",
    url: "/events",
    icon: Calendar,
    permission: "view_events",
  },
  {
    title: "Curriculum",
    url: "/curriculum",
    icon: ClipboardList,
    permission: "curriculum_management",
  },
  {
    title: "AI Challenges",
    url: "/aichallenges",
    icon: Sparkles,
    permission: "view_ai_challenges",
  },
];

export function AppSidebar() {
  const { can, loading } = usePermission();
  const pathname = usePathname();

  const visibleItems = loading
    ? []
    : navItems.filter((item) => can(item.permission));

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2 px-2 py-4">
          <Library className="h-6 w-6" />
          <span className="text-lg font-semibold">TeamworkNation</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {visibleItems.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname.startsWith(item.url)}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/account"}
                >
                  <Link href="/account">
                    <Settings />
                    <span>Account Settings</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
