import express from "express";
import mysql from "mysql2"
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db= mysql.createConnection( {
    host: "localhost",
    user: "root",
    password: "password",
    database: "CabSystem"
})

app.get("/", (req, res) => {
    // console.log("Hi this is the backend");
    res.send("Hi this is the backend")
})

app.get("/persons", (req, res) => {

    const q= "SELECT * FROM Person"

    db.query( q, (err, data) => {
        if( err) return data.json(err)

        return res.json(data)
    })
})

app.get("/vehicle", (req, res) => {

    const q= "SELECT * FROM Vehicle"

    db.query( q, (err, data) => {
        if( err) return data.json(err)

        return res.json(data)
    })
})

app.get("/booking", (req, res) => {

    const q= "SELECT * FROM Booking"

    db.query( q, (err, data) => {
        if( err) return data.json(err)

        return res.json(data)
    })
})

app.get("/driver", (req, res) => {

    const q= "SELECT * FROM Driver"

    db.query( q, (err, data) => {
        if( err) return data.json(err)

        return res.json(data)
    })
})

app.get("/payment", (req, res) => {

    const q= "SELECT * FROM Payment"

    db.query( q, (err, data) => {
        if( err) return data.json(err)

        return res.json(data)
    })
})

app.get("/userType", (req, res) => {

    const q= "SELECT * FROM UserType"

    db.query( q, (err, data) => {
        if( err) return data.json(err)

        return res.json(data)
    })
})

app.get("/mainUser", (req, res) => {

    const q= "SELECT * FROM MainUser"

    db.query( q, (err, data) => {
        if( err) return data.json(err)

        return res.json(data)
    })
})

app.get("/books", (req, res) => {

    const q= "SELECT * FROM Books"

    db.query( q, (err, data) => {
        if( err) return data.json(err)

        return res.json(data)
    })
})

app.get("/personDetails", (req, res) => {

    const q= "SELECT * FROM PersonDetails"

    db.query( q, (err, data) => {
        if( err) return data.json(err)

        return res.json(data)
    })
})


app.post("/persons", (req, res) => {

    const q = "INSERT INTO Person (`FirstName`, `LastName`, `StreetNumber`, `StreetName`, `City`, `State`, `Zip` ,`DOB`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
    const values = [req.body.FirstName, req.body.LastName, req.body.StreetNumber, req.body.StreetName, req.body.City, req.body.State, req.body.Zip, req.body.DOB ];

    console.log(req.body.FirstName);
    db.query(q, values, (err, data) => {
        if( err) return res.json(err)

        return res.json("Person has been added successfully")
    })
})    

app.post("/vehicle", (req, res) => {

    const q = "INSERT INTO Vehicle (`VehicleType`, `Availability`, `Capacity`, `PlateNO`) VALUES (?, ?, ?, ?)"
    const values = [req.body.VehicleType, req.body.Availability, req.body.Capacity, req.body.PlateNO];

    // console.log(req.body.FirstName);
    db.query(q, values, (err, data) => {
        if( err) return res.json(err)

        return res.json(req.body.VehicleType + " " + "Vehicle has been added successfully")
    })
})    

app.post("/booking", (req, res) => {

    const q = "INSERT INTO Booking (`BookingTimeStamp`, `fare`, `JourneyStatus`) VALUES (?, ?, ?)"
    const values = [req.body.BookingTimeStamp, req.body.fare, req.body.JourneyStatus];

    // console.log(req.body.FirstName);
    db.query(q, values, (err, data) => {
        if( err) return res.json(err)

        return res.json("Booking has been added successfully")
    })
})    

app.post("/driver", (req, res) => {

    const q = "INSERT INTO Driver (`PersonId`, `DateOfJoining`, `DrivingLicence`) VALUES (?, ?, ?)"
    const values = [req.body.PersonId, req.body.DateOfJoining, req.body.DrivingLicence ];

    // console.log(req.body.FirstName);
    db.query(q, values, (err, data) => {
        if( err) return res.json(err)

        return res.json("Driver has been added successfully")
    })
})    

