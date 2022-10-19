import { RequestHandler } from "express";
import { Pet } from "../models/Pet";



export const defaultPet: RequestHandler = (req, res, next) => {
    res.redirect('/Pet');
}

export const addPetPage: RequestHandler = (req, res, next) => {
    res.render('add-Pet');
}

export const allPets: RequestHandler = async (req, res, next) => {
    let petList: Pet[] = await Pet.findAll();
    res.render('allPets',{petList});
}


export const onePet: RequestHandler = async (req, res, next) => {
    let itemId = req.params.id;
    let petItem: Pet | null = await Pet.findByPk(itemId);

    if (petItem) {
        res.render('PetDetails', {foundPet: petItem})
    } 
    else {
        res.status(404).render('error', { message: 'Pet not found' });
    }
}

export const createPet: RequestHandler = async (req, res, next) => {
    let newPet: Pet = req.body;
    await Pet.create(newPet);
    res.redirect('/Pet');
}

export const editPetPage: RequestHandler = async (req, res, next) => {
    let itemId = req.params.id;
    let petItem: Pet | null = await Pet.findOne({
        where: { id: itemId }
    });

    if (petItem) {
        res.render('edit-Pet', { foundPet: petItem });
    }
    else {
        res.status(404).render('error', { message: 'Pet not found' });
    }
}

export const editPet: RequestHandler = async (req, res, next) => {
    let itemId = req.params.id;
    let updatedItem: Pet = req.body;

    let [updated] = await Pet.update(updatedItem, {
        where: { id: itemId }
    });

    if (updated === 1) {
        res.redirect('/Pet/' + itemId);
    }
    else {
        res.render('error', { message: 'Pet could not be updated' });
    }
}


export const deletePet: RequestHandler = async (req, res, next) => {
    let itemId = req.params.id;

    let deleted = await Pet.destroy({
        where: { id: itemId }
    });

    if (deleted) {
        res.redirect('/Pet')
    }
    else {
        res.status(404).render('error', { message: 'Cannot find item' });
    }
}  