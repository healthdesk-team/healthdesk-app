import React from 'react'
import {
  Route, Redirect,
} from 'react-router-dom'

// import Admin Container
import AdminWelcome from '../components/containers/admin/adminWelcome'
// import Medic Containers
import MedicWelcome from '../components/containers/medic/medicWelcome'
// import Patient Containers
import PatientWelcome from '../components/containers/patient/patientWelcome'

const patientRoutes = [
  {
    path: '/welcome',
    component: PatientWelcome,
    exact: true,
  },
]

const medicRoutes = [
  {
    path: '/welcome',
    component: MedicWelcome,
    exact: true,
  },
]

const adminRoutes = [
  {
    path: '/welcome',
    component: AdminWelcome,
    exact: true,
  },
]

const getAuthRoutes = (role) => {
  console.log('// GET AUTH ROUTES', role)

  switch (role) {
    case 'admin':
      return adminRoutes.map(route => <Route key={route.path} {...route} />)
    case 'patient':
      return patientRoutes.map(route => <Route key={route.path} {...route} />)
    case 'medic':
      return medicRoutes.map(route => <Route key={route.path} {...route} />)
    default:
      return <Redirect to="/" />
  }
}

export default getAuthRoutes
