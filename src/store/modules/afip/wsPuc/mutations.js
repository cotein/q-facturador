export const SET_SEARCH_NUMBER = (state, search_number) => state.search_number = search_number;

export const SET_PERSON = (state, person) => state.person = person;

export const SET_PERSON_IS_ARRAY = (state, value) => state.personIsArray = value;

export const SET_PERSON_INITIAL_STATUS = (state) => {
    state.search_number = null;
    state.person = null;
}