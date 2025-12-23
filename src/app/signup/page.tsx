"use client";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#FCF8F1] flex items-center justify-center px-4">
      
      <div className="w-full max-w-md rounded-2xl bg-black/40 backdrop-blur-xl shadow-xl p-8">
        
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          WELCOME!
        </h1>

        <form className="space-y-4 text-black">
          
          <input
            type="text"
            placeholder="Full name"
            className="input input-bordered w-full bg-white/90"
          />

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

          <input
            type="password"
            placeholder="Confirm password"
            className="input input-bordered w-full bg-white/90"
          />

          <button className="btn btn-primary w-full mt-4">
            Sign up
          </button>
        </form>

        <p className="text-sm text-gray-300 text-center mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-white underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
