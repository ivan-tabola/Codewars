function abbrevName(name){
    return name.toUpperCase().split(' ').map(a => a[0]).join('.')
  }