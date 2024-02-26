import React from 'react';
import { Controller, FieldValues } from 'react-hook-form';

interface FormFieldProps<T> {
  control: any;
  name: string;
  defaultValue?: string;
  children: React.ReactNode;
  errorMessage?: any; // Ajustando o tipo da propriedade errorMessage
}

const FormField = <T extends FieldValues>({
  control,
  name,
  defaultValue,
  children,
  errorMessage,
}: FormFieldProps<T>) => {
  return (
    <div style={{ width: '100%' }}>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue || ''}
        render={({ field }) => (
          <>
            {React.cloneElement(children as React.ReactElement<any>, {
              ...field,
            })}
          </>
        )}
      />
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default FormField;
