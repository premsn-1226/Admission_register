export const RegReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, {
        name: action.book.name, 
        cutoff: action.book.cutoff,
        state :  action.book.state,
        address : action.book.address,
        university : action.book.university,
        id:action.book.id
        }
      ]

      case 'EDIT_BOOK':
        const updataBook = action.book;
        return state.map(books =>{
          if(books.id === updataBook.id){
            return updataBook
          }
          return books
        })
        
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
} 
