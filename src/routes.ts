import {Router, Request, Response, response} from 'express';

interface UserRequest {
    name:string;
    email:string;
    password:string;
}

const routes = Router();


// routes.get('/query', (request, response) => {
    
//     const{consulta} = request.query
    
//     response.json({
//         consultaRetorno: consulta
//     })
// });

// routes.get('/user', (request, response) => {
    
//     response.json({
//         message:'Hello World'
//     })
// });

// routes.get('/user/:id', (request, response) => {
    
//     const{id} = request.params;
    
//     response.json({
//         userId:id
//     })
// });

// routes.post('/body', (request, response) => {
//     const{name, email, password} = request.body
    
//     const user= {
//         nome: name,
//         email,
//         senha: password
//     }
    
//     return response.json(user);
// });

routes.post('/user', () => console.log('User route'));

routes.post('/activity', () => console.log('Activity route'));

routes.post('/courseunit', () => console.log('Course Unit route'));

export default routes;
