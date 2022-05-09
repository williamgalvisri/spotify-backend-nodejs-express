
import express from 'express';
import router from './src/routes';
import { initConfig } from './config/enviroment.config';
import { connect } from './config/database.config';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
/** Initialize dotenv config*/
initConfig()
const PORT = process.env.PORT_APP;
const MONGO_DB = process.env.NODE_ENV !== 'test' ?  (process.env.MONGO_DB || '') : (process.env.MONGO_DB_TEST || '');
// Initialize Mongodb Connection
connect(MONGO_DB)
app.use(cors({}))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use(router)
app.get('/', (req, res) => {
  res.send('Well done!');
})

// Initialize server
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT)
}

export default app