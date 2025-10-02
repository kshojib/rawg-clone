"use client";

import Link from "next/link";
import { ExclamationTriangleIcon, KeyIcon } from "@heroicons/react/24/outline";

export default function ApiKeyMissing() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border-2 border-yellow-500/50 shadow-2xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-yellow-500/20 rounded-full">
            <ExclamationTriangleIcon className="w-12 h-12 text-yellow-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">API Key Required</h1>
            <p className="text-gray-400">
              Almost there! Just one quick step...
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-800/50 rounded-lg p-6 space-y-4">
            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
              <KeyIcon className="w-6 h-6 text-purple-400" />
              Get Your Free API Key (2 minutes)
            </h2>

            <ol className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </span>
                <span>
                  Visit{" "}
                  <a
                    href="https://rawg.io/apidocs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline font-semibold"
                  >
                    rawg.io/apidocs
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </span>
                <span>
                  Click "Get API Key" and create a free account (30 seconds)
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </span>
                <span>Copy your API key from the dashboard</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </span>
                <span>
                  Open{" "}
                  <code className="bg-gray-900 px-2 py-1 rounded text-sm text-purple-300">
                    .env.local
                  </code>{" "}
                  in your project root
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-sm font-bold">
                  5
                </span>
                <span>Replace the placeholder with your actual key</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-sm font-bold">
                  6
                </span>
                <span>Save and refresh this page ✨</span>
              </li>
            </ol>
          </div>

          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-5">
            <h3 className="font-semibold text-blue-300 mb-3 flex items-center gap-2">
              <span className="text-xl">📝</span>
              What to add to .env.local:
            </h3>
            <pre className="bg-gray-950 p-4 rounded-lg overflow-x-auto border border-gray-800">
              <code>
                <span className="text-green-400">NEXT_PUBLIC_RAWG_API_KEY</span>
                <span className="text-white">=</span>
                <span className="text-yellow-400">paste_your_key_here</span>
              </code>
            </pre>
            <p className="text-sm text-gray-400 mt-2">
              💡 No quotes needed - just paste the key directly after the = sign
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-green-400 mb-2">
                ✅ It's Free!
              </h4>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• 20,000 requests/month</li>
                <li>• No credit card needed</li>
                <li>• 850,000+ games</li>
              </ul>
            </div>

            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
              <h4 className="font-semibold text-purple-400 mb-2">
                ⚡ Quick Docs
              </h4>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• See QUICKSTART.md</li>
                <li>• Check CHECKLIST.md</li>
                <li>• Read README.md</li>
              </ul>
            </div>
          </div>

          <div className="pt-4 flex gap-4">
            <a
              href="https://rawg.io/apidocs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition shadow-lg hover:shadow-xl"
            >
              Get API Key →
            </a>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition"
            >
              Refresh Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
