# React + TypeScript + Vite

In this chapter we hae used vite, which a build tool and devlopment server. 
Commnad to install vite: npm install -g create-vite

# Create a new vite project

# Command : create-vite my-react-app --template react-ts

Default port is **5173**
To change the port, we can modify vite.config.ts

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  }
})