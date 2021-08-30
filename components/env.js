import path from "path";
import express from "express";

export function setConfig(){
    global.PORT = process.env.PORT ?? 3000;
    global.DIRNAME = path.resolve();
    global.PATH = path;
    global.express = express;
    global.app = express();
}