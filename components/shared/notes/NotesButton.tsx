"use client";
import React, { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useProjects } from "@/hooks/useProjects";
import { useDialogsNotes } from "@/hooks/useDialogs";
import DialogNotes from "./DialogNotes";
import { TableData } from "@/index";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import { PencilIcon } from "lucide-react";

const NotesButton = () => {
  const { setIsOpenNote, setIdProject, setInitialValue } = useDialogsNotes();
  const [projectNoteChosen, setProjectNoteChosen] = useState<TableData | null>(
    null,
  );

  const [guzma, setGuzma] = useState<number | null>(null);
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.localStorage.getItem("guzma") !== null
    ) {
      setGuzma(Number(window.localStorage.getItem("guzma")));
    }
  }, []);

  const { data } = useProjects(guzma ?? 0);

  useEffect(() => {
    if (projectNoteChosen) {
      setInitialValue(projectNoteChosen.nota);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectNoteChosen]);

  //Para pasar el inicial value al editor
  // const [initialValue, setInitialValue] = useState<string | null>(null);
  // useEffect(() => {
  //     if (initialValue) {
  //         setInitialValue(initialValue);
  //     }
  // }, [idProject]);
  return (
    <>
      <DialogNotes
        nombreProyecto={projectNoteChosen && projectNoteChosen.proyecto}
        note={projectNoteChosen && projectNoteChosen.nota}
      />

      <DropdownMenu>
        <DropdownMenuTrigger className="p-1 border sm:border-0 rounded">
          + <span className="hidden sm:inline">Nota</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Notas a proyectos:</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {Array.isArray(data) &&
            data.map((project) => {
              return (
                <>
                  <DropdownMenuItem
                    className="cursor-pointer flex gap-3"
                    key={project.id_proyecto}
                    onClick={() => {
                      console.log("Clicadi");
                      setIsOpenNote(true);
                      setIdProject(project.id_proyectoInicial);
                      setProjectNoteChosen(project);
                    }}
                  >
                    <PencilIcon className="h-[1.2rem] w-[1.2rem] "></PencilIcon>
                    {project.proyecto}
                  </DropdownMenuItem>
                </>
              );
            })}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default NotesButton;
