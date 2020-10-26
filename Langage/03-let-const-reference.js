// 2 allocations mémoire
// objet + référence (comment retrouver l'objet en mémoire)
// coords1 contient la référence
const coords1 = {
  x: 1,
  y: 2,
};

const coords2 = coords1; // passage par référence
// (coords2 et coords1 référencent le meme objet)

// avec let ou const, l'objet reste modifiable
coords2.x = 3;

// PAS POSSIBLE
// mais on ne pourrait réaffecter une nouvelle référence
// coords2 = {};

console.log(coords1.x); // 3
