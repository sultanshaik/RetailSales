import readFile from './read-file';

const intitialState={};

function rootReducer(state=intitialState, action){

    switch (action.type) {

        default:
            const data = readFile()[0];
            const newState = {
                id: data.id,
                title: data.title,
                image: data.image,
                subtitle: data.subtitle,
                brand: data.brand,
                reviews: data.reviews,
                retailer: data.retailer,
                details: data.details,
                tags: data.tags,
                sales: data.sales
            };
            return Object.assign({},...state,newState);

    }
}

export default rootReducer;