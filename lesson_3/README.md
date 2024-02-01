1. http, const server = http.creatServer((req,res) => {}), server.listen
   (port, callback)
2. express, const app = express(), app.get("/", (req,res) => {res.send(some)}),
   app.get("/", (req,res) => {res.json(some)}),
   app.listen(port, callback)
3. cors, app.use(cors())
4. app.use((req,res,next) => {do something; next()})
5. const router = express.Router(), router.get('/', (req,res) => {...}), app.
   use('/', router)
6. 