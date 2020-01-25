import { ValidationError, ObjectSchema } from 'yup';

type Errors = string[] | null;

const validateRoutePayload = async (
  schema: ObjectSchema,
  payload: object
): Promise<Errors> => {
  try {
    await schema.validate(payload, {
      abortEarly: false,
    });

    return null;
  } catch (err) {
    const yupError: ValidationError = err;

    return yupError.inner.map(e => e.message);
  }
};

export default validateRoutePayload;
