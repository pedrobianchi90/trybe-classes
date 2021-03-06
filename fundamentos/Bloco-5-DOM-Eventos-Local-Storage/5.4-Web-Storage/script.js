// console.log(localStorage.length);
// localStorage.setItem('firstname', 'Adam');
// localStorage.setItem('lastname', 'Smith');
// console.log(localStorage.getItem('lastname'));
// console.log(localStorage.length);
// localStorage.removeItem('lastname');
// console.log(localStorage.length);
// localStorage.clear();
// console.log(localStorage.length);

let organization = {
    name: 'trybe',
    since: 2019,
  };
  
  // A variável 'storage' pode ser localStorage ou sessionStorage
  let storage = localStorage;
  
  storage.setItem('trybe', JSON.stringify(organization));
  let org = JSON.parse(storage.getItem('trybe'));
  console.log(org); // { name: 'trybe', since: 2019 }
  
  let classes = ['2019/set', '2019/oct'];
  storage.setItem('classes', JSON.stringify(classes));
  let cls = JSON.parse(storage.getItem('classes'));
  console.log(cls); // ['2019/set', '2019/oct']