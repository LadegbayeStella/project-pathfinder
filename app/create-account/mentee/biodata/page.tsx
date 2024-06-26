import { Button, TextInput } from "@mantine/core";
import classes from "@/components/home/signup.module.css";
import Link from "next/link";
import Hero from "@/components/home/hero";

const styles = {
  root: {
    width: "100%",
  },
  input: {
    height: "50px",
    borderRadius: "8px",
    border: "0.93px solid #2C2B2B",
    width: "100%",
    paddingLeft: "14px",
  },
};

export default function CreateAccountMentee() {
  return (
    <section className="flex flex-col">
      <Hero text="Create Account" />
      <div className="mt-[100px] mb-[200px] bg-[#F9F9F9] py-[68px]">
        <article className="flex justify-between h-[888px] px-12 py-8 border border-[#E1E1E1] bg-[#F7F7FA] rounded-lg w-[690px] mx-auto flex-col">
          <div className="flex flex-col">
            <h3 className="text-[36px] text-black font-semibold leading-[46.8px]">
              Biodata
            </h3>
            <p className="text-base leading-7 text-[#6D6C80]">
              Hey there! We just need a few details from you to get started.
            </p>
          </div>
          <div className="flex flex-col gap-[65.8px]">
            <div className="flex flex-col gap-[30px]">
              <TextInput styles={styles} placeholder="Name" />
              <TextInput styles={styles} placeholder="Gender" />
              <TextInput styles={styles} placeholder="Institution" />
              <TextInput styles={styles} placeholder="Location" />
              <TextInput styles={styles} placeholder="Parent's Email" />
              <TextInput styles={styles} placeholder="Skills" />
            </div>
            <div className="flex flex-col gap-7">
              <Link className="w-full" href="/create-account/verification">
                <Button classNames={classes}>Sign Up</Button>
              </Link>
              <p className="text-base self-center leading-7 text-[#6D6C80]">
                Already have an account?
                <Link
                  href="/login"
                  className="text-[#5751E1] text-base leading-7 underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
