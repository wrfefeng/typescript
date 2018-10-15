interface FullName {
  firstName?: string;
  lastName?: string;
}

function printName (name: FullName) {
  console.log(name)
}
printName({firstName: 'wrf'})