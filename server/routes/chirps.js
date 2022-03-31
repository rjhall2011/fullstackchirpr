import * as express from "express"
const router = express.Router();
import db from "../db";
// const chirpsStore = require("../chirpstore.js");
// no more chirpstore! install mysql from npm and configure the routes to use that instead of chirpstore.

// Create
router.post("/", async (req, res) => {
    const body = req.body;
    // body.location

    try {
        res.json(await db.chirps.insert(body.userid, body.content, body.location));
        res.sendStatus(200)
    } catch(err) {
        console.log(err)
        res.sendStatus(400)
    }
});

// REST API
router.get("/:id?", async (req, res) => {
    const body = req.body;

    try{(id) 
        // const chirp = chirpsStore.GetChirp(id);
        res.json(await db.chirps.one(id));
    } catch {
        res.json(await db.chirps.all())
    }
});


// Delete
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
     if (id) {
         try { 
          res.json((await db.chirps.del(id)[0]));
        } catch (err) {
         console.log(err)
            if(err) throw err;
            res.sendStatus(400)
        } 
         
    
     
     
     }
   

});

// Update
router.put("/:id", async (req, res) => {
    const body = req.body;
    try {
        res.json(await db.chirps.update(id));
        res.sendStatus(200)
    } catch (err) {
        console.log(err)
        res.sendStatus(400)
    }

    // // chirpsStore.UpdateChirp(id, body);
    // if (id) {
    //     // const chirp = chirpsStore.GetChirp(id);
    //     res.json(await db.chirps.update);
    // } else {
    //     res.json(await db.chirps.all())
    //     // const chirps = chirpsStore.GetChirps();
    // };
});

export default router;