import React, { useContext } from "react";
import songContext from "../context/SongContext";
import Section from "../components/Section";

function Home() {
    const context = useContext(songContext);
  const { songs } = context;
  return (
    <div className="overflow-y-auto h-100 p-4">
      <div className="grid gap-y-8">
        <Section
          title="Recently played"
          items={songs}
          reverse={true}
        />
      </div>
    </div>
  )
}

export default Home