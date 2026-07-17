import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">
            Browse & Sweep
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">
              Storage: <span className="font-medium text-gray-700">-- GB</span>
            </span>
            <button className="text-sm text-gray-600 hover:text-gray-800">
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-1">
              Total Files
            </h3>
            <p className="text-3xl font-bold text-gray-800">--</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-1">
              Duplicates Found
            </h3>
            <p className="text-3xl font-bold text-orange-600">--</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-1">
              Large Files
            </h3>
            <p className="text-3xl font-bold text-blue-600">--</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* File Browser Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="border-b border-gray-200 px-6 py-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  File Browser
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Browse your Drive files and folders
                </p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-center h-64 text-gray-400 border-2 border-dashed border-gray-200 rounded-lg">
                  <div className="text-center">
                    <svg
                      className="w-12 h-12 mx-auto mb-3 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>
                    <p>Connect your Google Drive to browse files</p>
                    <button className="mt-3 text-sm text-blue-600 hover:text-blue-700 font-medium">
                      Sign in to get started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tools Section */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="border-b border-gray-200 px-6 py-4">
                <h2 className="text-lg font-semibold text-gray-800">Tools</h2>
              </div>
              <div className="p-6 space-y-4">
                {/* Duplicate Scanner */}
                <button className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-orange-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">
                        Duplicate Scanner
                      </h3>
                      <p className="text-sm text-gray-500">
                        Find and remove duplicate files
                      </p>
                    </div>
                  </div>
                </button>

                {/* Large File Finder */}
                <button className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">
                        Large File Finder
                      </h3>
                      <p className="text-sm text-gray-500">
                        Find files over a configurable size
                      </p>
                    </div>
                  </div>
                </button>

                {/* Cleanup Actions — Paid feature */}
                <button className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all opacity-75">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">
                        Cleanup Actions ✨
                      </h3>
                      <p className="text-sm text-gray-500">
                        Delete or trash selected files
                      </p>
                    </div>
                  </div>
                  <span className="mt-2 inline-block text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                    Premium
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
