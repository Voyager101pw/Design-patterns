# Прототип
Паттерн с помощью которого можно создать копию объекта, везде где это требуется.  


```ts
interface GitAPI {
  clone: () => Object;
  // others feature
}

class Repository implements GitAPI {
  constructor(
    public userName: string,
    public repoName: string,
    public branchName: string,
  ) {
    this.userName = userName;
    this.repoName = repoName;
    this.branchName = branchName;
  }

  // ...
  // ... others feature
  // ...

  clone() { // Pattern Prototype
    return new Repository(this.userName, this.repoName, this.branchName);
  }
}

const prototype = new Repository('Voyager101', 'Design-Patterns', 'main');

const copy1 = prototype.clone();
copy1.userName = 'User1'

const copy2 = copy1.clone();
copy2.branchName = 'master'


console.log(prototype);
// Repository {
//   userName: 'Voyager101',
//   repoName: 'Design-Patterns',
//   branchName: 'main'
// }

console.log(copy1);
// Repository {
//   userName: 'User1', <--
//   repoName: 'Design-Patterns',
//   branchName: 'main'
// }

console.log(copy2);
// Repository {
//   userName: 'User1', <--
//   repoName: 'Design-Patterns',
//   branchName: 'master' <--
// }
```