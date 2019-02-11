
export function moviesList() {
   return {
      type: 'MOVIES_LIST',
      payload: [
         {id:1, name: 'didifjd'},
         {id:2, name: 'erere'},
         {id:3, name: '3453453erere'},
      ]
   }
}

export function directorsList() {
   return {
      type: 'DIT_LIST',
      payload: [
         {id:1, name: 'Tarantino'},
         {id:2, name: 'd2d2d2d2'},
      ]
   }
}