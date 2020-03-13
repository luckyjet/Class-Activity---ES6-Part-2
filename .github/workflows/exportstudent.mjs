class Student{
    constructor(name,matricNo,major){
        this.name=name;
        this.matricNo=matricNo;
        this.major=major;
    }
    set Name(name){
        this.name=name;
    }
    get Name(){
        return this.name;
    }
    set MatricNo(matricNo){
        this.matricNo;
    }
    get MatricNo(){
        return this.matricNo;
    }
    set Major(major){
        this.major;
    }
    get Major(){
        return this.major;
    }
    display(){
        console.log( `Name: ${this.name}`);
        console.log( `Matric No : ${this.matricNo}`);
        console.log( `Major: ${this.major}` );
    }

    
}

export {Student} ;
