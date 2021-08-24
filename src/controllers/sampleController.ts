import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Sample } from '../database/entity/Sample';
import  notaDeCorte from '../utils/notaDeCorte';

class SampleController{
    async register(req: Request, res: Response){
        let isPositive = false;
        let sampleValues = [];
        let sampleKeys = [];

        for(var key in req.body){
            sampleValues.push(req.body[key]);
            sampleKeys.push(key);
        }

        for(let x = 0; x < sampleValues.length; x++){
            for(let i = 0; i < 9; i++){
                if(sampleKeys[x] != 'codigo_amostra' && sampleKeys[x] === Object.keys(notaDeCorte[i])[0]){
                    if(sampleValues[x] >= Object.values(notaDeCorte[i])[0]){
                        isPositive = true;
                    }
                    console.log(`${Object.keys(notaDeCorte[i])[0]}`)
                    break;
                }
            }
            if(isPositive) break;
        }
        if(isPositive) {
            await getRepository(Sample).create(req.body);
            await getRepository(Sample).save(req.body);
        }
    }
}

export { SampleController }     