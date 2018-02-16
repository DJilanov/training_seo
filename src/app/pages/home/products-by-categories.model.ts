import { LanguageModel } from '../../services/utils/language.model';
import { ProductModel } from '../../services/products/product.model';

export class ProductsByCategoriesModel {
	id: string;
	title: LanguageModel;
	name: LanguageModel;
	zIndex: string;
	shownOnNav: boolean;
	link: string;
	products: ProductModel[];

	constructor(
		id?: string,
		title?: LanguageModel,
		name?: LanguageModel,
		zIndex?: string,
		shownOnNav?: boolean,
		link?: string,
		products?: ProductModel[],
	) {
		this.id = id;
		this.title = title;
		this.name = name;
		this.zIndex = zIndex;
		this.shownOnNav = shownOnNav;
		this.link = link;
		this.products = products;
	}
}
