import React from "react";
import Lessons from "@/components/dashboard/Lessons";
// import InputSearcher from '@/components/shared/InputSearcher';
import Dashboard from "@/components/dashboard/Dashboard";
import DialogItem from "@/components/dashboard/form/DialogItem";
import DialogInstructions from "@/components/on-boarding/DialogInstructions";
import {
  get4t,
  getDecision,
  getExchange,
  getSectores,
} from "@/services/backend/catalogos";
import { getLessons } from "@/services/backend/lessons";
import AddProjectButton from "@/components/dashboard/AddProjectButton";
import { getProjectsList } from "@/services/backend/proyectsInfo";
import ReloadProjects from "@/components/dashboard/ReloadProjects";

const HomePage = async () => {
  const [data4t, decision, exchange, sector, projectsList, allModules] = await Promise.all([
    get4t(),
    getDecision(),
    getExchange(),
    getSectores(),
    getProjectsList(),
    getLessons()
  ]);

  //const response = await fetch('http://localhost:3000/api/lessons');
  //const {lessons} = await response.json();

  return (
    <div>
      <DialogInstructions />

      <section className="seguimiento mb-8">
        <div className="flex items-center justify-between mt-4">
          <h1 className="text-2xl font-bold  2xl:text-4xl">
            Proyectos que me interesan:
          </h1>

          <div className="flex gap-4 items-center justify-center">
            {/* <div className="hidden md:block">
                  <ReloadProjects />
                </div> */}

            <AddProjectButton />
          </div>
        </div>
        <p className="text-sm mb-4 text-primary-foreground/90">
          Aquí podras registrar todos los proyectos que te llaman la atención o
          en los que ya has invertido.
        </p>
        {/* <div className="md:hidden">
              <ReloadProjects />
            </div> */}

        <Dashboard
          projectsList={projectsList.proyectos}
          catalogos={[data4t, decision, exchange, sector]}
        />
      </section>

      {/* Seccion de lecciones*/}
      <section className="2xl:py-4 py-2 xl:pt-8" id="lecciones-main-page">
        <div className="md:flex items-center justify-between lessons-header ">
          <h1 className="text-2xl 2xl:text-4xl font-bold ">
            Aprende a hacer un análisis:
          </h1>
          {/* <InputSearcher /> */}
        </div>
        <p className="text-sm text-primary-foreground/90">
          Inicia con las lecciones para apender a hacer un análisis de manera
          profesional y convertirte en analista.
        </p>
        <Lessons
        // lessons={lessons}
          allModules={allModules}
        />
      </section>
    </div>
  );
};

export default HomePage;
