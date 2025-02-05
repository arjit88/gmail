import React, { useEffect, useState } from "react";
import Message from "./Message";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setEmails } from "../redux/appSlice";

const Messages = () => {
  const { emails, searchText, user } = useSelector((store) => store.appSlice);
  const [tempEmails, setTempEmails] = useState(emails);
  const dispatch = useDispatch();

  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapShot) => {
      const allEmails = snapShot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      // Filter emails by current user's email
      const userEmails = allEmails.filter(
        (email) => email.userEmail === user.email
      );

      dispatch(setEmails(userEmails));
    });

    return () => {
      unsubscribe();
    };
  }, [user.email]); // Add user.email as a dependency

  useEffect(() => {
    const filteredEmail = emails?.filter((email) => {
      return (
        email?.subject?.toLowerCase().includes(searchText.toLowerCase()) ||
        email?.to?.toLowerCase().includes(searchText.toLowerCase()) ||
        email?.message?.toLowerCase().includes(searchText.toLowerCase())
      );
    });

    setTempEmails(filteredEmail);
  }, [searchText, emails]);

  return (
    <div>
      {tempEmails &&
        tempEmails?.map((email, index) => (
          <Message key={index} email={email} />
        ))}
    </div>
  );
};

export default Messages;
