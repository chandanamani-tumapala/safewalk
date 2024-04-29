const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/userdetails');
const EscortModel = require("./models/escortdetails");
const geoip=require('geoip-lite');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));



mongoose.connect("mongodb://localhost:27017/hackathon");
const port = 3000;

app.post('/login', async (req, res) => {
    try {
        console.log(req.body);
        console.log('entered to backend');
        if (req.body.type === 'user') {
            console.log('matched');
            console.log(req.body.email);
            const user = await UserModel.findOne({ email: req.body.email });
            console.log(user);
            console.log('checked');
            if (user) {
                if (user.password === req.body.password) {
                    res.json('Success')
                }
                else {
                    res.json('wrong credentials');
                }
            }
            else {
                console.log("not present");
            }
        }
        else if (req.body.type === 'escort') {
            console.log('matched');
            console.log(req.body.email);
            const escort= await EscortModel.findOne({ email: req.body.email });
            console.log(escort);
            console.log('checked');
            if (escort) {
                if (escort.password === req.body.password) {
                    res.json('Success')
                }
                else {
                    res.json('wrong credentials');
                }
            }
            else {
                console.log("not present");
            }
        }
        else {
            console.log(`not matched , ${req.body.type}`);
        }

    }
    catch (err) {
        console.log("error is ", err);
    }
});
app.post('/usersignup', async (req, res) => {

    try {

        const user = await UserModel.findOne({ email: req.body.email });
        if (user)
            return res.status(400).json({ message: 'user is already present' });
        const newUser = await UserModel.create(req.body);
        console.log('user created successfully', newUser);
        res.status(201).json({ message: 'user createsd successfully', user: newUser })

    }
    catch (err) {
        console.log('error is', err);
    }
});
app.post('/escortsignup', async (req, res) => {
    try {
        const escort = await EscortModel.findOne({ email: req.body.email });
        if (escort)
            return res.status(400).json({ message: 'user is already present' });
        const newEscort = await EscortModel.create(req.body);
        console.log('user created successfully', newEscort)
        res.status(201).json({ message: 'escort created successfylly', escort: newEscort })
    }
    catch (err) {
        console.log('error is ', err);
    }
});
app.get('/geolocation', (req, res) => {
    const ip= req.ip || req.connnection.remoteAddress;
    const geo=geoip.lookup(ip);

    if(geo) {
        res.json({
            ip:ip,
            city:geo.city,
            region: geo.region,
            country: geo.country,
            ll: geo.ll
        });
    }
        else {
            res.status(404).json({error:'Geolocation data not found for this ip address'});
        }
    
});

app.listen(port, () => {
    console.log(`server is running in port , ${port}`);
})