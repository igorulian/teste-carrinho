export interface IItem {
    uniqueId: string,
    id: string,
    productId: string,
    productRefId: any,
    refId: any,
    ean: string,
    name: string,
    skuName: string,
    modalType: any,
    parentItemIndex: any,
    parentAssemblyBinding: any,
    assemblies: any,
    priceValidUntil: string,
    tax: number,
    price: number,
    listPrice: number,
    manualPrice: any,
    sellingPrice: number,
    rewardValue: number,
    isGift: boolean,
    additionalInfo: any,
    preSaleDate: any,
    productCategoryIds: string,
    productCategories: any,
    quantity: number,
    seller: string,
    sellerChain: any,
    imageUrl: string,
    detailUrl: string,
    components: any,
    bundleItems: any,
    attachments: any,
    attachmentOfferings: any,
    offerings: any,
    priceTags: any,
    availability: string,
    measurementUnit: string,
    unitMultiplier: number,
    manufacturerCode: null
}