import app from './app';

const port = process.env.PORT || 3333;

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
