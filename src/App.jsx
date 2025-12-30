import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/common/sidebar";
import userIcon from "./assets/user.png";
import Modal from "./components/Modal";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
import { useState, useRef } from "react";
import { AuthProvider } from "./components/context/AuthContext";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard";
import TopBar from "./components/common/TopBar";
import { useAuth } from "./components/context/AuthContext";

function TopBarWithAuth() {
  const { user, logout } = useAuth();
  return <TopBar user={user} onLogout={logout} />;
}

function App() {
  const dialog = useRef(null);

  function openDialog() {
    dialog.current.open();
  }
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  //selectedproject will be used to select project id when we have multiple or when we want to add a new project or did not select any new project

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null, //null means we are adding a new project
      };
    });
    openDialog();
  }
  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );
  let content = <SelectedProject project={selectedProject} />;

  if (projectState.selectedProjectId === undefined) {
    content = <Dashboard />;
  }
  if (projectState.selectedProjectId === null) {
    content = <Dashboard />;
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }
  function handleSelectProject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }
  function handleDeleteProject() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId
      ),
    }));
  }

  return (
    <AuthProvider>
      <BrowserRouter>
        <TopBarWithAuth />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <main className="flex h-screen bg-stone-50 pt-14">
                  {/* <Modal/> */}
                  {/* Sidebar */}
                  <Sidebar
                    onStartAddProject={handleStartAddProject}
                    projects={projectState.projects}
                    onSelectProject={handleSelectProject}
                    selectedProjectId={projectState.selectedProjectId}
                  />
                  <div className="flex-1 overflow-auto">
                    {projectState.selectedProjectId === undefined ? (
                      <Dashboard />
                    ) : (
                      <SelectedProject
                        project={projectState.projects.find(
                          (p) => p.id === projectState.selectedProjectId
                        )}
                        onDelete={handleDeleteProject}
                      />
                    )}
                  </div>
                  {/* ✅ Modal ALWAYS mounted */}
                  <Modal
                    reference={dialog}
                    onAdd={handleAddProject}
                    onCancel={handleCancelAddProject}
                  />
                  {/* Top Right content area */}
                  {/* <div className="relative flex-1 mr-2">
        <button className="btn">
          <img
            src={userIcon}
            alt="User Icon"
            className="absolute top-0 right-0 w-10 h-15"
          />
          <span>Login</span>
        </button> */}
                  {/* <NavigationBar/> */}
                  {/* </div> */}
                </main>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
