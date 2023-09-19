// Interface are used to describe the shape of an object or function signature just like types but the syntax is different

interface IUser {
  username: string
  email: string
  name: string
  age?: number
  website: string
  active: boolean
}

// Extending Interfaces and types

interface IWork {
    company: string,
    position: string
}

interface IPerson extends IWork {
    name: string
    age: number
}

// Extending Types

type TWork = {
    company: string,
    position: string
}

type TPerson = TWork & {
    name: string
    age: number
}