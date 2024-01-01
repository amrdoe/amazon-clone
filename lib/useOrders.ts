import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./firebase";
import { Item } from "./StateContext";

export interface Order {
  id: string;
  data: {
    created: number;
    amount: number;
    cart: Item[];
  };
}

export default function useOrders(uid: string | undefined) {
  console.log("UID >>> ", uid);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (!uid) return;
    const ordersRef = collection(db, "users", uid, "orders");
    const q = query(ordersRef, orderBy("created", "desc"));

    return onSnapshot(q, (snapshot) => {
      console.log("SNAPSHOT >>> ", snapshot);
      setOrders(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })) as Order[]
      );
    });
  }, [uid]);

  return orders;
}
