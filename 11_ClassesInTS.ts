/**
 * Classes in TS
 */

class NewProduct {
    public name: string;
    private Prodprice: number|undefined;
    readonly category: string

    constructor(name: string, category: string, Prodprice?: number) {
        this.name = name;
        this.category = category;
        this.Prodprice = Prodprice;
    }

    display() : void {
        console.log(this.name, this.category, this.Prodprice);
    }

    setPrice(p: number) : void {
        if(p <= 0) return;
        this.Prodprice = p;
    }
    /*
    // the readonly property donot allow the modification of values, once assigned via constructor
    // it behaves just like const keyword
    buggy(catg: string) : void {
        this.category = catg;
    }
    */
};

const prod1 = new NewProduct("iphone", "electronics", 1000000);
prod1.display();

const prod2 = new NewProduct("mac", "electronics");
prod2.display();
