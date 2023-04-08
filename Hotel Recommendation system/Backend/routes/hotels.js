import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
  getHotelsByRating
} from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();


// get all hotels in a city
router.get("/:cityname", getHotels);
router.post("/updateHotel",updateHotel);
router.get("/getHotelsByRating/:rating", getHotelsByRating);

// router.get("/countByCity", countByCity);
// router.get("/countByType", countByType);
// router.get("/room/:id", getHotelRooms);





//CREATE
// router.post("/", verifyAdmin, createHotel);
//UPDATE
// router.put("/:id", verifyAdmin, updateHotel);
//DELETE
// router.delete("/:id", verifyAdmin, deleteHotel);
//GET
// router.get("/find/:id", getHotel);
//GET ALL


export default router;