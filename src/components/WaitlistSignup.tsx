/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Mail, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

const WaitlistSignup = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/waitlist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to join waitlist");
            }

            setStatus("success");
            setEmail("");
            toast.success("Successfully joined the waitlist!");
        } catch (error: any) {
            setStatus("error");
            toast.error(
                error.message || "Something went wrong. Please try again."
            );
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-9">
                <span className="text-white">JOIN THE</span>{" "}
                <span className="text-green-500">WAITLIST</span>{" "}
                <span className="text-white">NOW!</span>
            </h1>
            <div className="w-full">
                <form onSubmit={handleSubmit} className="relative w-full">
                    <div className="relative flex items-center">
                        <Mail
                            className="absolute left-3 text-gray-400"
                            size={20}
                        />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full pl-10 pr-32 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all bg-white"
                            required
                        />
                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="absolute right-2 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                        >
                            {status === "loading" ? (
                                <Loader2 className="animate-spin" size={18} />
                            ) : (
                                "Join"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default WaitlistSignup;
