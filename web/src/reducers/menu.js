
const initState = {
  items: [
    {
      id: "menu-1",
      path: '/',
      title: 'Home'
    },
    {
      id: "menu-2",
      path: 'about',
      title: 'About'
    }
  ],
  active: null,
}

export default (state = initState, action) => {

  switch (action.type){


    default:

      return state
  }
}