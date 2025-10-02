"use client";

import Link from "next/link";
import { ExclamationTriangleIcon, KeyIcon } from "@heroicons/react/24/outline";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-gray-900 rounded-lg p-8 border-2 border-yellow-500/50">
        <div className="flex items-center gap-4 mb-6">
          <ExclamationTriangleIcon className="w-12 h-12 text-yellow-500" />
          <h1 className="text-3xl font-bold text-white">API Key Required</h1>
        </div>

        <div className="space-y-4 text-gray-300">
          <p className="text-lg">
            To use this app, you need to add your free RAWG API key.
          </p>

          <div className="bg-gray-800 rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              <KeyIcon className="w-6 h-6" />
              Quick Setup (2 minutes)
            </h2>

            <ol className="space-y-3 list-decimal list-inside">
              <li>
                Visit{" "}
                <a
                  href="https://rawg.io/apidocs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  https://rawg.io/apidocs
                </a>
              </li>
              <li>Click "Get API Key" and create a free account</li>
              <li>Copy your API key from the dashboard</li>
              <li>
                Open{" "}
                <code className="bg-gray-700 px-2 py-1 rounded text-sm">
                  .env.local
                </code>{" "}
                in your project root
              </li>
              <li>
                Replace{" "}
                <code className="bg-gray-700 px-2 py-1 rounded text-sm">
                  your_api_key_here
                </code>{" "}
                with your actual key
              </li>
              <li>Save the file and refresh this page</li>
            </ol>
          </div>

          <div className="bg-blue-900/30 border border-blue-500/50 rounded-lg p-4">
            <h3 className="font-semibold text-blue-400 mb-2">
              💡 What you'll add:
            </h3>
            <pre className="bg-gray-950 p-3 rounded text-sm overflow-x-auto">
              <code className="text-green-400">NEXT_PUBLIC_RAWG_API_KEY</code>
              <code className="text-white">=</code>
              <code className="text-yellow-400">your_actual_api_key_here</code>
            </pre>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-4 text-sm">
            <p className="font-semibold mb-2">
              ✅ The RAWG API is completely free!
            </p>
            <ul className="space-y-1 text-gray-400">
              <li>• 20,000 requests per month</li>
              <li>• No credit card required</li>
              <li>• Access to 850,000+ games</li>
            </ul>
          </div>

          <div className="pt-4">
            <Link
              href="https://rawg.io/apidocs"
              target="_blank"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              Get Your Free API Key →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
