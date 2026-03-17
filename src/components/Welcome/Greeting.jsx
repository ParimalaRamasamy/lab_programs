import { useState, useEffect } from "react";

export default function Greeting() {
  const [greeting, setGreeting] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hour = now.getHours();
      const mins = now.getMinutes().toString().padStart(2, "0");
      const secs = now.getSeconds().toString().padStart(2, "0");

      if (hour < 12) {
        setGreeting("Good Morning");
      } else if (hour >= 12 && hour < 17) {
        setGreeting("Good Afternoon");
      } else {
        setGreeting("Good Night");
      }

      setTime(`${hour.toString().padStart(2, "0")}:${mins}:${secs}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
      <p>{time}</p>
    </div>
  );
}
