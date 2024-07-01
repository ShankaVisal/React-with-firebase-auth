import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";

function Private() {
  const handleSignOut = () => {
    signOut(auth)
      .then(() => console.log("Signed out"))
      .catch((error) => console.log(error));
  };

  return (
    <section>
      <h2>Private Page</h2>
      <button onClick={handleSignOut}>Sign Out</button>
    </section>
  );
}

export default Private;
