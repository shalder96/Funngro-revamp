import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import MainLayout from "../layouts/MainLayout";

const Home = lazy(() => import("@/pages/Home"));
const About = lazy(() => import("@/pages/About"));
const Teens = lazy(() => import("@/pages/Teens"));
const Companies = lazy(() => import("@/pages/Companies"));
const Contact = lazy(() => import("@/pages/Contact"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/teens" element={<Teens />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
    </Suspense>
  );
}
