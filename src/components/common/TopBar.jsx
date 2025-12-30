import React from "react";
import { useNavigate } from "react-router-dom";
import userIcon from "../../assets/user.png";

export default function TopBar({ user, onLogout }) {
  const navigate = useNavigate();

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-stone-500">
              DASHBOARD
            </span>
            <h1 className="text-lg font-bold text-black">Project Management</h1>
          </div>

          <div className="flex items-center gap-3">
            <img
              src={userIcon}
              alt="User Icon"
              className="w-10 h-10 rounded-full object-cover"
            />

            {user ? (
              <>
                <span className="hidden sm:inline-block text-sm text-stone-700">
                  Hello, {user.name}
                </span>
                <button
                  onClick={() => {
                    onLogout?.();
                    navigate("/login", { replace: true });
                  }}
                  className="ml-2 px-3 py-1 text-sm font-medium bg-red-50 text-red-700 rounded hover:bg-red-100"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="ml-2 px-3 py-1 text-sm font-medium bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
