import express,{Application,Request,Response} from 'express'
import routesCursos from '../routes/cursos';
import cors from 'cors'
import db from '../db/connection';


class Server {
    private app: Application;
    private port: string;

    constructor(){
        
        this.app=express();
        this.port= process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect()

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`aplicacion en puerto ${this.port}`);
        });

        }
    

        routes(){
            this.app.get('/',(req: Request,res:Response)=>{
                res.json({
                    msg:'TODO BIEN CARNAL'
                })

            })
             this.app.use('/api/cursos',routesCursos)
        }

        midlewares(){
            //parsear cosas

            this.app.use(express.json());
            
            //cors
            this.app.use(cors)
        }

        async dbConnect(){
           await  db.authenticate();
           console.log('base de datos conectada papu');
           


        }

    }


export default Server;