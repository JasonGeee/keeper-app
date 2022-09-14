import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

import notes from "../notes";

export default function App() {
  return (
    <div>
      <Header />
      {notes.map((noteEntry) => (
        <Note
          key={noteEntry.key}
          title={noteEntry.title}
          description={noteEntry.content}
        />
      ))}
      <Footer />
    </div>
  );
}
