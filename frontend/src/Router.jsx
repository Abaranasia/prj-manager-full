import React, { useContext } from 'react';
import { Route, Routes } from "react-router-dom";

import { Dashboard } from './views';
import { ProjectDetail } from './views';
import { ProjectList } from './views';
import { ResourceDetail } from './views';
import { Resources } from './views';
import { AddProject } from './views';
import { AddResource } from './views';
import { Login } from './views';
import ProtectedRoute from './ui/ProtectedRoute';
import { AuthContext } from './contexts';

export const Router = () => {

  const authContext = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/projects" 
        element={
          <ProtectedRoute>
            <ProjectList />
          </ProtectedRoute>
        } 
        exact 
      />

      <Route 
        path="/project" 
        element={
          <ProtectedRoute>
            <ProjectDetail />
          </ProtectedRoute>
        } 
        exact 
      />
      
      <Route 
        path="/project/add" 
        element={
          <ProtectedRoute>
            <AddProject />
          </ProtectedRoute>
        } 
        exact
        />

      <Route 
        path="/resources" 
        element={
          <ProtectedRoute>
            <Resources />
          </ProtectedRoute>
          } 
        exact 
      />

      <Route 
        path="/resource" 
        element={
          <ProtectedRoute>
            <ResourceDetail />
          </ProtectedRoute>
          } 
        exact 
      />

      <Route 
        path="/resource/add"
        element={
          <ProtectedRoute>
            <AddResource />
          </ProtectedRoute>
          } 
        exact 
       />

      <Route path="*" element={<p>There is nothing here: 404!</p>} />
    </Routes>
  )
}
