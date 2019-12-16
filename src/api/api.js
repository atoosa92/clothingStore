import axios from 'axios';
import mockAdapter from 'axios-mock-adapter';



const axiosInstance = axios.create({
    baseURL:'/api'
});


const mock = new mockAdapter(axiosInstance,{delayResponse:200});

mock.onGet("/api/products").reply(200, {
    message: "",
    data: {
      products: [
        {
            id: 1,
            img: './img/S4.jpg',
            title: 'Cat Tee Black T-Shirt',
            price: 10.90
        },
        {
            id: 2,
            img: './img/S2.jpg',
            title: 'Dark Thug Blue-Navy T-Shirt',
            price: 10.90
        },
        {
            id: 3,
            img: './img/S3.jpg',
            title: 'Cat Tee Black T-Shirt',
            price: 10.90
        },
        {
            id: 4,
            img: './img/S1.jpg',
            title: 'Cat Tee Black T-Shirt',
            price: 10.90
        },
        {
            id: 5,
            img: './img/S2.jpg',
            title: 'Dark Thug Blue-Navy T-Shirt',
            price: 10.90
        },
        {
            id: 6,
            img: './img/S3.jpg',
            title: 'Cat Tee Black T-Shirt',
            price: 10.90
        },
        {
            id: 7,
            img: './img/S1.jpg',
            title: 'Cat Tee Black T-Shirt',
            price: 10.90
        },
        {
            id: 2,
            img: './img/S4.jpg',
            title: 'Dark Thug Blue-Navy T-Shirt',
            price: 10.90
        }
      ],
     

    }
  });

  mock.onGet("/api/sizes").reply(200, {
    message: "",
    data: {
     
      sizes:[
          {
              id:1,
              val:'XS'
          },
          {
            id:2,
            val:'S'
        },
        {
            id:3,
            val:'M'
        },
        {
            id:4,
            val:'L'
        },
        {
            id:5,
            val:'XL'
        },
        {
            id:6,
            val:'XXL'
        }

      ]

    }
  });

  export default axiosInstance;