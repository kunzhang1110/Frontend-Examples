// Basic Types
let id: number = 5
let myName: string = 'Kun'
let isLoading: boolean = true
let x: any = 'Hello'

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'Hello']

// Tuple
let person: [number, string, boolean] = [1, 'Brad', true]
// Tuple Array
let employees: [number, string][]

employees = [
  [1, 'Brad'],
  [2, 'John'],
]

// Union
let pid: string | number
pid = '22'

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// Objects
type User = {
  id: number
  name: string
}

const user: User = {
  id: 1,
  name: 'John',
}

// Type Assertion
let cid: any = 1
let cid1 = <number>cid
let cid2 = cid as number

// Functions
function addNum(x: number, y: number): number {
  return x + y
}

// Void
function log(message: string | number): void {
  console.log(message)
}

// Interfaces:  define the shape of an object
interface UserInterface {
  readonly id: number
  name: string
  age?: number //optional
  add(x: number, y: number): number
}

// Objects implementing an interface
const user1: UserInterface = {
  id: 1,
  name: 'John',
  add: (x: number, y: number): number => x + y
}
//user1.id=2; //error

//Function Interface
interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y

// Classes
class Person implements UserInterface {
  id: number
  name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  add(x: number, y: number): number {
    return x + y
  }
}

const person1 = new Person(1, 'Kun')
person1.id = 2 //no error; the readonly in interface does not affect the class implementing it 

// Subclasses
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(30, 'Kun', 'Developer')

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])

interface UserInterface2<IDType> {
  id: IDType
}
let user2: UserInterface2<string> = { id: '1' }