// import {Logs} from "selenium-webdriver";
//brower console
//email
//db
export interface ILogger{
    Log(): any
}
export class BaseLogger implements ILogger{
    Log() {
    console.log("using baselog")
    }
}

export class ConsoleLogger extends BaseLogger {
    conLog(){
        console.log("Using console logger")
    }
}

export class DbLogger extends BaseLogger {
    DbLog() {
        console.log("using DB logger")
    }
}

export class FileLogger extends BaseLogger{
    FileLog() {
        console.log("using file logger")
    }
}