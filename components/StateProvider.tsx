"use client";

import StateContext, {
  initialState,
  reducer,
  useStateValue,
} from "@/lib/StateContext";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useReducer } from "react";

export default function StateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      <AuthProvider>{children}</AuthProvider>
    </StateContext.Provider>
  );
}

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [, dispatch] = useStateValue();

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => dispatch({ type: "SET_USER", user })),
    [dispatch]
  );

  return <>{children}</>;
};
