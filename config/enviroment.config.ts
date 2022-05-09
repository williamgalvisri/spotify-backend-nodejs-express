import * as dotenv from "dotenv";

export const initConfig = () => {
    dotenv.config();
    const path = `.env`;
    dotenv.config({ path: path });
}