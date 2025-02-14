import React from "react";

function NewThread() {
  return (
    <div className="absolute top-7 w-64 lg:w-full max-w-lg mx-auto p-6 bg-indigo-200 rounded-lg border border-black">
      <p className="text-lg font-semibold text-gray-800 mb-4">
        Hey! Let's find your next amazing opportunity! I'll:
      </p>
      <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-4">
        <li>Use AI to discover jobs matching your profile</li>
        <li>Help you search (try "remote marketing director paying $130k+")</li>
        <li>Share why each role could be perfect for you</li>
      </ul>
      <p className="text-gray-800">
        What kind of position excites you? Type it or say "any" to explore! 💫
      </p>
    </div>
  );
}

export default NewThread;