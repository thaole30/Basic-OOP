class Course {
    id: string;
    name: string;
    price: number;
constructor(id: string, name: string, price: number){
    this.id = id;
    this.name = name;
    this.price = price;
}
    showCourseInfo(): void{
        console. log(`${this.id} - ${this.name} - ${this.price}`);
    }
}


class CourseMobile extends Course {
     author: string;

     constructor(id: string, name: string, price: number, author: string) {
         super(id, name, price);  //thừa kế thuộc tính id name price từ class parent
         this.author = author;
     }

     showCourseInfo() {
         super.showCourseInfo();
         console.log(this.author);
     }
}

var courseObj = new Course("BC01", "OOP Basic", 100);
courseObj.showCourseInfo();


var courseMobileObj = new CourseMobile("dn01", "React Native", 200, "Nhi Tran");
courseMobileObj.showCourseInfo();