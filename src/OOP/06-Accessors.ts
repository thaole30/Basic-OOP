class Phone {
    name: string;
    //! đối với property private muốn get value và set lại value => sử dụng method get và set 
    //* note: có _ trước tên property
    private _price: number;   
    
    constructor(name: string, price: number) {
        this.name = name;
        this._price = price;
    }

    showInfo(): void {
        console.log(`${this.name} - ${this._price}`);
    }

    
    public get price() : number {
        return this._price
    }
    
    
    public set price(v : number) {
        this._price = v;
    }
    

}


var samsung = new Phone("samsung note 10", 1000);
console.log(samsung);
console.log("---phone name---", samsung.name);
console.log("---phone price---", samsung.price);  //khi truy cập đến price property thì sẽ gọi hàm get price để lấy value về
samsung.showInfo();

samsung.name = "samsung galaxy";
console.log("---phone name---", samsung.name);

samsung.price = 2000;
console.log("---phone price---", samsung.price);
