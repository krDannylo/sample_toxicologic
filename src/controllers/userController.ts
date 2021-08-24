import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../database/entity/User';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class UserController{

    async register(req: Request, res: Response){
        const { username, password } = req.body;

        if(!username || !password) return res.send("Dados Inválidos");

        const hashed = bcrypt.hashSync(password, 10);

        await getRepository(User).create({username, password: hashed, token: '1'});
        await getRepository(User).save({username, password: hashed, token: '1'});

        res.send("Novo usuário criado com sucesso!"); 
    }

    async login(req: Request, res: Response){
        const { username, password } = req.body;

        if(!username || !password) return res.send("Dados Inválidos");

        const user = await getRepository(User).findOne({username: username}) || null;
        if(!user) return res.send('Usuário não encontrado');

        const match = await bcrypt.compare(password, user.password);
        const token = jwt.sign({foo: 'bar'}, "secret-key", { expiresIn: '10h' });

        await getRepository(User).update(user.id, {token: token});

        if(match)
            res.send("Logado com sucesso");
        else
            res.send("Senha incorreta!");
    }
}

export { UserController };