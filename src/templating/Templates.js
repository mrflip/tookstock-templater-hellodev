export const PurchaseTable = {
  fields: {
    productCode: { len: 16, human: "Product Code" },
    title: { len: 28, human: "Product Name" },
    unitPrice: { len: 12, as: "price" },
    quantity: { len: 8, as: "int" },
    totalPrice: { len: 14, as: "price" },
  },
}

export const ShipmentTrackingTable = {
  fields: {
    trackingNumber: { len: 25 },
    destinationAddress: { len: 27 },
    updatedAt: { len: 18, typename: "DateTime" },
    eta: { len: 18, human: "ETA", typename: "DateTime" },
  },
}
