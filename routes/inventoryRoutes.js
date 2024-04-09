const express = require('express')
const authMiddelware = require('../middlewares/authMiddelware')
const { createInventoryController, getInventoryController, getDonarsController, getHospitalController, getOrgnaisationController, getOrganisationForHospitalController, getInventoryHospitalController, getRecentInventoryController } = require('../controllers/inventoryController')


const router = express.Router();

//routes
// ADD INVENTORY || POST
router.post('/create-inventory', authMiddelware, createInventoryController);

// GET ALL BLOOD RECORDS
router.get('/get-inventory', authMiddelware, getInventoryController);


// GET RECENT BLOOD RECORDS
router.get('/get-recent-inventory', authMiddelware, getRecentInventoryController);

// GET POST BLOOD RECORDS
router.post('/get-inventory-hospital', authMiddelware, getInventoryHospitalController);

// GET organisation RECORDS
router.get('/get-organisation', authMiddelware, getOrgnaisationController);

// GET organisation RECORDS for HOSPITAL
router.get('/get-organisation-for-hospital', authMiddelware, getOrganisationForHospitalController);
 
// GET HOSPITALS RECORDS
router.get('/get-hospitals', authMiddelware, getHospitalController);

// GET DONAR RECORDS
router.get('/get-donars', authMiddelware, getDonarsController);
module.exports = router;