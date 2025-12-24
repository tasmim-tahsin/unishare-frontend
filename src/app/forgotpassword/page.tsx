import Link from "next/link";

export default function ForgotPasswordPage() {
    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center px-4 z-0">
            <div className="w-full max-w-md rounded-2xl bg-black/40 backdrop-blur-xl shadow-xl p-8">
                <h1 className="text-3xl font-bold text-white text-center mb-6">
                    RESET YOUR PASSWORD
                </h1>
                <form className="space-y-4 text-black">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="input input-bordered w-full bg-white/90"
                    />
                    <button className="btn btn-primary w-full mt-4">
                        Send Reset Link
                    </button>
                </form>
                <p className="text-sm text-gray-300 text-center mt-6">
                    Remembered your password?{" "}
                    <Link href="/login" className="text-white ">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
}