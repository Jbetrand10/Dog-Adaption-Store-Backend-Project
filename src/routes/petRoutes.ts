import { Router } from 'express';
import { allPets, onePet, addPetPage, createPet, deletePet, editPet, editPetPage } from '../controllers/petsController';


const router = Router();

router.get('/', allPets);

router.get('/new', addPetPage);

router.post('/new', createPet);

router.post('/delete/:id', deletePet);

// POST /coffee/edit/:coffeeId - render the edit coffee page
router.post('/edit/:id', editPet);

router.get('/:id', onePet);

// GET /coffee/edit/:coffeeId - render the edit coffee page
router.get('/edit/:id', editPetPage);

export default router;