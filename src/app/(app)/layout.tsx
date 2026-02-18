import type { ReactNode } from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { PermissionProvider } from "@/contexts/permission-context";
import { CurriculumProvider } from "@/contexts/curriculum-context";
import { AppSidebar } from "@/components/layout/app-sidebar";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <PermissionProvider>
      <CurriculumProvider>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <main className="flex-1 p-6">{children}</main>
          </SidebarInset>
        </SidebarProvider>
      </CurriculumProvider>
    </PermissionProvider>
  );
}
