import { defineType } from "sanity";

export const  customer=defineType({
    name:"customer",
    title:"customer",
    type:"document",
    fields:[
        {
            name: "firstName",
            title: "First Name",
            validation: (rule) => rule.required(),
            type: "string"
        },
        {
            name: "lastName",
            title: "Last Name",
            validation: (rule) => rule.required(),
            type: "string"
        },
        {
            name: "Company",
            title: "Company",
            validation: (rule) => rule.required(),
            type: "string"
        },
        {
            name: "Country",
            title: "Country ",
            validation: (rule) => rule.required(),
            type: "string"
        },
        {
            name: "address",
            title: "address ",
            validation: (rule) => rule.required(),
            type: "string"
        },
        {
            name: "City",
            title: "City",
            validation: (rule) => rule.required(),
            type: "string"
        },
        {
            name: "Province",
            title: "Province",
            validation: (rule) => rule.required(),
            type: "string"
        },
        {
            name: "ZIP",
            title: "ZIP ",
            validation: (rule) => rule.required(),
            type: "number"
        },
        {
            name: "Phone",
            title: "Phone",
            validation: (rule) => rule.required(),
            type: "number"
        },
        {
            name: "Email",
            title: "Email ",
            validation: (rule) => rule.required(),
            type: "string"
        },
        {
            name: "Additional",
            title: "Additional",
            type: "string"
        },
        
    ]
})



// {
//     "ZIP": 97838,
//     "_rev": "r2E0z2FEs4Z73omBERCwH4",
//     "City": "Hermiston",
//     "_id": "084b2170-2443-46bf-9313-009cb229b532",
//     "_updatedAt": "2025-02-02T11:38:09Z",
//     "Company": "Furniro",
//     "address": "2nd",
//     "_type": "customr",
//     "Province": "Oregon",
//     "firstName": "sajeel",
//     "Email": "gsggs@gmail.com",
//     "Phone": 4374239984,
//     "_createdAt": "2025-02-02T11:26:58Z",
//     "Country": "United States",
//     "lastName": "ullah khan",
//     "Additional": "urireyfye"
//   }