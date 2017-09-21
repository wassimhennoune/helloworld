import {Injectable} from "@angular/core";

var Sqlite = require("nativescript-sqlite");

@Injectable()

export class DataBase {

    private db : any ; 
    private isInstantiated : boolean ; 

    public constructor() {
        if(!this.isInstantiated) {
            (new Sqlite("my.db")).then(db => {
                db.execSQL(this.creationScript);
                db.execSQL(this.creationScript1);
                db.execSQL(this.creationScript2);
                db.execSQL(this.creationScript3);
                db.execSQL(this.creationScript4).then(id => {
                    this.db = db;
                    this.isInstantiated = true;
                }, error => {
                    console.log("CREATE TABLE ERROR", error);
                });
            }, error => {
                console.log("OPEN DB ERROR", error);
            });
        }
    }

    public insert(data: any): Promise<any> {
        return this.db.
            execSQL("INSERT INTO people (firstname, lastname) VALUES (?, ?)", [data.firstname, data.lastname]);
    }
    public insertDoctor(data: any): Promise<any> {
        return this.db.
            execSQL("INSERT INTO doctor (title, specialisation , id_hospital) VALUES (?, ? , ?)", [data.title, data.specialisation , data.id_hospital]);
    }
    public insertAppoint(data: any): Promise<any> {
        return this.db.
            execSQL("INSERT INTO appointement (id_doctor, start_date , end_date ,title) VALUES (?, ? ,? ,?)", [data.id_doctor, data.start_date , data.end_date , data.title]);
    }

    public fetch(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.db.all("SELECT * FROM doctor").then(rows => {
                let people = [];
                for(var row in rows) {
                    people.push({
                        "id": rows[row][0],
                        "title": rows[row][1],
                        "specialisation": rows[row][2],
                        "id_hospital": rows[row][3]
                    });
                }
                resolve(people);
            }, error => {
                reject(error);
            });
        });
    }

    public fetchAppoint(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.db.all("SELECT * FROM appointement").then(rows => {
                let appoints = [];
                for(var row in rows) {
                    appoints.push({
                        "id_appointment": rows[row][0],
                        "id_doctor": rows[row][1],
                        "start_date": rows[row][2],
                        "title": rows[row][3]
                    });
                }
                resolve(appoints);
            }, error => {
                reject(error);
            });
        });
    }


  private creationScript : string = `CREATE TABLE IF NOT EXISTS appointement (
        id_appointment INTEGER PRIMARY KEY AUTOINCREMENT,
        id_doctor INTEGER,
        start_date datetime,
        end_date datetime,
        title string,
        id_hospital INTEGER
    )`;
    
private creationScript1 : string = ` CREATE TABLE IF NOT EXISTS doctor (
        id_doctor INTEGER PRIMARY KEY AUTOINCREMENT,
        title string,
        specialisation string,
        id_hospital INTEGER
    )`;
    
private creationScript2 : string = `CREATE TABLE IF NOT EXISTS message (
        id_message INTEGER PRIMARY KEY AUTOINCREMENT,
        id_doctor INTEGER,
        text text,
        date datetime
    )`;
    
private creationScript3 : string = ` CREATE TABLE IF NOT EXISTS hospital_center (
        id_hostpital INTEGER PRIMARY KEY AUTOINCREMENT,
        address TEXT,
        type TEXT,
        phone TEXT,
        fax TEXT,
        wilaya TEXT,
        town TEXT,
        lang float,
        lat float
    )`;
    
private creationScript4 : string = ` CREATE TABLE IF NOT EXISTS work_place (
        id_doctor INTEGER,
        id_hostpital INTEGER
    )`;
}
