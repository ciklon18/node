const db = require('./db')

class authController {
    async registration(req, res) {
        try {
            const {email, password} = req.body // вот здесь всё валится
            console.log(req.body)
            const candidate = await db.query(`SELECT * FROM Schema WHERE email = $1`, [email])
            if (candidate.rows.length > 0) {
                return res.status(400).json({message: 'User already exists'})
            }
            await db.query('INSERT INTO Schema (уьфшд, password)' +
                ' values ($1, $2) RETURNING *', [email,password],
                (err, result) => {
                    if (err) {
                        console.log(err.stack)
                        res.status(400).json({message: 'Registration error, BD error'})
                    } else {
                        res.json(result.rows[0]) // need delete, debug
                        res.json({message: 'User was created'})
                    }
                });
        } catch (e) {
            res.status(400).json({message: 'Registration error'})
            console.log(req.body)
        }
    }
}
module.exports = new authController()


// module.exports.login = (req,res) => {
//     res.status(200).json({
//         login: true
//     })
// }
// module.exports.registration = (req, res) => {
//     const user = {
//         email: req.body.email,
//         password: req.body.password
//     }
//
//     db.query('INSERT INTO Schema (email, password) VALUES ($1, $2) RETURNING *', [user.email, user.password], (e,res) =>{
//             if (e)
//             {
//                 console.log('eeee');
//                 console.log(e);
//                 db.end();
//             }
//             else {
//                 res.json(res.rows[0]);
//                 res.json({message: 'User was created'});
//                 db.end();
//             }
//         })
//
// }
// class authController {
//     async registration(req, res) {
//         try {
//             // const errors = validationResult(req)
//             // if (!errors.isEmpty()){
//             //     return res.status(400).json({message: 'Registration error ', errors})
//             // }
//             const {password, email} = req.body
//             console.log(req.body) // need delete, debug
//             // const candidate = await db.query(`SELECT * FROM Schema WHERE email = $1`, [email])
//             // if (candidate.rows.length > 0) {
//             //     return res.status(400).json({message: 'User already exists'})
//             // }
//             // await db.query('INSERT INTO person (password, email, first_name, last_name, age, address, role)' +
//             //     ' values ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [hashPassword, email, first_name, last_name, age, address, "USER"],
//             //     (err, result) => {
//             //         if (err) {
//             //             console.log(err.stack)
//             //             res.status(400).json({message: 'Registration error, BD error'})
//             //         } else {
//             //             res.json(result.rows[0]) // need delete, debug
//             //             res.json({message: 'User was created'})
//             //         }
//             //     });
//         } catch (e) {
//             res.status(400).json({message: 'Registration error'})
//             console.log(req.body)
//         }
//     }
// }

