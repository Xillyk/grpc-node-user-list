// package: users
// file: users.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class FilterRequest extends jspb.Message { 
    getDepartment(): string;
    setDepartment(value: string): FilterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FilterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FilterRequest): FilterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FilterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FilterRequest;
    static deserializeBinaryFromReader(message: FilterRequest, reader: jspb.BinaryReader): FilterRequest;
}

export namespace FilterRequest {
    export type AsObject = {
        department: string,
    }
}

export class User extends jspb.Message { 
    getId(): number;
    setId(value: number): User;
    getFirstname(): string;
    setFirstname(value: string): User;
    getLastname(): string;
    setLastname(value: string): User;
    getMaidenname(): string;
    setMaidenname(value: string): User;
    getAge(): number;
    setAge(value: number): User;
    getGender(): string;
    setGender(value: string): User;
    getEmail(): string;
    setEmail(value: string): User;
    getPhone(): string;
    setPhone(value: string): User;
    getUsername(): string;
    setUsername(value: string): User;
    getPassword(): string;
    setPassword(value: string): User;
    getBirthdate(): string;
    setBirthdate(value: string): User;
    getImage(): string;
    setImage(value: string): User;
    getBloodgroup(): string;
    setBloodgroup(value: string): User;
    getHeight(): number;
    setHeight(value: number): User;
    getWeight(): number;
    setWeight(value: number): User;
    getEyecolor(): string;
    setEyecolor(value: string): User;

    hasHair(): boolean;
    clearHair(): void;
    getHair(): User.Hair | undefined;
    setHair(value?: User.Hair): User;
    getIp(): string;
    setIp(value: string): User;

    hasAddress(): boolean;
    clearAddress(): void;
    getAddress(): User.Address | undefined;
    setAddress(value?: User.Address): User;
    getMacaddress(): string;
    setMacaddress(value: string): User;
    getUniversity(): string;
    setUniversity(value: string): User;

    hasBank(): boolean;
    clearBank(): void;
    getBank(): User.Bank | undefined;
    setBank(value?: User.Bank): User;

    hasCompany(): boolean;
    clearCompany(): void;
    getCompany(): User.Company | undefined;
    setCompany(value?: User.Company): User;
    getEin(): string;
    setEin(value: string): User;
    getSsn(): string;
    setSsn(value: string): User;
    getUseragent(): string;
    setUseragent(value: string): User;

    hasCrypto(): boolean;
    clearCrypto(): void;
    getCrypto(): User.Crypto | undefined;
    setCrypto(value?: User.Crypto): User;
    getRole(): string;
    setRole(value: string): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        id: number,
        firstname: string,
        lastname: string,
        maidenname: string,
        age: number,
        gender: string,
        email: string,
        phone: string,
        username: string,
        password: string,
        birthdate: string,
        image: string,
        bloodgroup: string,
        height: number,
        weight: number,
        eyecolor: string,
        hair?: User.Hair.AsObject,
        ip: string,
        address?: User.Address.AsObject,
        macaddress: string,
        university: string,
        bank?: User.Bank.AsObject,
        company?: User.Company.AsObject,
        ein: string,
        ssn: string,
        useragent: string,
        crypto?: User.Crypto.AsObject,
        role: string,
    }


    export class Hair extends jspb.Message { 
        getColor(): string;
        setColor(value: string): Hair;
        getType(): string;
        setType(value: string): Hair;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Hair.AsObject;
        static toObject(includeInstance: boolean, msg: Hair): Hair.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Hair, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Hair;
        static deserializeBinaryFromReader(message: Hair, reader: jspb.BinaryReader): Hair;
    }

    export namespace Hair {
        export type AsObject = {
            color: string,
            type: string,
        }
    }

    export class Coordinates extends jspb.Message { 
        getLat(): number;
        setLat(value: number): Coordinates;
        getLng(): number;
        setLng(value: number): Coordinates;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Coordinates.AsObject;
        static toObject(includeInstance: boolean, msg: Coordinates): Coordinates.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Coordinates, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Coordinates;
        static deserializeBinaryFromReader(message: Coordinates, reader: jspb.BinaryReader): Coordinates;
    }

    export namespace Coordinates {
        export type AsObject = {
            lat: number,
            lng: number,
        }
    }

    export class Address extends jspb.Message { 
        getAddress(): string;
        setAddress(value: string): Address;
        getCity(): string;
        setCity(value: string): Address;
        getState(): string;
        setState(value: string): Address;
        getStatecode(): string;
        setStatecode(value: string): Address;
        getPostalcode(): string;
        setPostalcode(value: string): Address;

        hasCoordinates(): boolean;
        clearCoordinates(): void;
        getCoordinates(): User.Coordinates | undefined;
        setCoordinates(value?: User.Coordinates): Address;
        getCountry(): string;
        setCountry(value: string): Address;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Address.AsObject;
        static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Address;
        static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
    }

    export namespace Address {
        export type AsObject = {
            address: string,
            city: string,
            state: string,
            statecode: string,
            postalcode: string,
            coordinates?: User.Coordinates.AsObject,
            country: string,
        }
    }

    export class Bank extends jspb.Message { 
        getCardexpire(): string;
        setCardexpire(value: string): Bank;
        getCardnumber(): string;
        setCardnumber(value: string): Bank;
        getCardtype(): string;
        setCardtype(value: string): Bank;
        getCurrency(): string;
        setCurrency(value: string): Bank;
        getIban(): string;
        setIban(value: string): Bank;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Bank.AsObject;
        static toObject(includeInstance: boolean, msg: Bank): Bank.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Bank, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Bank;
        static deserializeBinaryFromReader(message: Bank, reader: jspb.BinaryReader): Bank;
    }

    export namespace Bank {
        export type AsObject = {
            cardexpire: string,
            cardnumber: string,
            cardtype: string,
            currency: string,
            iban: string,
        }
    }

    export class Company extends jspb.Message { 
        getDepartment(): string;
        setDepartment(value: string): Company;
        getName(): string;
        setName(value: string): Company;
        getTitle(): string;
        setTitle(value: string): Company;

        hasAddress(): boolean;
        clearAddress(): void;
        getAddress(): User.Address | undefined;
        setAddress(value?: User.Address): Company;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Company.AsObject;
        static toObject(includeInstance: boolean, msg: Company): Company.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Company, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Company;
        static deserializeBinaryFromReader(message: Company, reader: jspb.BinaryReader): Company;
    }

    export namespace Company {
        export type AsObject = {
            department: string,
            name: string,
            title: string,
            address?: User.Address.AsObject,
        }
    }

    export class Crypto extends jspb.Message { 
        getCoin(): string;
        setCoin(value: string): Crypto;
        getWallet(): string;
        setWallet(value: string): Crypto;
        getNetwork(): string;
        setNetwork(value: string): Crypto;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Crypto.AsObject;
        static toObject(includeInstance: boolean, msg: Crypto): Crypto.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Crypto, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Crypto;
        static deserializeBinaryFromReader(message: Crypto, reader: jspb.BinaryReader): Crypto;
    }

    export namespace Crypto {
        export type AsObject = {
            coin: string,
            wallet: string,
            network: string,
        }
    }

}

export class UserResponse extends jspb.Message { 
    clearUsersList(): void;
    getUsersList(): Array<User>;
    setUsersList(value: Array<User>): UserResponse;
    addUsers(value?: User, index?: number): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UserResponse): UserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserResponse;
    static deserializeBinaryFromReader(message: UserResponse, reader: jspb.BinaryReader): UserResponse;
}

export namespace UserResponse {
    export type AsObject = {
        usersList: Array<User.AsObject>,
    }
}
