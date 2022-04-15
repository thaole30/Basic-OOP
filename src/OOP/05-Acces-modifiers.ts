class CourseSer {
    protected id: string;
    name: string;
    price: number;
    private password: string;
constructor(id: string, name: string, price: number, password: string){
    this.id = id;
    this.name = name;
    this.price = price;
    this.password = password;
}
    showCourseInfo(): void{
        console. log(`${this.id} - ${this.name} - ${this.price}`);
    }
}


class CourseBlockChain extends CourseSer {
     author: string;

     constructor(id: string, name: string, price: number, password: string, author: string) {
         super(id, name, price, password);  //thừa kế thuộc tính id name price từ class parent
         this.author = author;
     }

     showCourseInfo() {
         super.showCourseInfo();
         console.log(`author: ${this.author} - id: ${this.id}`);  //* id is protected in child class and can be accessed in child class
        //  console.log("password", this.password); //! => error, password is private in CourseSer => k thể truy cập ở child class
     }
}

var myCourseObj = new CourseSer("BC01", "OOP Basic", 100, "12345");
myCourseObj.showCourseInfo();
console.log("------course name------", myCourseObj.name);
// console.log("-----password course------", myCourseObj.password);  //! => error, password is private in CourseSer => k thể truy cập ở ngoài parent class


var myCourseMobileObj = new CourseBlockChain("dn01", "BlockChain solidity", 500, "12345", "nhi tran");
myCourseMobileObj.showCourseInfo();

/**
 *                  inside              outside             child class
 * public:             +                   +                    +
 * private:            +                   -                    -
 * projected:          +                   -                    +
 */