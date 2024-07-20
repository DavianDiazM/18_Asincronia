const somethingWillHappen = () => {
   return new Promise((resolve, reject) => {
       (true)
       ?resolve('Hey!')
       :reject('Whooooops!')
   })
}

somethingWillHappen()
    .then(response(() => {console.log(response)}))
    .catch(err(()=> {console.error(err)}))

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
            resolve('True')
            }, 2000)
        } else{
            const error = new Error('Whoooops 2!')
            reject(error)
        }
   })
}
somethingWillHappen2()
    .then(response => console.log(response))
    .catch(error => console.error(error))

//Ejecutar promesas al mismo tiempo

Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Array of result', response);
    })
    .catch(err => {
        console.error(err);
    })