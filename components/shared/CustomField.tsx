import React, { Ref } from "react";
import { Control } from "react-hook-form";
 import { z } from "zod";

import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from "../ui/form";

// import { formSchema } from "./DashboardDataForm";


type CustomFieldProps = {

  render: (props: { field: any }) => React.ReactNode;
  name: string;
  formLabel?: string;
  className?: string;
  type: 'create' | 'update' | null;
};

export const CustomField = ({
  
  render,
  name,
  formLabel,
  className,
  type,

}: CustomFieldProps) => {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {formLabel && 
          
            <FormLabel>
              {(formLabel === 'Sector' || formLabel === 'Exchange') && type === 'create' ? `${formLabel} (opcional)` : formLabel }
            </FormLabel>
          
          }
          
           
          
          <FormControl>{render({ field })}</FormControl>  
          
            <FormMessage>
              {
                (name === 'idSector' || name === 'idExchange') && (type === "create") ? (
                <p className="text-sm text-gray-500 mt-2">
                  ¿No estás seguro? Puedes modificar esta información más adelante desde la sección de edición del proyecto.
                </p>
                ) : null
              }

            </FormMessage>
        </FormItem>
      )}
    />
  );
};