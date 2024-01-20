import { useCallback } from 'react';
import * as yup from 'yup';
import { IInitialBufferState } from '../../interfaces';

export const useYupValidationResolver = (
  validationSchema: yup.ObjectSchema<IInitialBufferState>,
  pureFile: File | null
) =>
  useCallback(
    async (data: IInitialBufferState) => {
      try {
        const modifyData = { ...data, file: pureFile };

        const values = await validationSchema.validate(modifyData, {
          abortEarly: false,
        });
        return {
          values,
          errors: {},
        };
      } catch (errors) {
        const count = (errors as yup.ValidationError).inner.reduce(
          (count, error) => (error.path === 'password' ? count + 1 : count),
          0
        );

        return {
          values: {},
          countPasswordErrors: count,
          errors: (errors as yup.ValidationError).inner.reduce(
            (allErrors, currentError) => {
              if (currentError && currentError.path) {
                return {
                  ...allErrors,
                  [currentError.path]: {
                    type: currentError.type ?? 'validation',
                    message: currentError.message,
                  },
                  password: {
                    type:
                      (
                        (errors as yup.ValidationError).inner.find(
                          (el) => el.path === 'password'
                        ) || {}
                      ).type ?? '',
                    message:
                      (
                        (errors as yup.ValidationError).inner.find(
                          (el) => el.path === 'password'
                        ) || {}
                      ).message ?? '',
                    count: (errors as yup.ValidationError).inner.reduce(
                      (count, error) =>
                        error.path === 'password' ? count + 1 : count,
                      0
                    ),
                  },
                };
              }
              return {
                ...allErrors,
              };
            },
            {} as Record<string, { type: string; message: string }>
          ),
        };
      }
    },
    [pureFile, validationSchema]
  );
