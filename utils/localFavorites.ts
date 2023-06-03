const ToggleFavorites=(id:number)=>{
    let favorites: number[]=JSON.parse(localStorage.getItem('favorites')|| '[]')
    if(favorites.includes(id)){
        favorites=favorites.filter(pokeId=>pokeId!==id);
    }else{
        favorites.push(id);
    }
    localStorage.setItem('favorites',JSON.stringify(favorites));
}


const existInFavorites=(id:number):boolean=>{
    //Se realiza esta validación para hacer uso de local storage solo en el fronend ya que no existe en el back, sin embargo es mejor hacer uso de useState ya que con este no se presentan problemas al momento de recargar la pagina devido a la variaación respecto a al rendereizada en e servidor
    // if(typeof window === 'undefined') return false;
    let favorites: number[]=JSON.parse(localStorage.getItem('favorites')|| '[]')
    return favorites.includes(id);
}

const pokemons=():number[]=>{
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    pokemons,
    existInFavorites,
    ToggleFavorites
}