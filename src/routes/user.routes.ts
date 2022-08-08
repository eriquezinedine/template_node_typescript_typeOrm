import { Router } from 'express'
import { createUser, getUser, updateUser, deleteUser } from '../controllers/userControllers';


const router = Router();

router.post('/user', createUser)
router.get('/user', getUser)
router.put('/user/:id', updateUser)
router.delete("/users/:id", deleteUser);


// router.get('/users ', (req, res)=>{
//     res.send('hola  ')
// })


export default router; 