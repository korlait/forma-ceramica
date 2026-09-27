export type Product={id:string;name:string;material:string;meta:string;price:number;category:string;collection:string;image:string;description?:string};
export const products:Product[]=[
{id:"aria",name:"Тарелка ARIA",material:"Фарфор",meta:"26 см",price:2490,category:"Тарелки",collection:"ARIA",image:"/images/aria.jpg",description:"Элегантная обеденная тарелка из высококачественного фарфора. Минималистичный дизайн и природные текстуры делают её идеальной для повседневного использования и особых случаев."},
{id:"olive-cup",name:"Чашка OLIVE",material:"Керамика",meta:"350 мл",price:1290,category:"Чашки",collection:"OLIVE",image:"/images/olive-cup.jpg"},
{id:"terra-bowl",name:"Миска TERRA",material:"Керамика",meta:"600 мл",price:1490,category:"Миски",collection:"TERRA",image:"/images/terra-bowl.jpg"},
{id:"noir-teapot",name:"Чайник NOIR",material:"Керамика",meta:"1 л",price:3990,category:"Чайники",collection:"NOIR",image:"/images/noir-teapot.jpg"},
{id:"luna-vase",name:"Ваза LUNA",material:"Фарфор",meta:"24 см",price:2990,category:"Вазы",collection:"ARIA",image:"/images/luna-vase.jpg"},
{id:"terra-pitcher",name:"Кувшин TERRA",material:"Керамика",meta:"1.2 л",price:2490,category:"Кувшины",collection:"TERRA",image:"/images/terra-pitcher.jpg"},
{id:"aria-set",name:"Набор тарелок ARIA",material:"Фарфор",meta:"6 шт",price:8490,category:"Наборы",collection:"ARIA",image:"/images/aria-set.jpg"},
{id:"rose-cup",name:"Чашка с блюдцем ROSE",material:"Фарфор",meta:"200 мл",price:1990,category:"Чашки",collection:"ARIA",image:"/images/rose-cup.jpg"},
{id:"olive-vase",name:"Ваза OLIVE",material:"Керамика",meta:"28 см",price:3490,category:"Вазы",collection:"OLIVE",image:"/images/olive-vase.jpg"}
];
export const categories=["Тарелки","Чашки","Миски","Чайники","Вазы","Кувшины","Наборы","Аксессуары"];
export const collections=[
{name:"ARIA",subtitle:"Белый фарфор",image:"/images/aria.jpg"},
{name:"TERRA",subtitle:"Натуральная керамика",image:"/images/terra-bowl.jpg"},
{name:"OLIVE",subtitle:"Оливковые оттенки",image:"/images/luna-vase.jpg"},
{name:"NOIR",subtitle:"Темная коллекция",image:"/images/noir-teapot.jpg"}
];
