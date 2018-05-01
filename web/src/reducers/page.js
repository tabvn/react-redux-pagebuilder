import { UPDATE_PAGE } from '../actions/types'
import _ from 'lodash'

const initState = [
  {
    id: 'page-about-us',
    title: 'About Us',
    path: 'about',
    body: 'hello from About page simple text content',
    elements: [
      {
        id: 'id-h2-1',
        type: 'h2',
        options: {
          style: {fontSize: '20px', color: 'blue'},
          text: 'Heading 2 - id-h2-1',
        },
        parent: 'column-row-1-1',
        sort: 0,
      },
      {
        id: 'id-h3-1',
        type: 'h3',
        options: {
          style: {fontSize: '18px', color: 'blue'},
          text: 'Heading 3 - id-h3-1',
        },
        sort: 2,
        parent: 'column-row-1-3',
      },
      {
        id: 'id-p-1',
        type: 'p',
        options: {
          text: 'This is paragraph text content - id-p-1',
        },
        sort: 1,
        parent: 'column-row-1-2',
      },

      // row Element
      {
        id: 'row-1',
        type: 'row',
        options: {
          container: 'container-fluid',
          style: {border: 'border 1px solid rgba(0,0,0,0.08)'},

        },
      },
      //Column element
      {
        id: 'column-row-1-1',
        type: 'column',
        options: {
          responsive: {
            extraSmall: 6,
            small: 6,
            medium: 4,
            large: 3,
            extraLarge: 2,
          },
          style: {},
        },
        parent: 'row-1',
      },
      {
        id: 'column-row-1-2',
        type: 'column',
        options: {
          responsive: {
            extraSmall: 6,
            small: 6,
            medium: 4,
            large: 3,
            extraLarge: 2,
          },
          style: {},
        },
        parent: 'row-1',
      },
      {
        id: 'column-row-1-3',
        type: 'column',
        options: {
          responsive: {
            extraSmall: 6,
            small: 6,
            medium: 4,
            large: 3,
            extraLarge: 2,
          },
          style: {},
        },
        parent: 'row-1',
      },
// row 2

      {
        id: 'row-2',
        type: 'row',
        options: {
          container: 'container-fluid',
        },
      },
      // column
      {
        id: 'column-row-2-1',
        type: 'column',
        options: {
          responsive: {
            extraSmall: 6,
          },
        },
        parent: 'row-2',
      },
      //Column
      {
        id: 'column-row-2-2',
        type: 'column',
        options: {
          responsive: {
            extraSmall: 6,
          },
        },
        parent: 'row-2',
      },
      {
        id: 'p-text-1',
        type: 'p',
        options: {
          text: 'Text content in column 1',
        },
        parent: 'column-row-2-1',
      },
      {
        id: 'p-text-2',
        type: 'p',
        options: {
          text: 'Text content in column 2',
        },
        parent: 'column-row-2-2',
      },
    ],
  },
  {
    id: 'home',
    title: 'Home',
    path: '/',
    body: 'Welcome to the Home page',
    elements: [],
  },
]

export default (state = initState, action) => {

  const payload = _.get(action, 'payload')

  switch (action.type) {

    case UPDATE_PAGE:

      // remove existing with ID
      let pages = state.filter((p) => p.id !== payload.id)

      return [
        ...pages,
        payload
      ]

    default:

      return state
  }
}