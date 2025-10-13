"use client";

import React, { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";

export default function NewRequest() {
  const role = "mentor";
  const [note, setNote] = useState("");
  const [fileName, setFileName] = useState("");
  const [msg, setMsg] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    // For demo we just show a message
    setMsg("Request sent to professor");
    setNote("");
    setFileName("");
  }

  return (
    <DashboardLayout role={role}>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Request Project</h2>
        {msg && <div className="mb-3 text-green-600">{msg}</div>}
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">
              Message to Professor
            </label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Attach File (optional)
            </label>
            <input
              type="file"
              onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
              className="mt-1"
            />
            {fileName && (
              <div className="text-sm text-gray-600 mt-1">
                Selected: {fileName}
              </div>
            )}
          </div>
          <div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded">
              Send Request
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
