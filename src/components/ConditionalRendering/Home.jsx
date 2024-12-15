import Header from './Header/Header';
import ListProducts from './ListProducts/ListProducts';
import Cart from './Cart/Cart';
import { useState } from 'react';

const Home = () => {
  const [isLogedIn, setIssLogedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // const taskData = [
  //   {
  //     id: 1,
  //     title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0 ',
  //     price: 64,
  //     description:
  //       'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system',
  //     category: 'electronics',
  //     image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
  //     rating: {
  //       rate: 3.3,
  //       count: 203,
  //     },
  //   },
  //   {
  //     id: 2,
  //     title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
  //     price: 109,
  //     description:
  //       'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)',
  //     category: 'electronics',
  //     image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
  //     rating: {
  //       rate: 2.9,
  //       count: 470,
  //     },
  //   },
  //   {
  //     id: 3,
  //     title: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
  //     price: 109,
  //     description:
  //       '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
  //     category: 'electronics',
  //     image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
  //     rating: {
  //       rate: 4.8,
  //       count: 319,
  //     },
  //   },
  //   {
  //     id: 4,
  //     title: 'WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive',
  //     price: 114,
  //     description:
  //       "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
  //     category: 'electronics',
  //     image: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
  //     rating: {
  //       rate: 4.8,
  //       count: 400,
  //     },
  //   },
  //   {
  //     id: 5,
  //     title: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin',
  //     price: 599,
  //     description:
  //       '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',
  //     category: 'electronics',
  //     image: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
  //     rating: {
  //       rate: 2.9,
  //       count: 250,
  //     },
  //   },
  //   {
  //     id: 6,
  //     title:
  //       'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ',
  //     price: 999.99,
  //     description:
  //       '49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag',
  //     category: 'electronics',
  //     image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
  //     rating: {
  //       rate: 2.2,
  //       count: 140,
  //     },
  //   },
  // ];

  const taskData = [
    {
      id: 78,
      title: 'Apple MacBook Pro 14 Inch Space Grey',
      description:
        "The MacBook Pro 14 Inch in Space Grey is a powerful and sleek laptop, featuring Apple's M1 Pro chip for exceptional performance and a stunning Retina display.",
      category: 'laptops',
      price: 1999.99,
      discountPercentage: 9.25,
      rating: 3.13,
      stock: 39,
      tags: ['laptops', 'apple'],
      brand: 'Apple',
      sku: 'QDKO6NRJ',
      weight: 4,
      dimensions: {
        width: 12.38,
        height: 21.55,
        depth: 27.95,
      },
      warrantyInformation: '1 month warranty',
      shippingInformation: 'Ships in 1 week',
      availabilityStatus: 'In Stock',
      reviews: [
        {
          rating: 5,
          comment: 'Would buy again!',
          date: '2024-05-23T08:56:21.622Z',
          reviewerName: 'Hunter Gordon',
          reviewerEmail: 'hunter.gordon@x.dummyjson.com',
        },
        {
          rating: 5,
          comment: 'Would buy again!',
          date: '2024-05-23T08:56:21.622Z',
          reviewerName: 'Emma Wilson',
          reviewerEmail: 'emma.wilson@x.dummyjson.com',
        },
        {
          rating: 5,
          comment: 'Very pleased!',
          date: '2024-05-23T08:56:21.622Z',
          reviewerName: 'David Martinez',
          reviewerEmail: 'david.martinez@x.dummyjson.com',
        },
      ],
      returnPolicy: '30 days return policy',
      minimumOrderQuantity: 1,
      meta: {
        createdAt: '2024-05-23T08:56:21.622Z',
        updatedAt: '2024-05-23T08:56:21.622Z',
        barcode: '3883623063065',
        qrCode: 'https://assets.dummyjson.com/public/qr-code.png',
      },
      images: [
        'https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/1.png',
        'https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/2.png',
        'https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/3.png',
      ],
      thumbnail:
        'https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png',
    },
    {
      id: 79,
      title: 'Asus Zenbook Pro Dual Screen Laptop',
      description:
        'The Asus Zenbook Pro Dual Screen Laptop is a high-performance device with dual screens, providing productivity and versatility for creative professionals.',
      category: 'laptops',
      price: 1799.99,
      discountPercentage: 9.21,
      rating: 3.14,
      stock: 38,
      tags: ['laptops'],
      brand: 'Asus',
      sku: '4A9KFMBG',
      weight: 8,
      dimensions: {
        width: 19.67,
        height: 11.05,
        depth: 14.32,
      },
      warrantyInformation: 'No warranty',
      shippingInformation: 'Ships in 3-5 business days',
      availabilityStatus: 'In Stock',
      reviews: [
        {
          rating: 5,
          comment: 'Very satisfied!',
          date: '2024-05-23T08:56:21.622Z',
          reviewerName: 'Jack Ward',
          reviewerEmail: 'jack.ward@x.dummyjson.com',
        },
        {
          rating: 1,
          comment: 'Very disappointed!',
          date: '2024-05-23T08:56:21.622Z',
          reviewerName: 'Ava Harris',
          reviewerEmail: 'ava.harris@x.dummyjson.com',
        },
        {
          rating: 5,
          comment: 'Great value for money!',
          date: '2024-05-23T08:56:21.622Z',
          reviewerName: 'Brayden Fleming',
          reviewerEmail: 'brayden.fleming@x.dummyjson.com',
        },
      ],
      returnPolicy: 'No return policy',
      minimumOrderQuantity: 1,
      meta: {
        createdAt: '2024-05-23T08:56:21.622Z',
        updatedAt: '2024-05-23T08:56:21.622Z',
        barcode: '2899455033799',
        qrCode: 'https://assets.dummyjson.com/public/qr-code.png',
      },
      images: [
        'https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/1.png',
        'https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/2.png',
        'https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/3.png',
      ],
      thumbnail:
        'https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/thumbnail.png',
    },
    {
      id: 80,
      title: 'Huawei Matebook X Pro',
      description:
        'The Huawei Matebook X Pro is a slim and stylish laptop with a high-resolution touchscreen display, offering a premium experience for users on the go.',
      category: 'laptops',
      price: 1399.99,
      discountPercentage: 15.25,
      rating: 4.62,
      stock: 34,
      tags: ['laptops'],
      brand: 'Huawei',
      sku: 'U2CBNNB0',
      weight: 9,
      dimensions: {
        width: 22.11,
        height: 11.11,
        depth: 23.07,
      },
      warrantyInformation: '2 year warranty',
      shippingInformation: 'Ships in 2 weeks',
      availabilityStatus: 'In Stock',
      reviews: [
        {
          rating: 4,
          comment: 'Great value for money!',
          date: '2024-05-23T08:56:21.622Z',
          reviewerName: 'Samantha Howard',
          reviewerEmail: 'samantha.howard@x.dummyjson.com',
        },
        {
          rating: 2,
          comment: 'Would not buy again!',
          date: '2024-05-23T08:56:21.622Z',
          reviewerName: 'Daniel Cook',
          reviewerEmail: 'daniel.cook@x.dummyjson.com',
        },
        {
          rating: 5,
          comment: 'Very satisfied!',
          date: '2024-05-23T08:56:21.622Z',
          reviewerName: 'Brayden Fleming',
          reviewerEmail: 'brayden.fleming@x.dummyjson.com',
        },
      ],
      returnPolicy: '60 days return policy',
      minimumOrderQuantity: 1,
      meta: {
        createdAt: '2024-05-23T08:56:21.622Z',
        updatedAt: '2024-05-23T08:56:21.622Z',
        barcode: '1232723732298',
        qrCode: 'https://assets.dummyjson.com/public/qr-code.png',
      },
      images: [
        'https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/1.png',
        'https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/2.png',
        'https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/3.png',
      ],
      thumbnail:
        'https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/thumbnail.png',
    },
    {
      id: 81,
      title: 'Lenovo Yoga 920',
      description:
        'The Lenovo Yoga 920 is a 2-in-1 convertible laptop with a flexible hinge, allowing you to use it as a laptop or tablet, offering versatility and portability.',
      category: 'laptops',
      price: 1099.99,
      discountPercentage: 7.77,
      rating: 2.98,
      stock: 71,
      tags: ['laptops'],
      brand: 'Lenovo',
      sku: 'MST9WZQY',
      weight: 7,
      dimensions: {
        width: 11.02,
        height: 14.45,
        depth: 24.09,
      },
      warrantyInformation: 'Lifetime warranty',
      shippingInformation: 'Ships in 1 week',
      availabilityStatus: 'In Stock',
      reviews: [
        {
          rating: 4,
          comment: 'Very happy with my purchase!',
          date: '2024-05-23T08:56:21.623Z',
          reviewerName: 'Paisley Bell',
          reviewerEmail: 'paisley.bell@x.dummyjson.com',
        },
        {
          rating: 4,
          comment: 'Very pleased!',
          date: '2024-05-23T08:56:21.623Z',
          reviewerName: 'Lincoln Kelly',
          reviewerEmail: 'lincoln.kelly@x.dummyjson.com',
        },
        {
          rating: 4,
          comment: 'Great product!',
          date: '2024-05-23T08:56:21.623Z',
          reviewerName: 'Luna Russell',
          reviewerEmail: 'luna.russell@x.dummyjson.com',
        },
      ],
      returnPolicy: 'No return policy',
      minimumOrderQuantity: 1,
      meta: {
        createdAt: '2024-05-23T08:56:21.623Z',
        updatedAt: '2024-05-23T08:56:21.623Z',
        barcode: '9590995785298',
        qrCode: 'https://assets.dummyjson.com/public/qr-code.png',
      },
      images: [
        'https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/1.png',
        'https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/2.png',
        'https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/3.png',
      ],
      thumbnail:
        'https://cdn.dummyjson.com/products/images/laptops/Lenovo%20Yoga%20920/thumbnail.png',
    },
    {
      id: 82,
      title: 'New DELL XPS 13 9300 Laptop',
      description:
        'The New DELL XPS 13 9300 Laptop is a compact and powerful device, featuring a virtually borderless InfinityEdge display and high-end performance for various tasks.',
      category: 'laptops',
      price: 1499.99,
      discountPercentage: 11.7,
      rating: 2.98,
      stock: 18,
      tags: ['laptops'],
      brand: 'Dell',
      sku: 'XBJJ446X',
      weight: 10,
      dimensions: {
        width: 12.09,
        height: 6.43,
        depth: 15.69,
      },
      warrantyInformation: 'Lifetime warranty',
      shippingInformation: 'Ships overnight',
      availabilityStatus: 'In Stock',
      reviews: [
        {
          rating: 3,
          comment: 'Very disappointed!',
          date: '2024-05-23T08:56:21.623Z',
          reviewerName: 'Julian Newton',
          reviewerEmail: 'julian.newton@x.dummyjson.com',
        },
        {
          rating: 4,
          comment: 'Very pleased!',
          date: '2024-05-23T08:56:21.623Z',
          reviewerName: 'Grace Perry',
          reviewerEmail: 'grace.perry@x.dummyjson.com',
        },
        {
          rating: 5,
          comment: 'Great product!',
          date: '2024-05-23T08:56:21.623Z',
          reviewerName: 'Daniel Taylor',
          reviewerEmail: 'daniel.taylor@x.dummyjson.com',
        },
      ],
      returnPolicy: '7 days return policy',
      minimumOrderQuantity: 1,
      meta: {
        createdAt: '2024-05-23T08:56:21.623Z',
        updatedAt: '2024-05-23T08:56:21.623Z',
        barcode: '0358629687929',
        qrCode: 'https://assets.dummyjson.com/public/qr-code.png',
      },
      images: [
        'https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/1.png',
        'https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/2.png',
        'https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/3.png',
      ],
      thumbnail:
        'https://cdn.dummyjson.com/products/images/laptops/New%20DELL%20XPS%2013%209300%20Laptop/thumbnail.png',
    },
  ];

  return (
    <div>
      <Header
        data={{ isLogedIn, setIssLogedIn }}
        cartItemsCount={cartItems.length}
        onCartClick={() => setShowCart(!showCart)}
      />
      {showCart ? (
        <Cart cartItems={cartItems} />
      ) : (
        <ListProducts products={taskData} isLogedIn={isLogedIn} onAddToCart={handleAddToCart} />
      )}
    </div>
  );
};

export default Home;
