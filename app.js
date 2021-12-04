/**
 * TODO: Create and configure your Express.js application in here.
 *       You must name the variable that contains your Express.js
 *       application "app" because that is what is exported at the
 *       bottom of the file.
 */
const { HairColor, Person } = require('./models')

const cookieParser = require('cookie-parser')
const csrf = require('csurf')
const express = require('express')

const csrfProtection = csrf({ cookie: true })

 const app = express()
 
 app.set('view engine', 'pug')

 app.use(express.urlencoded({ extended: false }))
 app.use(cookieParser())

 app.get('/', async (req, res, next) => {
     const people = await Person.findAll({
       include: [HairColor]
     });
     console.log("Peeps", people[0].HairColor.color)
     res.render('home', {people})
 });

 // Dont forget Get and Post CSRF configuration
 app.get('/new-person', csrfProtection, async function (req, res) {
  // dataValues: { // a haircolor
  //   id: 1,
  //   color: 'Auburn',
  //   createdAt: 2019-04-12T00:00:00.000Z,
  //   updatedAt: 2019-04-12T00:00:00.000Z
  // },
   const hairColors = await HairColor.findAll()
  //  console.log("hairColorzzz: ", hairColors)
   res.render('new-person', {hairColors, csrfToken: req.csrfToken()})
 })

 app.post('/new-person', csrfProtection, async (req, res, next) => {
   const { firstName, lastName, age, biography, hairColorId } = req.body
  //  console.log(req.body)
   try {
     await Person.create({
       firstName, 
       lastName, 
       age,
       biography,
       hairColorId
     })
     res.redirect('/')
   } catch (e) {
      // console.log(e)
      next(e)
   }

 })
  
 app.listen(3000)

// Your code here




/* Do not change this export. The tests depend on it. */
try {
  exports.app = app;
} catch(e) {
  exports.app = null;
}