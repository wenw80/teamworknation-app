import type { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* TODO: Public header/nav — Phase 4 */}
      <main className="flex-1">{children}</main>
      {/* TODO: Public footer — Phase 4 */}
    </div>
  );
}
