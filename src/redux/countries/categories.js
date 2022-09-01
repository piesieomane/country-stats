import continentsOfTheWorld from '../../data/data';

const GET_CATEGORY = 'GET_CATEGORY';

const categoryReducer = (state = continentsOfTheWorld, action) => {
  switch (action.type) {
    case GET_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};

export const getCategory = (category) => {
  return {
    type: GET_CATEGORY,
    payload: continentsOfTheWorld.filter(
      (continent) => continent.name === category
    ),
  };
};

export default categoryReducer;
