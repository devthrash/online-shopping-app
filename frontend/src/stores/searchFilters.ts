import { defineStore } from "pinia";
import { ref } from "vue";

interface CategoryOrBrand {
    _id: string,
    count: number
}

interface PriceBucket {
    _id: number|string,
    maxPrice: number,
    count: number
}

interface Facet {
    _id: string,
    values: { value: any, count: number }[]
}

export const useSearchFiltersStore = defineStore('searchFilters', () => {
    const categories = ref<CategoryOrBrand[]>([])
    const brands = ref<CategoryOrBrand[]>([])
    // const minPrice = ref<number|null>(null)
    // const maxPrice = ref<number|null>(null)
    const prices = ref<PriceBucket[]>([])
    const specs = ref<Facet[]>([])

    function setFilters(newCategories: CategoryOrBrand[], newBrands: CategoryOrBrand[], /**newMinPrice: number|null, newMaxPrice: number|null,*/ newPrices: PriceBucket[], newSpecs: Facet[]) {
        categories.value = newCategories
        brands.value = newBrands
        // minPrice.value = newMinPrice
        // maxPrice.value = newMaxPrice
        prices.value = newPrices
        specs.value = newSpecs
    }

    return {
        categories,
        brands,
        // minPrice,
        // maxPrice,
        prices,
        specs,
        setFilters
    }
})
