import express from 'express';
import {Question} from '../models/question.js';

const router = express.Router();



//GET
router.get('/', (_, res)=>{
    console.log('hi from questions GET')
  //test data call
    // const questions = [
    //     { _id: 1, name: 'Vladimir Harkonnen', content: 'Am I the drama?' },
    //     { _id: 2, name: 'Lady Jessica', content: 'Is Paul the Kwisatz Haderach?' },
    //     { _id: 3, name: 'Paul Atreides', content: 'Why are my dreams so sandy?' },
    // ];
    // res.json(questions)
  //grab all questions
    Question.find()
        .then(questions => res.json(questions))
            .catch(err => res.status(404).json(err));
});



//POST
router.post('/', (req, res)=>{
    const newQuestion = Question({
        name: req.body.name,
        content: req.body.content,
        link: req.body.link,
    });
    newQuestion.save()
        .then(question => res.json(question))
            .catch(err => res.status(422).json(err))
});



//PUT
router.patch('/:question_id', (req, res)=>{
    const id = req.params.question_id;
    console.log(`hi from questions EDIT ${id}`);
    Question.findOneAndUpdate({_id: id}, {isAnswered: true}, {new: true})
        .then(question => res.json(question))
            .catch(err => res.status(404).json(err))
});



//DELETE
router.delete('/:question_id', (req, res)=>{
    //you could grab the id from the req.body or use the params
    // const id = req.body.id;
    const id = req.params.question_id;
    console.log(`hi from questions DELETE ${id}`);

    Question.findOneAndDelete({_id: id})
        .then(question => res.json({_id: question.id}))
            .catch(err => res.status(404).json(err))
});


export const questions = router;
