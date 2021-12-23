export const sepeteEkle = (book) => {
  return { type: "SEPETE_EKLE", payload: book };
};

export const sepettenCik = (book) => {
  return { type: "SEPETTEN_CIKAR", payload: book };
};