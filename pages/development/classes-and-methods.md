# Classes and methods

## Method naming

### Use "get" word, if you want to return something

```ts
function getAppUser(): User {}
```

### Use "set" word, if you want to set value for something

```ts
function setAppUser(user: User): void {}
```

### Use "find" word, if you want to find something, using filters

If it was not found, return `null`.

```ts
function findUser(filters: Filter[]): User | null {}
```

There are situations when, if a value is not found, a value not from expected interval is returned. For example, you will get `-1` as a value.

```ts
"car".search("a"); // 1
"car".search("c"); // 0
"car".search("d"); // -1
```

So, if we expect number, we will get a number. It's correct.

If we expect string, we will get a string. It's correct too. So, if user has no last name, we will get an empty string.

```ts
function findLastName(filters: Filter[]): string {}
```

But what we should return as "not found" value, if we're working with objects?

```ts
function findUser(filters: Filter[]): User {}
```

If you work with JS, you can use `undefined` value. But when you're getting data from API, you can't get `undefined`. So, you will get `null` value. That's the reason, why I think that `null` value is more preferable.

```ts
function findUser(filters: Filter[]): User | null {}
```

And the last case is an array. If you can't find, you will get an empty array.

```ts
function findUsers(filters: Filter[]): User[] {}
```

### If you want to return an array of entities

```ts
function getUsers(filters: Filter[]): User[] {}
```

## Method as a part of class

Если метод является частью класса, то в целях сокращения лучше сократить названия методов, исходя из того, что нам уже известна сущность и нам не нужно повторяться.

```ts
class UserService {
  find(): User[] {}
}
```

## API classes and methods

### Typical CRUD service

```ts
// GOOD
class UserService {
  find(filters: Filter[]): User[] {} // find all users (using parameters/filters or without them)
  create(dto: UserCreateDto): User {} // create user
  get(id: string): User {} // get user by ID or GUID
  update(id: string, dto: UserUpdateDto): User {} // update user
  delete(id: string): boolean {} // delete user
}

// NOT SO GOOD
class UserService {
  findAll(filters: Filter[]): User[] {} // find all users (using parameters/filters or without them)
  findUnique(filters: Filter[]): User {} // find unique user (using parameters/filters)
  create(dto: UserCreateDto): User {} // create user
  get(id: string): User {} // get user by ID or GUID
  update(id: string, dto: UserUpdateDto): User {} // update user
  delete(id: string): boolean {} // delete user
}

// BAD, because it's complicated
class UserService {
  findAll(filters: Filter[]): User[] {} // find all users (using parameters/filters or without them)
  findUnique(filters: Filter[]): User {} // find unique user (using parameters/filters)
  search(query: string): User[] {} // find unique user (using parameters/filters)
  create(dto: UserCreateDto): User {} // create user
  get(id: string): User {} // get user by ID or GUID
  update(id: string, dto: UserUpdateDto): User {} // update user
  delete(id: string): boolean {} // delete user
}
```

In case when we use a special word "find", we understand that we want to find something, but we don't know the result. If we don't get it, we should expect an empty array `[]` for "findAll" and `null` - for "find" methods.

In case when we use a special word "get", we understand that we want to get existing object with unique identifier. If we don't get it, we should expect an error.

Methods `create`, `get`, `update` and `delete` are typical methods for CRUD operations. Every time when we use these methods, we always use ID of existing object (except `create`), so we don't need to duplicate "ByID" in these methods.

Если класс является утилитарным, то лучше конкретизировать методы, так как они могут быть самые разнообразные.

```ts
class UserUtility {
  findAllFriends() {}
}
```

Don't create nested methods

```ts
function getUsers() {
  return UserService.getAll();
}
```
