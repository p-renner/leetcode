import { PriorityQueue } from '@datastructures-js/priority-queue';

type FoodItem = {
	name: string;
	rating: number;
	cuisine: string;
};

const compareFoodItems = (first: FoodItem, second: FoodItem): number => {
	return second.rating - first.rating || first.name.localeCompare(second.name);
};

class FoodRatings {
	foodLookupTable: Map<string, FoodItem>;
	cuisineRankings: Map<string, PriorityQueue<FoodItem>>;

	constructor(foods: string[], cuisines: string[], ratings: number[]) {
		this.foodLookupTable = new Map();
		this.cuisineRankings = new Map();

		for (const cuisineType of cuisines) {
			if (this.cuisineRankings.has(cuisineType)) continue;
			this.cuisineRankings.set(cuisineType, new PriorityQueue(compareFoodItems));
		}

		for (let index = 0; index < foods.length; index++) {
			const foodItem: FoodItem = {
				name: foods[index],
				rating: ratings[index],
				cuisine: cuisines[index],
			};

			this.foodLookupTable.set(foods[index], foodItem);

			this.cuisineRankings.get(cuisines[index])!.enqueue({ ...foodItem });
		}
	}

	changeRating(foodName: string, newRating: number): void {
		const foodItem = this.foodLookupTable.get(foodName)!;
		foodItem.rating = newRating;

		this.cuisineRankings.get(foodItem.cuisine)!.enqueue({ ...foodItem });
	}

	highestRated(cuisineType: string): string {
		const priorityQueue = this.cuisineRankings.get(cuisineType)!;

		let frontItem = priorityQueue.front()!;
		while (frontItem.rating !== this.foodLookupTable.get(frontItem.name)!.rating) {
			priorityQueue.dequeue();
			frontItem = priorityQueue.front()!;
		}

		return priorityQueue.front()!.name;
	}
}

test('FoodRatings', () => {
	const foodRatings = new FoodRatings(
		['kimchi', 'miso', 'sushi', 'moussaka', 'ramen', 'bulgogi'],
		['korean', 'japanese', 'japanese', 'greek', 'japanese', 'korean'],
		[9, 12, 8, 15, 14, 7],
	);

	expect(foodRatings.highestRated('korean')).toBe('kimchi');
	expect(foodRatings.highestRated('japanese')).toBe('ramen');
	foodRatings.changeRating('sushi', 16);
	expect(foodRatings.highestRated('japanese')).toBe('sushi');
	foodRatings.changeRating('ramen', 16);
	expect(foodRatings.highestRated('japanese')).toBe('ramen');
});
