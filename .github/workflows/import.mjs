import readline from 'readline';
import {Student} from './exportstudent.mjs';

const r1 = readline.createInterface({

    input: process.stdin,

    output: process.stdout

});

r1.question( 'please enter your name:', (answer1)=>{
    r1.question ('please enter your matric number:',(answer2) => {
        r1.question ('please enter your major:', (answer3) => {

            let student = new Student (answer1,answer2,answer3);
            console.log(student.display());
            r1.close();
        
                  
        });
    });
});
