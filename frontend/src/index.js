//unfinished DOM manip approach




const render = () => {
    const state = {
        questions: [
            { _id: 1, name: 'Vladimir Harkonnen', content: 'Am I the drama?', isAnswered: false, link: '',},
            { _id: 2, name: 'Lady Jessica', content: 'Is Paul the Kwisatz Haderach?', isAnswered: false, link: '', },
            { _id: 3, name: 'Paul Atreides', content: 'Why are my dreams so sandy?', isAnswered: false, link: '', }
        ],
    };


    const root = document.getElementById('root');
    const App = document.createElement('div');


//build form
    const QuestionForm = document.createElement('form');
    const h1 = document.createElement('h1');
    h1.innerText = 'Submit a question!';

    const nameInput = document.createElement('input');
    nameInput.name = 'name';
    nameInput.type = 'text';
    nameInput.placeholder = 'NAME';

    const linkInput = document.createElement('input');
    nameInput.name = 'link';
    nameInput.type = 'text';
    nameInput.placeholder = 'LINK';

    const contentForm = document.createElement('textarea');
    contentForm.rows = 3;
    contentForm.name = 'content';
    contentForm.type = 'text';
    contentForm.placeholder = 'ASK AWAY. . .';

    const submitFormBttn = document.createElement('button');
    submitFormBttn.type = 'submit';
    submitFormBttn.innerText = 'SUBMIT';

    QuestionForm.append(h1, nameInput, contentForm, linkInput, submitFormBttn);

    QuestionForm.addEventListener('submit', e => {
        e.preventDefault();
        if(!content.value) return content.placeholder = 'Must Submit A Question';

        let data = {
            _id: Math.floor(Math.random() * 1000),
            name: nameInput.value.trim(),
            content: contentForm.value.trim(),
            link: linkInput.trim(),
        };
        nameInput = '';
        contentForm.placeholder = 'ASK AWAY. . .';
        linkInput = '';
        contentForm = '';
    });




    const Questions = document.createElement('div');

    const generateQuestionsList = () => {
        if(!state.questions.length) return Questions.innerText = 'No Questions Yet!';

//make individual questions
        state.questions.reverse().forEach((q, i) => {
            const question = document.createElement('div');
            question.key = i;
            const name = document.createElement('span');
            name.innerText = q.name;
            const content = document.createElement('h3');
            content.innerText = q.content;
            // const link = document.createElement('a');
            // link.innerText = q.link;
            const isAnswered = document.createElement('button');
            isAnswered.innerText = q.isAnswered ? 'Answered!' : 'Still Open..';
            const deleteBttn = document.createElement('button');
            deleteBttn.innerText = 'DELETE';

            question.append(name, content, isAnswered, deleteBttn);
            Questions.appendChild(question);
        });
    };


    App.append(QuestionForm, Questions);
    root.append(App);
    generateQuestionsList();
};

document.addEventListener('DOMContentLoaded', () => {
    render();
});
