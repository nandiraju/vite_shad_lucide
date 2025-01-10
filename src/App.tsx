"use client";
import { useEffect } from "react";
import eventBus from "./utils/EventBus";
import { Button } from "./components/ui/button";
import { MailOpen } from "lucide-react";

export default function App() {
  useEffect(() => {
    eventBus.on("customEvent", listener);
    return () => {
      eventBus.removeListener("customEvent", listener);
    };
  }, []);

  const triggerEvent = () => {
    eventBus.emit("customEvent", "Osho");
    console.log("Firing...");
  };

  const listener = (msg: any) => {
    console.log(msg);
  };

  return (
    <div className="bg-slate-200 m-20 text-center">
      <h1>This is a flux pattern</h1>
      <div className="m-10"></div>
      <Button onClick={triggerEvent}>
        {" "}
        <MailOpen /> Trigger Event
      </Button>
      <div className="m-10">&nbsp;</div>
    </div>
  );
}