app.post("/payment", (req, res) => {

    const q = "INSERT INTO Payment (`BookingId`, `Method`, `PaymentTimeStamp`, `Ammount`) VALUES (?, ?, ?,?)"
    const values = [req.body.BookingId, req.body.Method, req.body.PaymentTimeStamp, req.body.Ammount ];

    // console.log(req.body.FirstName);
    db.query(q, values, (err, data) => {
        if( err) return res.json(err)

        return res.json("Payment has been added successfully")
    })
})    


app.post("/userType", (req, res) => {

    const q = "INSERT INTO UserType (`Normal`, `Elite`, `Prime`, `UserId`) VALUES (?, ?, ?,?)"
    const values = [req.body.Normal, req.body.Elite, req.body.Prime, req.body.UserId ];

    // console.log(req.body.FirstName);
    db.query(q, values, (err, data) => {
        if( err) return res.json(err)

        return res.json("UserType has been set successfully")
    })
})    


app.post("/mainUser", (req, res) => {

    const q = "INSERT INTO MainUser (`SubscriptionType`, `PersonId`) VALUES (?, ?)"
    const values = [req.body.SubscriptionType, req.body.PersonId ];

    // console.log(req.body.FirstName);
    db.query(q, values, (err, data) => {
        if( err) return res.json(err)

        return res.json("MainUser has been set successfully")
    })
})    


app.post("/books", (req, res) => {

    const q = "INSERT INTO Books (`BookingId`, `UserId`, `VehicleId`, `PaymentId`) VALUES (?, ?, ?,?)"
    const values = [req.body.BookingId, req.body.UserId, req.body.VehicleId, req.body.PaymentId ];

    // console.log(req.body.FirstName);
    db.query(q, values, (err, data) => {
        if( err) return res.json(err)

        return res.json("Booking has been added successfully")
    })
})    



app.post("/makesPayment", (req, res) => {

    const q = "INSERT INTO MakesPayment (`BookingId`, `UserId`, `VehicleId`, `DriverId`) VALUES (?, ?, ?,?)"
    const values = [req.body.BookingId, req.body.UserId, req.body.VehicleId, req.body.DriverId ];

    // console.log(req.body.FirstName);
    db.query(q, values, (err, data) => {
        if( err) return res.json(err)

        return res.json("MakesPayment has been added successfully")
    })
})    

app.post("/personDetails", (req, res) => {

    const q = "INSERT INTO PersonDetails (`PersonId`, `PhoneNo`) VALUES (?, ?)"
    const values = [req.body.PersonId, req.body.PhoneNo ];

    // console.log(req.body.FirstName);
    db.query(q, values, (err, data) => {
        if( err) return res.json(err)

        return res.json("Person's phoneNumber has been added successfully")
    })
})    


//delete

app.delete("/persons/:id", (req, res) => {

    const {id} = req.params;

    db.query(`DELETE FROM Person WHERE PersonId = ?`, [id], (err, res, fields) => {
        if( err) {console.log(err);

        console.log("Error in deleting from person");
        
        }
        else {
            console.log(`Deleted person with id ${id}`);
            // res.status(204).send()
        }
    })
})


app.delete("/vehicle/:id", (req, res) => {

    const {id} = req.params;

    db.query(`DELETE FROM Vehicle WHERE VehicleId = ?`, [id], (err, res, fields) => {
        if( err) {console.log(err);

        console.log("Error in deleting from Vehicle");
        
        }
        else {
            console.log(`Deleted Vehicle with id ${id}`);
            // res.status(204).send()
        }
    })
})

