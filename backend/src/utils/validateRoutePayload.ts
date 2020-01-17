import { ValidationError, ObjectSchema } from 'yup';
import { Request } from 'express';

type Errors = string[] | null;

const validateRoutePayload = async (
  schema: ObjectSchema,
  req: Request
): Promise<Errors> => {
  try {
    await schema.validate(req.body, {
      abortEarly: false,
      strict: true,
    });
    return null;
  } catch (err) {
    const yupError: ValidationError = err;
    return yupError.inner.map(e => e.message);
  }
};

export default validateRoutePayload;
