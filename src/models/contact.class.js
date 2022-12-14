
export class Contact {
    name = '';
    email = '';
    phone = '';
    avatar = ''
    connect = false;

    constructor(name, email, phone, avatar,connect){
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.avatar = avatar;
        this.connect = connect;
    }

}