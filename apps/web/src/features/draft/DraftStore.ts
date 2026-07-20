// STUB: listed in Commit 5 tree but no implementation given in the Notion doc.
// Built from the wireframe flow in the "Files" page: roll dice -> reveal club+season ->
// show full squad -> pick ONE player -> assign to empty slot -> repeat until 11+5 filled.
import { create } from "zustand";

interface DraftState {
  starters: number;
  reserves: number;
  formationId: string;
  setFormation: (id: string) => void;
  addStarter: () => void;
  addReserve: () => void;
  reset: () => void;
}

export const useDraftStore = create<DraftState>((set) => ({
  starters: 0,
  reserves: 0,
  formationId: "442",
  setFormation: (id) => set({ formationId: id }),
  addStarter: () => set((s) => ({ starters: Math.min(11, s.starters + 1) })),
  addReserve: () => set((s) => ({ reserves: Math.min(5, s.reserves + 1) })),
  reset: () => set({ starters: 0, reserves: 0 })
}));
