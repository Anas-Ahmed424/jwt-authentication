import express from 'express';
import controller from './controller.js';

const router  = express.Router();

router.get('/', controller.getUsers)
// router.post('/post_new_user', controller.addUser)

// router.get('/',authenticateToken, async (req,res) => {
//   console.log("--------> Inside /")
//     try {
//       const users = await pool.query('SELECT * FROM users');
//       res.json({users : users.rows});
//     } catch (error) {
//       res.status(500).json({error:error.message});
//     }
//     // const users = await pool.query('select * from users')
//     // res.status(200).json(true)
// })

// router.post('/',async (req,res) => {
//   console.log("---->inside create user api")
//     try {
//       const hashedPassword = await bcrypt.hash(req.body.password,10);
//       const newUser = await pool.query(
//         'INSERT INTO USERS (user_name,user_email,user_password) VALUES ($1,$2,$3) RETURNING *',
//         [req.body.name, req.body.email, hashedPassword]);
//       res.json({users:newUser.rows[0]});
//     } catch (error) {
//       res.status(500).json({error:error.message});

//     }
// //       )
// //       res.json({users : users.rows});
// //     } catch (error) {
// //       res.status(500).json({error:error.message});
// //     }
// //     // const users = await pool.query('select * from users')
// //     // res.status(200).json(true)
// })

export default router;
