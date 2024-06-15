"use client";
import { ReactNode, useEffect, useState } from "react";
import { RandomUserContext } from "../random-user";

export function RandomUserProvider({ children }: { children: ReactNode }) {
  const [testimonies, setTestimonies] = useState<any>([]);
  const [teams, setTeams] = useState<any>([]);

  // console.log(modalActive);
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      let testimonies = JSON.parse(localStorage.getItem("testimonies")!);
      let teams = JSON.parse(localStorage.getItem("teams")!);
      // console.log(testimonies);

      if (!testimonies || !teams) {
        const result = async () => {
          const response = await fetch("https://randomuser.me/api/?results=30", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          return response.json();
        };
        result().then((e) => {
          // console.log(e.results);
          const testimonials = [
            "I recently purchased a beautiful handcrafted coffee table from Nyoo Kayu Woodworking. The quality is exceptional, and it adds a rustic charm to my living room. Highly recommended!",
            "Nyoo Kayu Woodworking created a custom bookshelf for my home office. The craftsmanship is outstanding, and they perfectly matched the wood to my existing furniture. Great service!",
            "I had an old rocking chair that was falling apart, and Nyoo Kayu Woodworking repaired it to perfection. It looks and feels brand new again. Amazing repair service!",
            "The dining table we ordered from Nyoo Kayu Woodworking is stunning. The finish is flawless, and it's become the centerpiece of our dining room. Excellent quality and craftsmanship.",
            "I requested a custom-made wooden bed frame, and Nyoo Kayu Woodworking delivered beyond my expectations. The attention to detail and the quality of wood used are top-notch. Fantastic work!",
            "Our antique dresser needed some serious restoration, and Nyoo Kayu Woodworking did an incredible job. It looks better than it did originally. Superb restoration service!",
            "Nyoo Kayu Woodworking's ready-to-use bookshelf is perfect for our study. It's sturdy, well-finished, and arrived in perfect condition. Couldn't be happier with the purchase.",
            "We ordered a custom dining set, and Nyoo Kayu Woodworking crafted it beautifully. The set is elegant and exactly what we envisioned. Outstanding custom woodworking!",
            "Nyoo Kayu Woodworking repaired our old wooden wardrobe, which had a broken door and loose hinges. They restored it to its former glory. Exceptional repair service!",
            "I bought a finished wooden bench from Nyoo Kayu Woodworking for our garden. It's not only aesthetically pleasing but also very durable. A great addition to our outdoor space.",
          ];
          setTestimonies(
            [...e.results.slice(20)].map((e: any, i: number) => {
              e.testimonies = testimonials[i];
              return e;
            })
          );
          setTeams([...e.results.slice(10, 15)]);
        });
      }
    }
  }, []);
  console.log(testimonies);
  // console.log(teams);

  return (
    <RandomUserContext.Provider
      value={{
        testimonies,
        setTestimonies,
        teams,
        setTeams,
      }}>
      {children}
    </RandomUserContext.Provider>
  );
}
