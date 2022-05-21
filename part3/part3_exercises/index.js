const { response } = require('express');
const express = require('express');
const app = express();
var morgan = require('morgan');
const cors = require('cors');

let dexter = morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    tokens.status(req, res)
  ].join(' ')
})



morgan.token('body', function (req, res) { return JSON.stringify(req.body)})


app.use(express.json())
app.use(cors())

app.use(morgan(':method :url :status :res[content-length] :response-time ms - :body'))

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
        "id": 4,
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122"
      }
] 

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})
app.get('/api/persons', (req, res) => {
    res.json(persons);
      
});

app.get('/info', (req, res) => {
    const date = new Date();
    res.send(`Phonebook has info for ${persons.length} people </br> </br> ${date} `)
    
})

app.get('/api/persons/:id', (req,res) => {
    const id = Number(req.params.id);
    const person = persons.find(e => {
        
        return e.id === id});
  

    if(person){
        res.json(person)
    } else {
        res.status(404).end('Error 404. The resource was not found')
    }
    
   

})

app.delete('/api/persons/:id', (req,res) => {
    const id = Number(req.params.id);
    
    const containsElement = persons.find(e => e.id === id )
    console.log('contains element: ', containsElement)
    if(containsElement != undefined ){
      persons = persons.filter(e => e.id !== id)
      res.status(204).end()
    } else {
      
      res.status(404).end('Resource was not found')
    }
    console.log('persons in the backend: ', persons)
    
    
})

const getId = () => {
  let math =  Math.round(Math.random() * 10000);
  return math;
}

app.post('/api/persons', (req, res) => {

  const body = req.body;
  
  if (!body.name || !body.number) {
    return res.status(400).json({ 
      error: 'content missing' 
    })
  } else if (persons.find(e => e.name === body.name)) {
    return res.status(400).json({ 
      error: 'name must be unique' 
    })
  }

  const person = {
    id: getId(),
    name: body.name, 
    number: body.number
  }
  
  persons = persons.concat(person)
  res.json(person);
 console.log(persons);

})

app.put('/api/persons/:id', (req,res) => {
  const id = Number(req.params.id)
  const body = req.body;
  person = persons.filter(e => e.id === id);

  persons.forEach(e => {
    if(e.id === id){
      e.number = body.number
    }
  })
  
  res.status(204).end
})



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

