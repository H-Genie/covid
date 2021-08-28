export const descCountry = (a, b) => {
    if (a.Country === b.Country) return 0;
    return a.Country > b.Country ? 1 : -1;
}
export const asceCountry = (a, b) => {
    if (a.Country === b.Country) return 0;
    return a.Country > b.Country ? -1 : 1;
}
export const descConfirmed = (a, b) => {
    if (a.TotalConfirmed === b.TotalConfirmed) return 0;
    return b.TotalConfirmed - a.TotalConfirmed;
}
export const asceConfirmed = (a, b) => {
    if (a.TotalConfirmed === b.TotalConfirmed) return 0;
    return a.TotalConfirmed - b.TotalConfirmed;
}
export const descRecovered = (a, b) => {
    if (a.TotalRecovered === b.TotalRecovered) return 0;
    return b.TotalRecovered - a.TotalRecovered;
}
export const asceRecovered = (a, b) => {
    if (a.TotalRecovered === b.TotalRecovered) return 0;
    return a.TotalRecovered - b.TotalRecovered;
}
export const descDeaths = (a, b) => {
    if (a.TotalDeaths === b.TotalDeaths) return 0;
    return b.TotalDeaths - a.TotalDeaths;
}
export const asceDeaths = (a, b) => {
    if (a.TotalDeaths === b.TotalDeaths) return 0;
    return a.TotalDeaths - b.TotalDeaths;
}
