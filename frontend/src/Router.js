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
import ProtectedRoute from './ui/ProtectedRoute';

let user;

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      
      <Route 
        path="/dashboard" 
        element={
          <ProtectedRoute user={user}>
            <Dashboard />
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/projects" 
        element={
          <ProtectedRoute user={user}>
            <ProjectList />
          </ProtectedRoute>
        } 
        exact 
      />

      <Route 
        path="/project" 
        element={
          <ProtectedRoute user={user}>
            <ProjectDetail />
          </ProtectedRoute>
        } 
        exact 
      />
      
      <Route 
        path="/project/add" 
        element={
          <ProtectedRoute user={user}>
            <AddProject />
          </ProtectedRoute>
        } 
        exact
        />

      <Route 
        path="/resources" 
        element={
          <ProtectedRoute user={user}>
            <Resources />
          </ProtectedRoute>
          } 
        exact 
      />

      <Route 
        path="/resource" 
        element={
          <ProtectedRoute user={user}>
            <ResourceDetail />
          </ProtectedRoute>
          } 
        exact 
      />

      <Route 
        path="/resource/add"
        element={
          <ProtectedRoute user={user}>
            <AddResource />
          </ProtectedRoute>
          } 
        exact 
       />

      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
  )
}
