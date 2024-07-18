import React from 'react';
import { Route, Routes } from "react-router-dom";

import { Dashboard } from './views/';
import { ProjectDetail } from './views/';
import { ProjectList } from './views/';
import { ResourceDetail } from './views/';
import { Resources } from './views';
import { AddProject } from './views';
import { AddResource } from './views';
import { Login } from './views';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} exact />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/projects" element={<ProjectList />} exact />
      <Route path="/project" element={<ProjectDetail />} exact />
      <Route path="/project/add" element={<AddProject />} exact />
      <Route path="/resources" element={<Resources />} exact />
      <Route path="/resource" element={<ResourceDetail />} exact />
      <Route path="/resource/add" element={<AddResource />} exact />
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
  )
}
