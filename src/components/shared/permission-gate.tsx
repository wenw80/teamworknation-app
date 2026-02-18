"use client";

import type { ReactNode } from "react";
import { usePermission } from "@/contexts/permission-context";

type PermissionGateProps = {
  permission: string;
  children: ReactNode;
  fallback?: ReactNode;
};

export function PermissionGate({
  permission,
  children,
  fallback = null,
}: PermissionGateProps) {
  const { can, loading } = usePermission();

  if (loading) return null;
  if (!can(permission)) return <>{fallback}</>;

  return <>{children}</>;
}
