import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";
import Link from "next/link";
import { CircleCheckFill } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import { createSubscription } from "@/lib/actions/subscriptions";

export default async function Success({ searchParams }) {
    const { session_id } = await searchParams;

    if (!session_id) {
        throw new Error(
            "Please provide a valid session_id (`cs_test_...`)"
        );
    }

    const {
        status,
        customer_details: { email: customerEmail },
        metadata
    } = await stripe.checkout.sessions.retrieve(
        session_id,
        {
            expand: ["line_items", "payment_intent"],
        }
    );

    if (status === "open") {
        redirect("/");
    }

    const subsInfo = {
        email: customerEmail,
        planId: metadata.planId
    }

    // update the user table about the plan

    const result = await createSubscription(subsInfo)

    // const customerEmail =
    //     session.customer_details?.email || "No email found";

    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-2xl">
                <div className="relative overflow-hidden bg-linear-to-r from-indigo-600 to-violet-500 rounded-3xl border border-slate-500 p-5">

                    {/* Decorative Glow */}
                    <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-green-100 blur-3xl opacity-60" />
                    <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-blue-100 blur-3xl opacity-60" />

                    <div className="relative z-10 px-8 py-14 md:px-14 text-center">
                        {/* Success Icon */}
                        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
                            <CircleCheckFill className="h-12 w-12 text-green-600" />
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl font-bold">
                            Payment Successful!
                        </h1>

                        <p className="mt-4 text-lg ">
                            Thank you for your purchase.
                        </p>

                        {/* Email Card */}
                        <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-200 p-5">
                            <p className="text-sm ">
                                Confirmation email sent to
                            </p>

                            <p className="mt-2 font-semibold">
                                {customerEmail}
                            </p>
                        </div>

                        {/* Status */}
                        <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-4 py-2">
                            <span className="h-2 w-2 rounded-full bg-green-500" />
                            <span className="text-sm font-medium text-green-700">
                                Subscription Activated
                            </span>
                        </div>

                        {/* Help Text */}
                        <p className="mt-8 text-slate-500 max-w-lg mx-auto">
                            Your account has been upgraded successfully. If you need
                            any assistance, feel free to contact our support team.
                        </p>

                        <a
                            href="mailto:support@hireloop.com"
                            className="mt-2 inline-block text-blue-600 hover:text-blue-700 font-medium"
                        >
                            support@hireloop.com
                        </a>

                        {/* Actions */}
                        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="primary">
                                <Link
                                    href="/dashboard"
                                    className="rounded-xl px-8 py-3 font-semibold text-white shadow-blue-600/25 transition-all hover:bg-blue-700 hover:-translate-y-0.5"
                                >
                                    Go to Dashboard
                                </Link>
                            </Button>
                            <Button variant="primary">
                                <Link
                                    href="/"
                                    className="rounded-xl px-8 py-3 font-semibold  transition hover:bg-slate-50"
                                >
                                    Back Home
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}