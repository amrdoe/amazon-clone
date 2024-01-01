"use client";

import Button from "@/components/Button";
import { auth } from "@/lib/firebase";
import useRedirectIfAuthenticated from "@/lib/useRedirectIfAuthenticated";
import {
  AuthError,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  useRedirectIfAuthenticated();

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      console.log(cred);
      if (cred) router.push("/");
    } catch (error) {
      console.error(error);
      alert((error as AuthError).message);
    }
  };

  const register = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      console.log(cred);
      if (cred) router.push("/");
    } catch (error) {
      console.error(error);
      alert((error as AuthError).message);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center">
      <Link href="/">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
          width={1024}
          height={309}
          className="my-[20px] object-contain w-[100px] mx-auto"
        />
      </Link>

      <div className="w-[300px] h-fit flex flex-col border border-[lightgray] p-[20px]">
        <h1 className="font-medium mb-[20px]">Sign-in</h1>

        <form>
          <h5 className="mb-[5px]">E-mail</h5>
          <input
            type="email"
            className="h-[30px] mb-[10px] bg-white w-[98%]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5 className="mb-[5px]">Password</h5>
          <input
            type="password"
            className="h-[30px] mb-[10px] bg-white w-[98%]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button className="rounded-[2px] w-full h-[30px]" onClick={signIn}>
            Sign In
          </Button>
        </form>

        <p className="mt-[15px] text-[12px]">
          By signing-in you agree to AMAZON FAKE CLONE&apos;s Conditions of Use
          &amp; Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button
          className="rounded-[2px] w-full h-[30px] border mt-[10px] border-[darkgrey]"
          onClick={register}
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}
