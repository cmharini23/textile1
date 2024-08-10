const products = [
  {
    id: 1,
    name: 'Printed Kurta',
    category: 'Kurtas',
    brand: 'Biba',
    price: 'Rs. 687',
    image: 'https://cdn.pixabay.com/photo/2022/01/21/11/25/anarkali-kurta-6954546_640.jpg', // Replace with your image URLs
  },
  {
    id: 2,
    name: 'Sequinned Embroidered Dupatta',
    category: 'Ethnic Dresses',
    brand: 'Biba',
    price: 'Rs. 649',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT63MWgJT5UFijWnGge3jjhY8sTaogxWFEK25_7gkMp119-D2mF14_i5BzMUNWFM3H7NFU&usqp=CAU', // Replace with your image URLs
  },
  {
    id: 3,
    name: 'Ethnic Printed Cotton Kurta',
    category: 'Kurtas',
    brand: 'Biba',
    price: 'Rs. 449',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbpFldYax2vMmxCKxS3bCxIcNzeH3xNarxU3OpIypO-4NxF_uA9rimYgAgSqQFqEMoKdw&usqp=CAU', // Replace with your image URLs
  },
  {
    id: 4,
    name: 'Women Ethnic Printed Kurta',
    category: 'Kurtas',
    brand: 'Biba',
    price: 'Rs. 687',
    image: 'https://wallpapers.com/images/hd/elegant-traditional-kurti-design-mimlbvgoebu9a16q-2.jpg', // Replace with your image URLs
  },
  {
    id: 5,
    name: 'Printed Anarkali',
    category: 'Dresses',
    brand: 'Biba',
    price: 'Rs. 799',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZDWIPpfcZ-2DoBHfU3WdEpdfmtrlUTZrDA&s', // Replace with your image URLs
  },
  {
    id: 6,
    name: 'Casual Flats',
    category: 'Flats',
    brand: 'DressBerry',
    price: 'Rs. 499',
    image: 'https://www.shutterstock.com/image-photo/set-multicolor-textile-flat-shoes-260nw-260764706.jpg', // Replace with your image URLs
  },
  {
    id: 7,
    name: 'Cotton Trousers',
    category: 'Trousers',
    brand: 'Kalini',
    price: 'Rs. 399',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9OWnHAOFDAvJCZL-Xn3by0qowZ0kwrOAEiA&s', // Replace with your image URLs
  },
  {
    id: 8,
    name: 'Lehenga Choli',
    category: 'Lehenga Choli',
    brand: 'Mitera',
    price: 'Rs. 999',
    image: 'https://png.pngtree.com/thumb_back/fh260/background/20230610/pngtree-beautiful-woman-sitting-in-trees-in-an-orange-lehenga-image_2943037.jpg', // Replace with your image URLs
  },
  {
    id: 9,
    name: 'Ethnic Gown',
    category: 'Ethnic Dresses',
    brand: 'Anouk',
    price: 'Rs. 1299',
    image: 'https://i.pinimg.com/736x/cf/42/ec/cf42ecdbdf13722c9f102f708b6ea47a.jpg', // Replace with your image URLs
  },
  {
    id: 10,
    name: 'Printed Kurta',
    category: 'Kurtas',
    brand: 'BAESD',
    price: 'Rs. 599',
    image: 'https://assets.ajio.com/medias/sys_master/root/20230629/5ffa/649cc9e0a9b42d15c91ac6a5/-473Wx593H-466063033-red-MODEL.jpg', // Replace with your image URLs
  },
  {
    id: 11,
    name: 'Embroidered Kurta',
    category: 'Kurtas',
    brand: 'Kuber Industries',
    price: 'Rs. 799',
    image: 'https://theindiancouture.com/cdn/shop/products/ezgif.com-gif-maker_10_34add856-2dec-4353-8f81-b56c210de484_1445x.webp?v=1660959556', // Replace with your image URLs
  },
  {
    id: 12,
    name: 'Floral Dress',
    category: 'Dresses',
    brand: 'DressBerry',
    price: 'Rs. 699',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhGWLiMRjGlk7IT9CQcZeVqQ02TgMCbDJhvA&s', // Replace with your image URLs
  },
  {
    id: 13,
    name: 'Casual Flats',
    category: 'Flats',
    brand: 'Kalini',
    price: 'Rs. 449',
    image: 'https://www.shutterstock.com/image-photo/women-babettes-shoes-isolated-white-260nw-1687892092.jpg', // Replace with your image URLs
  },
  {
    id: 14,
    name: 'Printed Saree',
    category: 'Ethnic Dresses',
    brand: 'Biba',
    price: 'Rs. 899',
    image: 'https://w0.peakpx.com/wallpaper/225/259/HD-wallpaper-ladies-red-saree-look-traditional-look-indian-girl.jpg', // Replace with your image URLs
  },
  {
    id: 15,
    name: 'Heeled Sandals',
    category: 'Heels',
    brand: 'Anouk',
    price: 'Rs. 599',
    image: 'https://www.shutterstock.com/image-photo/stylish-shoes-accessories-young-woman-260nw-1682576677.jpg', // Replace with your image URLs
  },

  {
    id: 16,
    name: 'Women Ethnic Printed Kurta',
    category: 'Kurtas',
    brand: 'Biba',
    price: 'Rs. 687',
    image: '', // Replace with your image URLs
  },

  {
    id: 17,
    name: 'Printed Kurta',
    category: 'Kurtas',
    brand: 'Biba',
    price: 'Rs. 687',
    image: '', // Replace with your image URLs
  },

  {
    id: 18,
    name: 'Sequinned Embroidered Dupatta',
    category: 'Ethnic Dresses',
    brand: 'Biba',
    price: 'Rs. 649',
    image: '', // Replace with your image URLs
  },

  {
    id: 19,
    name: 'Printed Anarkali',
    category: 'Dresses',
    brand: 'Biba',
    price: 'Rs. 799',
    image: '', // Replace with your image URLs
  },
 
  {
    id: 20,
    name: 'Casual Flats',
    category: 'Flats',
    brand: 'DressBerry',
    price: 'Rs. 499',
    image: '', // Replace with your image URLs
  },


  {
    id: 21,
    name: 'Cotton Trousers',
    category: 'Trousers',
    brand: 'Kalini',
    price: 'Rs. 399',
    image: '', // Replace with your image URLs
  },

  {
    id:22,
    name: 'Lehenga Choli',
    category: 'Lehenga Choli',
    brand: 'Mitera',
    price: 'Rs. 999',
    image: '', // Replace with your image URLs
  },











];

export default products;
