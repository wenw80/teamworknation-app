"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { createClient } from "@/lib/supabase/client";
import {
  getUserPermissions,
  hasPermission,
  type Role,
} from "@/lib/permissions";

type PermissionContextType = {
  role: Role | null;
  permissions: string[];
  can: (permission: string) => boolean;
  loading: boolean;
};

const PermissionContext = createContext<PermissionContextType>({
  role: null,
  permissions: [],
  can: () => false,
  loading: true,
});

export function PermissionProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      const userRole = (user?.app_metadata?.role as Role) ?? null;
      setRole(userRole);
      setLoading(false);
    });
  }, []);

  const permissions = role ? getUserPermissions(role) : [];
  const can = (permission: string) =>
    role ? hasPermission(role, permission) : false;

  return (
    <PermissionContext.Provider value={{ role, permissions, can, loading }}>
      {children}
    </PermissionContext.Provider>
  );
}

export const usePermission = () => useContext(PermissionContext);
