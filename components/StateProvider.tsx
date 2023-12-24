"use client";

import StateContext, { initialState, reducer } from "@/lib/StateContext";
import { useReducer } from "react";

export default function StateProvider ({ children }: { children: React.ReactNode }) {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
}
