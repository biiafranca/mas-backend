import {Router} from 'express';

const routes = Router();


routes.get('/query', (request, response) => {
    
    const{consulta} = request.query
    
    response.json({
        consultaRetorno: consulta
    })
});

routes.get('/user', (request, response) => {
    
    response.json({
        message:'Hello World'
    })
});

routes.get('/user/:id', (request, response) => {
    
    const{id} = request.params;
    
    response.json({
        userId:id
    })
});

routes.post('/body', (request, response) => {
    const{name, email, password} = request.body
    
    const user= {
        nome: name,
        email,
        senha: password
    }
    
    return response.json(user);
});

export default routes;