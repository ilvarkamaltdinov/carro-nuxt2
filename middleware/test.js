import offerUrl from "@/apollo/queries/offerUrl";
import offerFilters from "@/apollo/queries/offerFilters";

export default async function ({store, route, $config, $stringToArray, $numberToArray, $removeEmptyObjects, app, error}) {
  const isOfferClick = store.state.catalog['catalog-cars'].isOfferClick;
  const isClick = store.state.filters.filters.isClick
  if(isOfferClick) {
    store.commit('filters/filters/SET_CAR_PAGE', true)
    store.commit('catalog/catalog-cars/SET_OFFER_CLICK', false)
    return
  }
  const apolloClient = app.apolloProvider.defaultClient
  let variables = {
    site_id: $config.site_id,
  }
  store.commit('filters/filters/SET_CAR_PAGE', false)
  if (route.name === 'used-mark-model-car' && !isClick) {
    let assignVariables = {
      url: route.path
    }
    let params = {...variables, ...assignVariables}
    try {
      let response = await defineOfferUrl(apolloClient, params)
      let typeName = response.data.offerUrl.__typename
      let assignVariables = response.data.offerUrl
      delete assignVariables.__typename;
      if (typeName === 'OfferUrlFilterPaginationType') {
        let params = {...variables, ...assignVariables}
        try{
          let response = await filterRequest(apolloClient, params)
          store.commit('filters/filters/SET_FILTERS', response.data.offerFilters)
          store.commit('filters/filters/SET_ALL_CHOSEN', response.data.offerFilters.chosen)
          store.commit('filters/filters/SET_OFFERS', response.data.offers)
          store.commit('filters/filters/SET_LOADING', false)
        }catch (e){
          error({statusCode: 404})
        }
      }else{
        store.commit('filters/filters/SET_CAR_PAGE', true)
        store.commit('catalog/catalog-cars/SET_OFFER_CLICK', false)
      }
    }catch (e){
      error({statusCode: 404})
    }
  }else{
    console.log('filter')
    let assignVariables = {
      url: route.path,
      mark_slug_array: $stringToArray(route.query.mark_slug_array),
      folder_slug_array: $stringToArray(route.query.folder_slug_array),
      generation_slug_array: $stringToArray(route.query.generation_slug_array),
      engine_type_id_array: $numberToArray(route.query.engine_type_id_array),
      gearbox_id_array: $numberToArray(route.query.gearbox_id_array),
      drive_type_id_array: $numberToArray(route.query.drive_type_id_array),
      body_type_id_array: $numberToArray(route.query.body_type_id_array),
    }
    let params = $removeEmptyObjects({...variables, ...assignVariables})

    try {
      let response = await filterRequest(apolloClient, params)
      store.commit('filters/filters/SET_FILTERS', response.data.offerFilters)
      store.commit('filters/filters/SET_ALL_CHOSEN', response.data.offerFilters.chosen)
      store.commit('filters/filters/SET_OFFERS', response.data.offers)
      store.commit('filters/filters/SET_LOADING', false)
    }catch (e){
      error({statusCode: 404})
    }
  }
}
async function defineOfferUrl(client, variables) {
  return client.query(
    {
      query: offerUrl,
      variables: variables,
      fetchPolicy: 'no-cache' // TODO используется потому что иначе будет пипец
    })
}
async function filterRequest(client, variables) {

  return client.query(
    {
      query: offerFilters,
      variables: variables,
      fetchPolicy: 'no-cache' // TODO используется потому что иначе будет пипец
    })
}
