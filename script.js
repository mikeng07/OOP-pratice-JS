console.log("test");

class Item{

    constructor(name,price)
    {
        this.name = name;
        this.price = price;
    }

    desbribe(){

        return `${this.name} costs ${this.price}.`;
    }
}

class Order {
    constructor(name){
        
        this.name = name;
        this.items = [];

        }
        addItem (item){
            if (item instanceof Item){
                this.items.push (item);
            }
            else{
                throw new Error (` you can only add an instance of Item. Argument is not a Item: ${items}`)
            }

    }
        desbribe(){

            return `${this.name} has ${this.items.length} items.`;
        }

}

class Menu{
    constructor(){
        this.orders = [];
        this.selectedOrder=null;
    }

    start (){
        let selection = this.showMainMenuOptions();
        while (selection != 0){
            switch(selection){
                case '1': 
                    this.createOrder();
                    break;
                case '2':
                    this.viewOrder();
                    break;
                case '3':
                    this.deleteOrder();
                    break;
                case '4':
                    this.displayOrders();
                    break;
                default:
                    selection = 0; 

            }
            selection = this.showMainMenuOptions();
        }
        alert('Good bye! ');
    }
    showOrderMenuOptions(orderInfo){
        return prompt(`
        0) back
        1) create Item
        2) delete Item
        ---------------------
        ${orderInfo}
        `);
    }
    showMainMenuOptions(){
        return prompt (`
        0) exit
        1) create new Order
        2) view Order
        3) delete Order
        4) display all Orders 
        `)
    }

    displayOrders(){

        let orderString = '';
        for (let i = 0; i < this.orders.length; i ++)
        {
            orderString += i + ')' + this.orders[i].name + `\n`;
        }

        alert(orderString);
    }
    createOrder(){
        let name =prompt('Enter name for new Order: ');
        this.orders.push (new Order(name));
    }
    viewOrder()
    {

        let index = prompt('Enter the index of the Order you wish to view: ');
        if(index > -1 && index <this.orders.length){
            this.selectedOrder = this.orders[index];
            let description = 'Order name: ' + this.selectedOrder.name + `\n`;
            for (let i = 0; i< this.selectedOrder.items.length; i++){
                description += i + ')' + this.selectedOrder.items[i].name
                 + ' - '+ this.selectedOrder.items[i].price + `\n`; 
            }
            let selection = this.showOrderMenuOptions(description);
            switch(selection){
                case '1':
                    this.createItem();
                    break;
                case '2':
                    this.deleteItem();
                    break;
            }
        }
    }
    deleteOrder(){
        let index = prompt('Enter the index of the order you wish to delete: ');
        if (index > -1 && index < this.orders.length )
        {
            this.orders.splice(index,1); 
        }
    }
    createItem(){
        let name = prompt('Enter name for new item: ');
        let price = prompt ('Enter price for new item:');
        this.selectedOrder.items.push(new Item(name,price));
    }
    deleteItem(){
    let index = prompt('Enter the index of item you wish to delete: ');
    if (index > -1 && index <this.selectedOrder.items.length){
        this.selectedOrder.items.splice(index,1);
    }
    }
}

let menu = new Menu ()
menu.start();