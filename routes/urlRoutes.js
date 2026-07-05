import express from "express";

import { readUrls, writeUrls } from "../storage/fileStorage.js";

import { validateUrl } from "../validation/validateUrl.js";

const router = express.Router();

//Create a shortened URL
router.post("/", async (req, res) => {

    const error = validateUrl(req.body);

    if(error) {
        return res.status(400).json({
            message: error
        });
    } 
    
    const urls = await readUrls();

    const newUrl = req.body;
    urls.push(newUrl);

    await writeUrls(urls);

    res.status(201).json(newUrl)
});

//Get or read all URLs
router.get("/", async (req, res) => {
    const urls = await readUrls();

    res.json(urls);
});

//Redirect
router.get("/r/:code", async (req, res) => {
    res.send("Redirect User");
});


//Get or read a single URL
router.get("/:id", async (req, res) => {
    const urls = await readUrls();

    const url = urls.find(item => item.id == req.params.id);

    if(!url) {
        return res.status(400).json({
            message: "URL not found"
        });
    }
    
    res.json(url);
});


//Update URL
router.put("/:id", async (req, res) => {
    res.send("Update URL");
});

//Delete URL
router.delete("/:id", async (req, res) =>{
    res.send("Delete URL");
});



export default router;