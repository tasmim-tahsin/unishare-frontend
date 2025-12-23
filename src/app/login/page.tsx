"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#FCF8F1] flex items-center justify-center px-4 z-0">
      
      <div className="w-full max-w-md rounded-2xl bg-black/40 backdrop-blur-xl shadow-xl p-8">
        
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          WELCOME BACK
        </h1>

        <form className="space-y-4 text-black">
          
          <input
            type="email"
            placeholder="Email address"
            className="input input-bordered w-full bg-white/90"
          />

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full bg-white/90"
          />

          <div className="flex justify-between items-center text-sm text-gray-300">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="checkbox checkbox-sm" />
              Remember me
            </label>

            <Link href="/forgot-password" className="underline hover:text-white">
              Forgot password?
            </Link>
          </div>

          <button className="btn btn-primary w-full mt-4">
            Log in
          </button>
        </form>

        <p className="text-sm text-gray-300 text-center mt-6">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-white ">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
