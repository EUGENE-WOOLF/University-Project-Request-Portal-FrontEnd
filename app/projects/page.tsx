"use client";
import React, { useEffect, useState } from "react";
import { projectService } from "@/services/mockService";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);
  useEffect(() => setProjects(projectService.list()), []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4">Projects</h2>
      <div className="space-y-3">
        {projects.map((p) => (
          <div
            key={p.id}
            className="p-4 bg-white dark:bg-gray-800 border rounded flex justify-between items-center"
          >
            <div>
              <div className="font-medium">{p.title}</div>
              <div className="text-sm text-gray-500">{p.description}</div>
            </div>
            <div className="text-right">
              <div
                className={`px-2 py-1 rounded text-xs ${
                  p.status === "open"
                    ? "bg-green-100 text-green-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {p.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
