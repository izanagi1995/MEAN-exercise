export class PhonebookEntryModel {

    private __id: string;
    private _firstName: string;
    private _lastName: string;
    private _phoneNumber: string;

    constructor() {}

    static fromJSON(json: any): PhonebookEntryModel {
        const entry = new PhonebookEntryModel();
        entry.__id = json._id;
        entry._firstName = json.firstName;
        entry._lastName = json.lastName;
        entry._phoneNumber = json.phoneNumber;
        return entry;
    }

    get _id(): string {
        return this.__id;
    }

    set _id(value: string) {
        if (this.__id != null) { // It's a double equal to allow checking null or undefined
            throw new Error('The _id is already set, you cannot change the _id');
        } else {
            this.__id = value;
        }
    }

    get firstName(): string {
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    get phoneNumber(): string {
        return this._phoneNumber;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    set phoneNumber(value: string) {
        this._phoneNumber = value;
    }

    public toObject(): Object {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            phoneNumber: this.phoneNumber
        };
    }
}
