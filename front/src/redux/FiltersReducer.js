const HANDLE_OPENING = 'HANDLE_OPENING';

let initialState = {
    filters: [
        {
            id: 1,
            name: "Категория",
            open: false,
            type: "list",
            listItems: [
                {
                    id: 1,
                    name: "Ipa",
                    checked: false
                },
                {
                    id: 2,
                    name: "Stout",
                    checked: false
                },
                {
                    id: 3,
                    name: "Apa",
                    checked: false
                },
                {
                    id: 4,
                    name: "Сидр",
                    checked: false
                },
                {
                    id: 5,
                    name: "Портер",
                    checked: false
                },
                {
                    id: 6,
                    name: "Лагер",
                    checked: false
                },
            ],
            sliderOptions: null,
        },
        {
            id: 2,
            name: "Горечь",
            open: false,
            type: "slider",
            listItems: null,
            sliderOptions: {
                min: 0,
                max: 120,
                currentMin: 0,
                currentMax: 120
            }
        },
        {
            id: 3,
            name: "Стиль",
            open: false,
            type: "list",
            listItems: [
                {
                    id: 1,
                    name: "American IPA",
                    checked: false
                },
                {
                    id: 2,
                    name: "Belgian Strong Dark Ale",
                    checked: false
                },
                {
                    id: 3,
                    name: "Cider - Other Fruit",
                    checked: false
                },
                {
                    id: 4,
                    name: "Coconut Porter",
                    checked: false
                },
                {
                    id: 5,
                    name: "Double Milk Stout",
                    checked: false
                },
                {
                    id: 6,
                    name: "Fruit Beer",
                    checked: false
                },
            ],
            sliderOptions: null,
        },
    ]

};

const FiltersReducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_OPENING: {
            return {
                ...state,
                filters: state.filters.map(
                    f => (f.id === action.id ? {...f, open: !f.open} : {...f})
                )
            };
        }

        default:
            return state;
    };
};

export default FiltersReducer;

export const handleOpeningActionCreator = (id) => ({type: HANDLE_OPENING, id: id});
