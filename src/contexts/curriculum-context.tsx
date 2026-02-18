"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

type CurriculumItem = {
  challengeId: number;
  name: string;
  order: number;
};

type CurriculumContextType = {
  items: CurriculumItem[];
  addItem: (item: Omit<CurriculumItem, "order">) => void;
  removeItem: (challengeId: number) => void;
  reorderItems: (items: CurriculumItem[]) => void;
  clearCurriculum: () => void;
};

const STORAGE_KEY = "teamworknation_curriculum";

const CurriculumContext = createContext<CurriculumContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  reorderItems: () => {},
  clearCurriculum: () => {},
});

export function CurriculumProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CurriculumItem[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setItems(JSON.parse(stored));
      } catch {
        // ignore invalid stored data
      }
    }
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (item: Omit<CurriculumItem, "order">) => {
    setItems((prev) => {
      if (prev.some((i) => i.challengeId === item.challengeId)) return prev;
      return [...prev, { ...item, order: prev.length }];
    });
  };

  const removeItem = (challengeId: number) => {
    setItems((prev) =>
      prev
        .filter((i) => i.challengeId !== challengeId)
        .map((i, idx) => ({ ...i, order: idx }))
    );
  };

  const reorderItems = (reordered: CurriculumItem[]) => {
    setItems(reordered);
  };

  const clearCurriculum = () => {
    setItems([]);
  };

  return (
    <CurriculumContext.Provider
      value={{ items, addItem, removeItem, reorderItems, clearCurriculum }}
    >
      {children}
    </CurriculumContext.Provider>
  );
}

export const useCurriculum = () => useContext(CurriculumContext);
