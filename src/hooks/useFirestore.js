import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";
const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    // Unsubscribe from he function when we no longer use it
    return () => unsub();
  }, [collection]);
  return { docs };
};

export default useFirestore;
