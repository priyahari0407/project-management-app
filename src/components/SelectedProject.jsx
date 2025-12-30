import React from "react";
import { useNavigate } from "react-router-dom";
export default function SelectedProject({ project, onDelete }) {
  const navigate = useNavigate();

  // Add null check
  if (!project) {
    return <div className="p-4 text-stone-600">Project not found</div>;
  }
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  function handleDelete() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project? This action cannot be undone."
    );

    if (confirmed) {
      onDelete(project.id);
      navigate("/dashboard");
      // Dashboard will automatically show "No project selected" view
    }
  }
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
        <p className="my-4 text-stone-400">Due Date : {formattedDate}</p>
        <p className="text-stone-900 whitespace-prew-wrap">
          {project.description}
        </p>
      </header>
      TASKS
    </div>
  );
}
