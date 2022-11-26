// Main File
import { app } from './app/app';

const port: string | number = app.get('port');

app.listen(port, () => {
  console.log(`-------- Server running on port ${port}`);
});
