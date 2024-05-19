# Методы

Метод должен выполнять какую-то одну функцию, название которой должно быть отражено в названии.

```ts
function getUsers() {}
```

Если метод является частью класса, то в целях сокращения лучше сократить названия методов, исходя из того, что нам уже известна сущность и нам не нужно повторяться.

```ts
class UserService {
  findAll() {} // find all users (using parameters or without them)
  findOne() {} // find one user (using parameters)
  get() {} // get user by ID or GUID
  create() {} // create user
  update() {} // update user
  delete() {} // delete user
}
```

In case when we use a special word "find", we understand that we want to find something, but we don't know the result. If we don't get it, we should expect an empty array `[]` for "findAll" and `null` - for "find" methods.

In case when we use a special word "get", we understand that we want to get existing object with unique indentificator. If we don't get it, we should expect an error.

Если класс является утилитарным, то лучше конкретизировать методы, так как они могут быть самые разнообразные.

```ts
class UserUtility {
  findAllFriends() {}
}
```
