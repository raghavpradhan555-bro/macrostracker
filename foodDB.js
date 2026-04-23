

const foodDB = {

// 🥚 Protein basics
egg: { calories: 70, protein: 6, carbs: 1, fats: 5 },
eggwhite: { calories: 17, protein: 4, carbs: 0, fats: 0 },
chicken: { calories: 165, protein: 31, carbs: 0, fats: 3.6 },
fish: { calories: 200, protein: 22, carbs: 0, fats: 12 },
mutton: { calories: 250, protein: 25, carbs: 0, fats: 17 },
paneer: { calories: 265, protein: 18, carbs: 2, fats: 20 },
tofu: { calories: 80, protein: 8, carbs: 2, fats: 5 },
soya: { calories: 345, protein: 52, carbs: 33, fats: 0.5 },
dal: { calories: 180, protein: 12, carbs: 30, fats: 2 },
rajma: { calories: 140, protein: 9, carbs: 25, fats: 1 },
chole: { calories: 180, protein: 10, carbs: 30, fats: 3 },

// 🥛 Dairy
milk: { calories: 60, protein: 3.2, carbs: 5, fats: 3.3 },
curd: { calories: 98, protein: 11, carbs: 3, fats: 4 },
butter: { calories: 100, protein: 0, carbs: 0, fats: 11 },
ghee: { calories: 120, protein: 0, carbs: 0, fats: 14 },
cheese: { calories: 113, protein: 7, carbs: 1, fats: 9 },

// 🍚 Carbs
rice: { calories: 130, protein: 2.5, carbs: 28, fats: 0.3 },
brownrice: { calories: 110, protein: 2.6, carbs: 23, fats: 0.9 },
roti: { calories: 120, protein: 3, carbs: 20, fats: 3 },
paratha: { calories: 260, protein: 5, carbs: 30, fats: 12 },
naan: { calories: 300, protein: 9, carbs: 50, fats: 6 },
bread: { calories: 80, protein: 3, carbs: 15, fats: 1 },
poha: { calories: 180, protein: 4, carbs: 30, fats: 5 },
upma: { calories: 200, protein: 5, carbs: 30, fats: 7 },
idli: { calories: 70, protein: 2, carbs: 15, fats: 0.5 },
dosa: { calories: 150, protein: 3, carbs: 25, fats: 4 },
oats: { calories: 389, protein: 16.9, carbs: 66.3, fats: 6.9 },

// 🥔 Vegetables
potato: { calories: 160, protein: 4, carbs: 37, fats: 0 },
onion: { calories: 40, protein: 1, carbs: 9, fats: 0 },
tomato: { calories: 20, protein: 1, carbs: 4, fats: 0 },
spinach: { calories: 23, protein: 3, carbs: 4, fats: 0 },
cauliflower: { calories: 25, protein: 2, carbs: 5, fats: 0 },
peas: { calories: 80, protein: 5, carbs: 14, fats: 0 },
carrot: { calories: 41, protein: 1, carbs: 10, fats: 0 },

// 🍎 Fruits
banana: { calories: 105, protein: 1.3, carbs: 27, fats: 0.4 },
apple: { calories: 95, protein: 0.5, carbs: 25, fats: 0.3 },
mango: { calories: 150, protein: 1, carbs: 35, fats: 0 },
orange: { calories: 60, protein: 1, carbs: 15, fats: 0 },
grapes: { calories: 70, protein: 1, carbs: 18, fats: 0 },
watermelon: { calories: 30, protein: 1, carbs: 8, fats: 0 },

// 🥜 Snacks & nuts
almond: { calories: 7, protein: 0.3, carbs: 0.3, fats: 0.6 },
cashew: { calories: 9, protein: 0.3, carbs: 0.5, fats: 0.7 },
peanut: { calories: 6, protein: 0.3, carbs: 0.2, fats: 0.5 },
chips: { calories: 150, protein: 2, carbs: 15, fats: 10 },
namkeen: { calories: 200, protein: 5, carbs: 20, fats: 12 },
biscuit: { calories: 70, protein: 1, carbs: 10, fats: 3 },

// 🍗 Fast food
burger: { calories: 300, protein: 15, carbs: 30, fats: 15 },
pizza: { calories: 280, protein: 12, carbs: 35, fats: 10 },
maggi: { calories: 350, protein: 8, carbs: 50, fats: 12 },
samosa: { calories: 260, protein: 4, carbs: 30, fats: 14 },
kachori: { calories: 300, protein: 6, carbs: 35, fats: 15 },
roll: { calories: 250, protein: 10, carbs: 30, fats: 10 },

// 🍬 Sweets
laddu: { calories: 200, protein: 3, carbs: 25, fats: 10 },
jalebi: { calories: 150, protein: 1, carbs: 30, fats: 5 },
barfi: { calories: 220, protein: 4, carbs: 20, fats: 12 },
rasgulla: { calories: 125, protein: 3, carbs: 30, fats: 0 },

// 🥤 Drinks
tea: { calories: 40, protein: 1, carbs: 5, fats: 1 },
coffee: { calories: 30, protein: 1, carbs: 4, fats: 1 },
juice: { calories: 120, protein: 1, carbs: 28, fats: 0 },
cola: { calories: 140, protein: 0, carbs: 35, fats: 0 }

};
