"use client";

import { ArrowLeft, House, ShieldExclamation } from "@gravity-ui/icons";
import Link from "next/link";

export default function ForbiddenPage() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-md w-full">
                <div className="rounded-3xl border border-slate-200 p-8 text-center">
                    {/* Icon */}
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full">
                        <ShieldExclamation className="h-10 w-10 text-red-600" />
                    </div>

                    {/* Heading */}
                    <h1 className="mt-6 text-3xl font-bold text-slate-900">
                        Access Forbidden
                    </h1>

                    <p className="mt-3 text-slate-600 leading-relaxed">
                        Hold on there! You do not have the required permissions to access this page, if you think this is a mistake, please contact your administration.
                    </p>

                    {/* Error Badge */}
                    <div className="mt-6 inline-flex items-center rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-red-700 border border-red-200">
                        Error 403 • Forbidden
                    </div>

                    {/* Actions */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                        <button
                            onClick={() => window.history.back()}
                            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-3 font-medium text-slate-700 hover:bg-slate-50 transition"
                        >
                            <ArrowLeft size={18} />
                            Go Back
                        </button>

                        <Link
                            href="/"
                            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 font-medium text-white hover:bg-indigo-700 transition"
                        >
                            <House size={18} />
                            Home
                        </Link>
                    </div>
                </div>

                {/* Footer */}
                <p className="mt-6 text-center text-sm text-slate-500">
                    Need help?{" "}
                    <Link
                        href="/contact"
                        className="font-medium text-indigo-600 hover:text-indigo-700"
                    >
                        Contact Support
                    </Link>
                </p>
            </div>
        </div>
    );
}