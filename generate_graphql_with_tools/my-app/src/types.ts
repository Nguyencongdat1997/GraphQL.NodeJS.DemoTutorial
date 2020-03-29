export interface Context {
  data: Data
}

export interface Data {
  posts: Post[]
  users: User[]
  idProvider: () => string
}

export interface User_name {
  lastName: string | null
  firstName: string | null
}
export interface Role {
  _id: string | null
  title: string | null
}
export interface User {
  _id: string | null
  role: string | null
}