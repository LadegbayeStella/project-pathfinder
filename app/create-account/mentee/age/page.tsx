"use client";

import { Button } from "@mantine/core";
import classes from "@/components/home/signup.module.css";
import Link from "next/link";
import Hero from "@/components/home/hero";
import { useState } from "react";

export default function MenteeAge() {
  const [age, setAge] = useState<"below18" | "above18" | "">("");

  return (
    <section className="flex flex-col">
      <Hero text="Login" />
      <div className="mt-[100px] mb-[200px] bg-[#F9F9F9] py-[68px]">
        <article className="flex justify-between h-[888px] px-12 py-8 border border-[#E1E1E1] bg-[#F7F7FA] rounded-lg w-[690px] mx-auto flex-col">
          <div className="flex flex-col">
            <h3 className="text-[36px] text-black font-semibold leading-[46.8px]">
              Are you ...?
            </h3>
            <p className="text-base leading-7 text-[#6D6C80]">
              For a better experience tailored to your needs
            </p>
          </div>
          <div className="flex flex-col gap-[57px]">
            <Button
              onClick={() => setAge("below18")}
              style={{
                height: "56px",
                borderRadius: "30px",
                background: age === "below18" ? "#4B0082" : "#DAD4FF",
                width: "100%",
                color: age === "below18" ? "white" : "black",
              }}
              styles={{
                inner: {
                  textAlign: "center",
                },
              }}
            >
              <span className="font-bold text-[24px] leading-6">Below 18</span>
            </Button>
            <Button
              onClick={() => setAge("above18")}
              style={{
                height: "56px",
                borderRadius: "30px",
                background: age === "above18" ? "#4B0082" : "#DAD4FF",
                width: "100%",
                color: age === "above18" ? "white" : "black",
              }}
            >
              <span className="font-bold text-[24px] leading-6">Above 18</span>
            </Button>
          </div>
          <div className="flex flex-col gap-7">
            <Link
              className={
                !age
                  ? "pointer-events-none cursor-not-allowed w-full"
                  : "w-full"
              }
              href="/create-account/mentee/biodata"
            >
              <Button disabled={!age} classNames={classes}>
                Sign Up
              </Button>
            </Link>
            <p className="text-base self-center leading-7 text-[#6D6C80]">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#5751E1] text-base leading-7 underline"
              >
                Login
              </Link>
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
