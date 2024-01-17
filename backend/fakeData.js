import { faker } from '@faker-js/faker';

export let users = [
    { id: 1166, name:"john", lastname: "doe" ,username: "jdoe", email: 'john@doe', password: 'password', profilePicture: faker.image.avatar() },
    { id: 2895, name:"jane", lastname: "doe", username: "jadoe", email: 'jane@doe', password: 'password', profilePicture: faker.image.avatar() },
];

export const withoutPassword = (user)=>{
    let pipedUser = {...user}
    delete pipedUser?.password
    return pipedUser;
}


//simulated population
export const posts = [{
    owner : withoutPassword(users[1]),
    id: "d99296c7-ef77-4b10-ac16-5cf0207f9dcb",
    images: [
        faker.image.url(),
        faker.image.url(),
        faker.image.url()
    ],
    description: faker.lorem.sentence({min: 12, max: 15}),
    postedAt: faker.date.anytime()
},
{
    owner : withoutPassword(users[0]),
    id: "98b639e6-c549-4191-9b34-18dc8407932b",
    images: [
        faker.image.url(),
        faker.image.url(),
        faker.image.url()
    ],
    description: faker.lorem.sentence({min: 12, max: 15}),
    postedAt: faker.date.anytime()
},
{
    owner : withoutPassword(users[0]),
    id: "3090d930-2d11-48be-8294-959299ba2ce7",
    images: [
        faker.image.url(),
        faker.image.url(),
        faker.image.url()
    ],
    description: faker.lorem.sentence({min: 12, max: 15}),
    postedAt: faker.date.anytime()
}
]