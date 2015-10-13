function hello(name){
  name = name || 'node';
  console.log('hello ' + name);
}

var arg = process.argv[2] || undefined;
hello(arg);