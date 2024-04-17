import pool from '../db.js';
import queries from './queries';
// import { authenticateToken } from '../middleware/authorization.js';

const getUsers = (async (req,res) => {
    console.log("--------> Inside /")
      try {
        const users = await pool.query(queries.getUsers);
        res.json({users : users.rows});
      } catch (error) {
        res.status(500).json({error:error.message});
      }
})

// const getStudentsMarks = (req,res) => {
//     console.log('--->inside students marks')
//     pool.query(queries.getStudentsMarks, (error, results) => {

//         if (error) throw error;
//         res.status(200).json(results.rows);
//     });
// };

// const post(async (req,res) => {
//     console.log("---->inside create user api")
//       try {
//         const hashedPassword = await bcrypt.hash(req.body.password,10);
//         const newUser = await pool.query(
//             queries.
//           'INSERT INTO USERS (user_name,user_email,user_password) VALUES ($1,$2,$3) RETURNING *',
//           [req.body.name, req.body.email, hashedPassword]);
//         res.json({users:newUser.rows[0]});
//       } catch (error) {
//         res.status(500).json({error:error.message});

//       }
// })

// module.exports = {
//     getUsers
// }
export default {getUsers}


