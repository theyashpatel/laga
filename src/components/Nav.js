import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
export default function Nav({ pl }) {
  function libraryToggle() {
    pl.setLibraryStatus((pstate) => !pstate);
    document.activeElement.blur();
  }
  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={libraryToggle}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
}
