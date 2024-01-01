import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useRouter } from "next/navigation";
import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime";

export default function useRedirectIfAuthenticated(
  href: string = "/",
  options?: NavigateOptions
) {
  const { push } = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) push(href, options);
    });
  }, [href, options, push]);
}
