import React from 'react';
import { Route, Routes } from "react-router-dom";

import { Dashboard } from './views/Dashboard/Dashboard';
import { Project } from './views/ProjectDetail/Project';
import { ProjectList } from './views/ProjectList/ProjectList';
import { Resource } from './views/ResourceDetail/Resource';
import { Resources } from './views/Resources/Resources';
import { AddProject } from './views/AddProject/AddProject';
import { AddResource } from './views/AddResource/AddResource';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} exact />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/projects" element={<ProjectList />} exact />
      <Route path="/project" element={<Project />} exact />
      <Route path="/project/add" element={<AddProject />} exact />
      <Route path="/resources" element={<Resources />} exact />
      <Route path="/resource" element={<Resource />} exact />
      <Route path="/resource/add" element={<AddResource />} exact />
      <Route path="*" element={<Dashboard />} exact />
    </Routes>
  )
}
