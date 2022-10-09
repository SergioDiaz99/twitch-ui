import React, {useEffect, useState} from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Image from "next/image";

const Account = () => {
  const { data: session } = useSession();
  const [sessionImage, setSessionImage] = useState<string | any>()

  useEffect ( () => {
    setSessionImage(session?.user?.image)
  },[session])

  if (session) {
    return (
      <div className="pt-[100px] flex flex-col max-w-[400px] w-full mx-auto p-4">
        <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold ">Welcome {session.user?.name}</h2>
        <p className="py-4">Signed in as {session.user?.email}</p>
        {sessionImage && (
          <div className="pb-4 ">
            <Image className="rounded-full" src={sessionImage} alt="github profile image" width={100} height={100}/>
          </div>
        )}
        </div>
        <button
          className="flex items-center justify-center p-3 bg-gray-600 border-gray-600 my-2"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    );
  }
  return (
    <div className="pt-[100px] flex flex-col max-w-[400px] w-full mx-auto p-4">
      <h2 className="text-3xl font-bold ">Login</h2>
      <p className="py-4">Choose the account you want to sign in with.</p>
      <button
        onClick={() => signIn()}
        className="flex items-center justify-center p-3 bg-gray-600 border-gray-600 my-2"
      >
        <FaGithub className="mr-2" /> Sign in With{" "}
        <span className="font-bold pl-1">Github</span>
      </button>
      <button
        onClick={() => signIn()}
        className="flex items-center justify-center p-3 bg-twitchColor border-gray-600 my-2"
      >
        <FaGoogle className="mr-2" /> Sign in With{" "}
        <span className="font-bold pl-1">Google</span>
      </button>
    </div>
  );
};

export default Account;
