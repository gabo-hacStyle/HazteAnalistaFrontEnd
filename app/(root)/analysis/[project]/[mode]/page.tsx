import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import AnalysisForm from "@/components/analysis/AnalysisForm";
import ShowAverages from "@/components/analysis/ShowAvarages";
import {
  getAlianza,
  getAuditorias,
  getComunity,
  getExchanges,
  getFinance,
  getFinanceCuant,
  getOnChain,
  getRoadmap,
  getTeamMembers,
  getTokenomics,
  getUseCases,
  getWhitepaper,
} from "@/services/backend/analisys";
import { AnalisysCatalogs } from "@/index";
import FormContainer from "@/components/analysis/FormContainer";
import Link from "next/link";

interface pageProps {
  params: {
    project: string;
    mode: "add" | "edit";
  };
}

const page = async ({ params }: pageProps) => {
  const projectName = decodeURIComponent(params.project);
  const dropdownNeedsCualitative: AnalisysCatalogs = await Promise.all([
    getAlianza(),
    getAuditorias(),
    getUseCases(),
    getComunity(),
    getFinance(),
    getTeamMembers(),
    getRoadmap(),
    getWhitepaper(),
  ]);
  const dropdownNeedsCuantitative: AnalisysCatalogs = await Promise.all([
    getTokenomics(),
    getOnChain(),
    getFinanceCuant(),
    getExchanges(),
  ]);

  const mode = params.mode;
  console.log(mode);
  return (
    <>
      <ShowAverages />
      <header className="my-10  flex justify-between items-center">
        <h1>
          {mode === "add" ? "Realiza" : "Editemos"} tu análisis - {projectName}
        </h1>
        <div>
          <Link href="/dashboard" className="mr-4">
            <span className="text-primary underline">Dashboard</span>
          </Link>
          <Link href="/analysis">
            <span className="text-primary underline">Página de análisis</span>
          </Link>
        </div>
      </header>

      <section className="mb-8">
        <Card className="bg-grey-light/15 py-4 px-2 border-primary-foreground/40">
          <CardContent>
            <h1 className="text-primary">Análisis cualitativo</h1>
            <p>Aqui realizarás tu analísis cualitativo</p>
            <FormContainer
              type="cual"
              data={dropdownNeedsCualitative}
              mode={mode}
            />
          </CardContent>
        </Card>
      </section>

      <section>
        <Card className="bg-grey-light/15 py-4 px-2 border-primary-foreground/40">
          <CardContent>
            <h1 className="text-primary">Análisis cuantitativo</h1>
            <p>Aqui realizarás tu analísis cuantitativo</p>

            <FormContainer
              type="cuant"
              data={dropdownNeedsCuantitative}
              mode={mode}
            />
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default page;
