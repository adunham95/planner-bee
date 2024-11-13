interface ECard {
	id: string;
	sku: string | null;
	name: string | null;
	description: string | null;
	cost: number | null;
	createdAt: Date;
	updatedAt: Date;
	imageURL: string | null;
}
