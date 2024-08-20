import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState , setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  })

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random(); // Correctly generate a random task ID
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
  
      // Ensure tasks array exists, otherwise initialize it as an empty array
      const updatedTasks = prevState.tasks ? [newTask, ...prevState.tasks] : [newTask];
  
      return {
        ...prevState,
        tasks: updatedTasks,
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id ),
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      
      }
    })
  }

  function handleSelectProject(id){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      
      }
    })
  }

  

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }

 
  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const newProject ={
        ...projectData,
        id: Math.random()
      }
      return {
        ...prevState,
         selectedProjectId: undefined,
        projects: [...prevState.projects,newProject]
      }
    })
  }


  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      };
    });
  }

const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)

  let content = <SelectedProject tasks={projectsState.tasks} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} handleDelete={handleDeleteProject} project={selectedProject}/>;

  if(projectsState.selectedProjectId === null) {
    content = <NewProject onCancel={handleCancelAddProject} onAdd={handleAddProject}/>
  }else if(projectsState.selectedProjectId === undefined) {
     content = <NoProjectSelected handleStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
    <ProjectSidebar selectedProjectId={projectsState.selectedProjectId} onselectproject={handleSelectProject} projects={projectsState.projects} handleStartAddProject={handleStartAddProject}/>
    {content}
    </main>
  );
}

export default App;
