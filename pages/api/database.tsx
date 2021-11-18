const sql = require('mssql')
import type { NextApiRequest, NextApiResponse } from 'next'


const sqlConfig = {
    user:  process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    server: process.env.DB_HOST,
    options: {
      encrypt: true, 
      trustServerCertificate: true
    }
  }
  
export default async function getFeatures(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

    await sql.connect(sqlConfig); // TODO: FIGURE out how to inject?
    const result = await sql.query`select * from features`

     res.status(200).json(result)
}

const sqlParameterized = () => {
    // let pool = await sql.connect(config)
    //     let result1 = await pool.request()
    //         .input('input_parameter', sql.Int, value)
    //         .query('select * from mytable where id = @input_parameter')
}

export async function getStaticProps() {
    await sql.connect(sqlConfig)
}