app.delete("/booking/:id", (req, res) => {

    const {id} = req.params;

    db.query(`DELETE FROM Booking WHERE BookingId = ?`, [id], (err, res, fields) => {
        if( err) {console.log(err);

        console.log("Error in deleting from Booking");
        
        }
        else {
            console.log(`Deleted Booking with id ${id}`);
            // res.status(204).send()
        }
    })
})


app.delete("/driver/:id", (req, res) => {

    const {id} = req.params;

    db.query(`DELETE FROM Driver WHERE DriverId = ?`, [id], (err, res, fields) => {
        if( err) {console.log(err);

        console.log("Error in deleting from Driver");
        
        }
        else {
            console.log(`Deleted Driver with id ${id}`);
            // res.status(204).send()
        }
    })
})


app.delete("/payment/:id", (req, res) => {

    const {id} = req.params;

    db.query(`DELETE FROM Payment WHERE PaymentId = ?`, [id], (err, res, fields) => {
        if( err) {console.log(err);

        console.log("Error in deleting from Payment");
        
        }
        else {
            console.log(`Deleted Payment with id ${id}`);
            // res.status(204).send()
        }
    })
})


app.delete("/userType/:id", (req, res) => {

    const {id} = req.params;

    db.query(`DELETE FROM UserType WHERE SusbscriptionId = ?`, [id], (err, res, fields) => {
        if( err) {console.log(err);

        console.log("Error in deleting from userType");
        
        }
        else {
            console.log(`Deleted userType with id ${id}`);
            // res.status(204).send()
        }
    })
})


app.delete("/mainUser/:id", (req, res) => {

    const {id} = req.params;

    db.query(`DELETE FROM MainUSer WHERE UserId = ?`, [id], (err, res, fields) => {
        if( err) {console.log(err);

        console.log("Error in deleting from MainUser");
        
        }
        else {
            console.log(`Deleted MainUser with id ${id}`);
            // res.status(204).send()
        }
    })
})



app.delete("/books/:id", (req, res) => {

    const {id} = req.params;

    db.query(`DELETE FROM Books WHERE VehicleId = ?`, [id], (err, res, fields) => {
        if( err) {console.log(err);

        console.log("Error in deleting from Vehicle");
        
        }
        else {
            console.log(`Deleted Vehicle with id ${id}`);
            // res.status(204).send()
        }
    })
})



app.delete("/vehicle/:id", (req, res) => {

    const {id} = req.params;

    db.query(`DELETE FROM Vehicle WHERE VehicleId = ?`, [id], (err, res, fields) => {
        if( err) {console.log(err);

        console.log("Error in deleting from Vehicle");
        
        }
        else {
            console.log(`Deleted Vehicle with id ${id}`);
            // res.status(204).send()
        }
    })
})



app.delete("/vehicle/:id", (req, res) => {

    const {id} = req.params;

    db.query(`DELETE FROM Vehicle WHERE VehicleId = ?`, [id], (err, res, fields) => {
        if( err) {console.log(err);

        console.log("Error in deleting from Vehicle");
        
        }
        else {
            console.log(`Deleted Vehicle with id ${id}`);
            // res.status(204).send()
        }
    })
})



app.delete("/vehicle/:id", (req, res) => {

    const {id} = req.params;

    db.query(`DELETE FROM Vehicle WHERE VehicleId = ?`, [id], (err, res, fields) => {
        if( err) {console.log(err);

        console.log("Error in deleting from Vehicle");
        
        }
        else {
            console.log(`Deleted Vehicle with id ${id}`);
            // res.status(204).send()
        }
    })
})



app.delete("/vehicle/:id", (req, res) => {

    const {id} = req.params;

    db.query(`DELETE FROM Vehicle WHERE VehicleId = ?`, [id], (err, res, fields) => {
        if( err) {console.log(err);

        console.log("Error in deleting from Vehicle");
        
        }
        else {
            console.log(`Deleted Vehicle with id ${id}`);
            // res.status(204).send()
        }
    })
})



app.listen(4000, () => {
    console.log("Connected to the backend");
})
