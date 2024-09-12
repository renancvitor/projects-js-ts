import app from './app';

const port = process.env.APP_PORT || 3002; // Fallback para a porta 3001, caso APP_PORT não esteja definida

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
