import Product from "../models/product";

export let DummyData = [
	new Product(1, "Nike Air Shoes", "https://wallpapercave.com/wp/wp3251521.jpg", "Best shoes! Just do it!", 200),
	new Product(2, "Air Jordan", "https://cutewallpaper.org/21/wallpaper-of-shoes/47+-Free-Shoes-Wallpaper-on-WallpaperSafari.jpg", "Basketball Shoes!", 300),
	new Product(3, "Adidas Kick Boxing", "https://cdn.webshopapp.com/shops/165023/files/217857641/800x1024x2/adidas-adidas-t-shirt-kickboxing-community-gray-bl.jpg", "Sport!", 20),
	new Product(4, "PSG Shirt", "https://www.goalinn.com/f/13709/137095692/nike-paris-saint-germain-home-breathe-stadium-19-20-junior-t-shirt.jpg", "Soccer!", 90),
];

export function deleteProduct(id) {
	DummyData = DummyData.filter((el) => el.id != id);
}

export default DummyData;
