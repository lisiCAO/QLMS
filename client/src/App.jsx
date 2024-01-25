import React from "react";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import "./App.css";

function App() {
  const [user, setUser] = useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOutClick(Event) {
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }

  useEffect(() => {
    fetch("/api/test");
    /*global google*/
    google.accounts.id.initialize({
      client_id:
        "704822319420-r62l9je7qhq25uu1vsq3hb49vo0g1cmk.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });

    google.accounts.id.prompt();

      }, []);
  // if we have no user: sign in button
  // if we have a user: sign out button

  return (
    <div>
      <div id='signInDiv'></div>
      { Object.keys(user).length !== 0 &&
      <button onClick={(Event) => handleSignOutClick(Event)}>Sign Out</button>
      }
      {user && (
        <div>
          <img src={user.picture} />
          <h3>{user.name}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
