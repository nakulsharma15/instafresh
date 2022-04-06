import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
 {
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648128245/InstaFresh%20E-Commerce/Dairy%20and%20Breakfast%20/Amul_Butter_wuqaym.webp",
    name: "Amul Butter",
    quantity: "100 g",
    category: "dairy & breakfast",
    price: 50,
    prevPrice: 0,
    discount: 0,
    rating: 4.7,
    isLiked: false
    
  },
  {
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648128246/InstaFresh%20E-Commerce/Dairy%20and%20Breakfast%20/Amul_Cow_Fresh_Milk_tr4zzd.webp",
    name: "Amul Cow Fresh Milk",
    quantity: "500 ml",
    category: "dairy & breakfast",
    price: 26,
    prevPrice: 0,
    discount: 0,
    rating: 4.2,
    isLiked: false
    
  },
  {
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648128245/InstaFresh%20E-Commerce/Dairy%20and%20Breakfast%20/Amul_Gold_Full_Cream_Fresh_Milk_ix9w2d.webp",
    name: "Amul Gold Full Cream Fresh Milk",
    quantity: "500 ml",
    category: "dairy & breakfast",
    price: 30,
    prevPrice: 0,
    discount: 0,
    rating: 3.9,
    isLiked: false
    
  },
  {
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648128246/InstaFresh%20E-Commerce/Dairy%20and%20Breakfast%20/Amul_Taaza_Toned_Fresh_Milk_apnjst.webp",
    name: "Amul Taaza Toned Fresh Milk",
    quantity: "500 ml",
    category: "dairy & breakfast",
    price: 25,
    prevPrice: 0,
    discount: 0,
    rating: 4.1,
    isLiked: false
    
  },
  {
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648128246/InstaFresh%20E-Commerce/Dairy%20and%20Breakfast%20/Mother_Dairy_Pure_Ghee_alitsg.webp",
    name: "Mother Dairy Pure Ghee",
    quantity: "1 l",
    category: "dairy & breakfast",
    price: 482,
    prevPrice: 525,
    discount: 8,
    rating: 4.4,
    isLiked: false
    
  },
  {
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648128246/InstaFresh%20E-Commerce/Dairy%20and%20Breakfast%20/Kellogg_s_Muesli_xauj3y.webp",
    name: "Kellogg's Muesli with 21% Fruit, Nut & Seeds",
    quantity: "750 g",
    category: "dairy & breakfast",
    price: 344,
    prevPrice: 445,
    discount: 22,
    rating: 3.9,
    isLiked: false
    
  },
  {
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648128246/InstaFresh%20E-Commerce/Dairy%20and%20Breakfast%20/Saffola_Classic_Masala_Oats_uo7emq.webp",
    name: "Saffola Classic Masala Oats",
    quantity: "39 g",
    category: "dairy & breakfast",
    price: 15,
    prevPrice: 0,
    discount: 0,
    rating: 1.9,
    isLiked: false
    
  },
  {
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648128246/InstaFresh%20E-Commerce/Dairy%20and%20Breakfast%20/Bagrry_Corn_Flakes_lf1sjs.webp",
    name: "Bagrry's Plus - Original & Healthier Corn Flakes",
    quantity: "880 g",
    category: "dairy & breakfast",
    price: 186,
    prevPrice: 350,
    discount: 46,
    rating: 4.3,
    isLiked: false
    
  },
  {
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648128246/InstaFresh%20E-Commerce/Dairy%20and%20Breakfast%20/Mother_Dairy_Classic_Curd_b8doam.webp",
    name: "Mother Dairy Classic Curd",
    quantity: "1 kg",
    category: "dairy & breakfast",
    price: 65,
    prevPrice: 0,
    discount: 0,
    rating: 4.4,
    isLiked: false
    
  },
  {
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648128246/InstaFresh%20E-Commerce/Dairy%20and%20Breakfast%20/Mother_Dairy_Paneer_jemc9f.webp",
    name: "Mother Dairy Paneer",
    quantity: "200 g",
    category: "dairy & breakfast",
    price: 75,
    prevPrice: 80,
    discount: 6,
    rating: 4.0,
    isLiked: false
    
  },
  {
    
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648145698/InstaFresh%20E-Commerce/Sweets/627a_aepg1m.webp",
    name: "Haldiram's Rasgulla",
    quantity: "1 kg",
    category: "sweets",
    price: 230,
    prevPrice: 0,
    discount: 0,
    rating: 1.8,
    isLiked: false
    
  },
  {
    
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648802975/InstaFresh%20E-Commerce/Sweets/481206a_af99oc.webp",
    name: "Amul Vanilla Magic Gold Ice Cream",
    quantity: "1 l",
    category: "sweets",
    price: 210,
    prevPrice: 0,
    discount: 0,
    rating: 4.5,
    isLiked: false
    
  },
  {
    
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648803116/InstaFresh%20E-Commerce/Sweets/476203a_f7wdm2.webp",
    name: "Amul King Alphonso Gold - Ice Cream",
    quantity: "1 l",
    category: "sweets",
    price: 235,
    prevPrice: 0,
    discount: 0,
    rating: 4.4,
    isLiked: false
    
  },
  {
    
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648803976/InstaFresh%20E-Commerce/Sweets/23767a_l44t9i.webp",
    name: "Bikano Gulab Jamun",
    quantity: "1 kg",
    category: "sweets",
    price: 226,
    prevPrice: 230,
    discount: 2,
    rating: 4.0,
    isLiked: false
    
  },
  {
    
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648804231/InstaFresh%20E-Commerce/Sweets/396629a_yftegm.webp",
    name: "Cadbury Dairy Milk Silk Hazelnut Chocolate Bar",
    quantity: "58 g",
    category: "sweets",
    price: 80,
    prevPrice: 0,
    discount: 0,
    rating: 2.5,
    isLiked: false
    
  },
  {
    
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648804380/InstaFresh%20E-Commerce/Sweets/374937a_ckuxns.webp",
    name: "Haldiram's Dry Fruit Besan Laddu",
    quantity: "400 g",
    category: "sweets",
    price: 151,
    prevPrice: 299,
    discount: 49,
    rating: 2.8,
    isLiked: false
    
  },
  {
    
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648804887/InstaFresh%20E-Commerce/Sweets/437999a_qlshkr.webp",
    name: "Alpenliebe Juzt Jelly Party Mix Candy",
    quantity: "121.5 g",
    category: "sweets",
    price: 43,
    prevPrice: 50,
    discount: 14,
    rating: 4.5,
    isLiked: false
    
  },
  {
    
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648805208/InstaFresh%20E-Commerce/Sweets/375822a_kvd6il.webp",
    name: "Amul Kaju Katli",
    quantity: "200 g",
    category: "sweets",
    price: 180,
    prevPrice: 0,
    discount: 0,
    rating: 4.3,
    isLiked: false
    
  },
  {
    
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648805344/InstaFresh%20E-Commerce/Sweets/409775a_kcvipf.webp",
    name: "Parle Mango Bite Bigger Candy",
    quantity: "214.5 g",
    category: "sweets",
    price: 40,
    prevPrice: 50,
    discount: 20,
    rating: 4.6,
    isLiked: false
    
  },
  {
    
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648805582/InstaFresh%20E-Commerce/Sweets/450561a_znonn9.webp",
    name: "Kwality Walls Shameless Vanilla Frozen Dessert",
    quantity: "700 ml",
    category: "sweets",
    price: 135,
    prevPrice: 0,
    discount: 0,
    rating: 4.5,
    isLiked: false
    
  },
  {   
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648842058/InstaFresh%20E-Commerce/Beverages/19504a_llhzwd.webp",
    name: "Amul Kool Badam Flavoured Milk",
    quantity: "180 ml",
    category: "beverages",
    price: 20,
    prevPrice: 0,
    discount: 0,
    rating: 4.5,
    isLiked: false  
  },
  {   
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648842132/InstaFresh%20E-Commerce/Beverages/400926a_gjdrbz.webp",
    name: "Nescafe Ready To Drink Coffee (Iced Latte)",
    quantity: "180 ml",
    category: "beverages",
    price: 48,
    prevPrice: 60,
    discount: 20,
    rating: 1.9,
    isLiked: false  
  },
  {   
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648842227/InstaFresh%20E-Commerce/Beverages/318a_lvkpai.webp",
    name: "Bisleri Packaged Water (1 l)",
    quantity: "1 l",
    category: "beverages",
    price: 18,
    prevPrice: 20,
    discount: 10,
    rating: 4.7,
    isLiked: false  
  },
  {   
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648842376/InstaFresh%20E-Commerce/Beverages/19734a_r5bw2z.webp",
    name: "Glucon-D Tangy Orange Instant Energy Drink Mix ",
    quantity: "200 g",
    category: "beverages",
    price: 70,
    prevPrice: 75,
    discount: 6,
    rating: 4.6,
    isLiked: false  
  },
  {   
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648842562/InstaFresh%20E-Commerce/Beverages/17489a_ipaqty.webp",
    name: "Real Fruit Power Mixed Fruit Juice",
    quantity: "10 ml",
    category: "beverages",
    price: 17,
    prevPrice: 20,
    discount: 15,
    rating: 4.2,
    isLiked: false  
  },
  {   
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648842896/InstaFresh%20E-Commerce/Beverages/311a_e9b8c3.webp",
    name: "Slice Thickest Mango Drink",
    quantity: "600 ml",
    category: "beverages",
    price: 36,
    prevPrice: 40,
    discount: 10,
    rating: 3.8,
    isLiked: false  
  },
  {   
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648843058/InstaFresh%20E-Commerce/Beverages/283a_lz9xvv.webp",
    name: "Coca-Cola Soft Drink",
    quantity: "750 ml",
    category: "beverages",
    price: 38,
    prevPrice: 40,
    discount: 5,
    rating: 4.2,
    isLiked: false  
  },
  {   
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648843253/InstaFresh%20E-Commerce/Beverages/385a_rt1xta.webp",
    name: "Red Bull Energy Drink",
    quantity: "250 ml",
    category: "beverages",
    price: 115,
    prevPrice: 0,
    discount: 0,
    rating: 2.9,
    isLiked: false  
  },
  {   
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648843408/InstaFresh%20E-Commerce/Beverages/86521a_vuh2s2.webp",
    name: "Fanta Orange Flavoured Soft Drink",
    quantity: "750 ml",
    category: "beverages",
    price: 37,
    prevPrice: 40,
    discount: 7,
    rating: 4.1,
    isLiked: false  
  },
  {   
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648843543/InstaFresh%20E-Commerce/Beverages/9483a_cgcvdl.webp",
    name: "Limca Lime 'N' Lemon Soft Drink",
    quantity: "750 ml",
    category: "beverages",
    price: 38,
    prevPrice: 40,
    discount: 5,
    rating: 4.5,
    isLiked: false  
  },
  {
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648896565/InstaFresh%20E-Commerce/Fruits%20and%20Vegetables/3885a_ca5gsa.webp",
    name: "Colocasia (Arbi)",
    quantity: "250 g",
    category: "fruits & vegetables",
    price: 16,
    prevPrice: 18,
    discount: 11,
    rating: 4.2,
    isLiked: false  
  },
  {
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648896683/InstaFresh%20E-Commerce/Fruits%20and%20Vegetables/445675a_uupbqr.webp",
    name: "Desi Tomato",
    quantity: "500 g",
    category: "fruits & vegetables",
    price: 16,
    prevPrice: 18,
    discount: 11,
    rating: 4.0,
    isLiked: false  
  },
  {
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648896842/InstaFresh%20E-Commerce/Fruits%20and%20Vegetables/391306a_mwq5z2.webp",
    name: "Onion",
    quantity: "1 kg",
    category: "fruits & vegetables",
    price: 23,
    prevPrice: 28,
    discount: 17,
    rating: 4.1,
    isLiked: false  
  },
  {
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648896970/InstaFresh%20E-Commerce/Fruits%20and%20Vegetables/199435a_noibl1.webp",
    name: "Potato (New Crop)",
    quantity: "1 kg",
    category: "fruits & vegetables",
    price: 16,
    prevPrice: 18,
    discount: 11,
    rating: 4.0,
    isLiked: false  
  },
  {
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648897290/InstaFresh%20E-Commerce/Fruits%20and%20Vegetables/3918a_zrefvn.webp",
    name: "Spinach Bunch",
    quantity: "500 g",
    category: "fruits & vegetables",
    price: 13,
    prevPrice: 14,
    discount: 7,
    rating: 3.9,
    isLiked: false  
  },
  {
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648897412/InstaFresh%20E-Commerce/Fruits%20and%20Vegetables/470636a_tp73du.webp",
    name: "Banana",
    quantity: "3 pieces",
    category: "fruits & vegetables",
    price: 26,
    prevPrice: 30,
    discount: 13,
    rating: 3.8,
    isLiked: false  
  },
  {
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648897792/InstaFresh%20E-Commerce/Fruits%20and%20Vegetables/428612a_om8h89.webp",
    name: "Shimla Apple",
    quantity: "4 pieces (500g - 800g)",
    category: "fruits & vegetables",
    price: 105,
    prevPrice: 119,
    discount: 11,
    rating: 4.2,
    isLiked: false  
  },
  {
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648897903/InstaFresh%20E-Commerce/Fruits%20and%20Vegetables/364304a_ykhldb.webp",
    name: "Sweet Lime (Mosambi)",
    quantity: "500g - 700g",
    category: "fruits & vegetables",
    price: 44,
    prevPrice: 51,
    discount: 13,
    rating: 3.8,
    isLiked: false  
  },
  {
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648898526/InstaFresh%20E-Commerce/Fruits%20and%20Vegetables/169132a_bxodrr.webp",
    name: "Green Grapes",
    quantity: "500 g",
    category: "fruits & vegetables",
    price: 77,
    prevPrice: 94,
    discount: 18,
    rating: 4.1,
    isLiked: false  
  },
  {
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648898840/InstaFresh%20E-Commerce/Fruits%20and%20Vegetables/276355a_qw9hlk.webp",
    name: "Premium Alphonso Mango",
    quantity: "4 pieces (0.8kg - 1kg)",
    category: "fruits & vegetables",
    price: 487,
    prevPrice: 622,
    discount: 21,
    rating: 1.9,
    isLiked: false  
  },
  {
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648899543/InstaFresh%20E-Commerce/Snacks%20and%20Bakery/448095a_sbbhhh.webp",
    name: "Harvest Gold White Bread",
    quantity: "700 g",
    category: "snacks & bakery",
    price: 50,
    prevPrice: 0,
    discount: 0,
    rating: 4.5,
    isLiked: false  
  },
  {
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648900810/InstaFresh%20E-Commerce/Snacks%20and%20Bakery/24194a_iqe8ud.webp",
    name: "Harvest Gold Hearty Brown Bread",
    quantity: "400 g",
    category: "snacks & bakery",
    price: 40,
    prevPrice: 0,
    discount: 0,
    rating: 2.8,
    isLiked: false  
  },
  {
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648899903/InstaFresh%20E-Commerce/Snacks%20and%20Bakery/23693a_gq7378.webp",
    name: "Piknik Classic Tomato Chilli Potato Chips",
    quantity: "60 g",
    category: "snacks & bakery",
    price: 43,
    prevPrice: 60,
    discount: 28,
    rating: 3.9,
    isLiked: false  
  },
  {
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648900644/InstaFresh%20E-Commerce/Snacks%20and%20Bakery/127891a_sdg1eg.webp",
    name: "Peppy Cheese Balls",
    quantity: "60 g",
    category: "snacks & bakery",
    price: 46,
    prevPrice: 60,
    discount: 23,
    rating: 4.2,
    isLiked: false  
  },
  {
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648900940/InstaFresh%20E-Commerce/Snacks%20and%20Bakery/240092a_osdqwy.webp",
    name: "Lay's India's Magic Masala Chips",
    quantity: "52 g",
    category: "snacks & bakery",
    price: 20,
    prevPrice: 0,
    discount: 0,
    rating: 2.9,
    isLiked: false  
  },
  {
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648901319/InstaFresh%20E-Commerce/Snacks%20and%20Bakery/446889a_j76mc0.webp",
    name: "Bikano Bikaneri Bhujia",
    quantity: "225 g",
    category: "snacks & bakery",
    price: 55,
    prevPrice: 0,
    discount: 0,
    rating: 3.9,
    isLiked: false  
  },
  {
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648901432/InstaFresh%20E-Commerce/Snacks%20and%20Bakery/60749a_agmq2p.webp",
    name: "Parle-G Original Gluco Biscuit",
    quantity: "800 g",
    category: "snacks & bakery",
    price: 80,
    prevPrice: 0,
    discount: 0,
    rating: 3.9,
    isLiked: false  
  },
  {
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648901556/InstaFresh%20E-Commerce/Snacks%20and%20Bakery/427133a_by6dlr.webp",
    name: "Parle Monaco Classic Regular Biscuit",
    quantity: "700 g",
    category: "snacks & bakery",
    price: 96,
    prevPrice: 120,
    discount: 20,
    rating: 3.8,
    isLiked: false  
  },
  {
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648901666/InstaFresh%20E-Commerce/Snacks%20and%20Bakery/361153a_sqq5zj.webp",
    name: "Sunfeast Bounce Tangy Orange Sandwich Cream Biscuits",
    quantity: "76 g",
    category: "snacks & bakery",
    price: 10,
    prevPrice: 0,
    discount: 0,
    rating: 3.8,
    isLiked: false  
  },
  {
    _id: uuid(),
    imageUrl: "https://res.cloudinary.com/nakulsharma15/image/upload/v1648901801/InstaFresh%20E-Commerce/Snacks%20and%20Bakery/35382a_bsbq3s.webp",
    name: "Britannia Treat JimJam Sandwich Cream Biscuits",
    quantity: "150 g",
    category: "snacks & bakery",
    price: 34,
    prevPrice: 35,
    discount: 3,
    rating: 4.0,
    isLiked: false  
  }
];
