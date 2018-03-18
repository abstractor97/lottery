
class ProductInfoProxy extends ResourceProxyBase {
    public static NAME: string = 'ProductInfoProxy';

    private vo: ProductInfo = new ProductInfo();

    public constructor() {
        super(ProductInfoProxy.NAME);
    }

}