import React from 'react';
import FeedBackInfo from '../FeedBackInfo/FeedBackInfo';
import person1 from '../../../images/customer-1.png'
import person2 from '../../../images/customer-2.png'
import person3 from '../../../images/customer-3.png'

const blogData = [
    {
        img:person1,
        name:"Nash Patrik",
        work:"CEO,Manpol",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur animi maiores iste voluptatibus quae voluptatum reiciendis? Fugiat nemo doloremque, nostrum ipsam quaerat tempora, placeat ea itaque iusto delectus fuga facilis"

    },
    {
        img:person2,
        name:"Miriam Barron",
        work:"CEO,Manpol",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur animi maiores iste voluptatibus quae voluptatum reiciendis? Fugiat nemo doloremque, nostrum ipsam quaerat tempora, placeat ea itaque iusto delectus fuga facilis"

    },
    {
        img:person3,
        name:"Bria Malone",
        work:"CEO,Manpol",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur animi maiores iste voluptatibus quae voluptatum reiciendis? Fugiat nemo doloremque, nostrum ipsam quaerat tempora, placeat ea itaque iusto delectus fuga facilis"

    }
]

 const FeedBack = () => {
    return (
        <section className="blogs my-5">
        <div className="container">
            <div className="section-header text-center">
                 
                 <h3>Clients <small style={{TextColor:"green"}}>FeedBack</small></h3>
            </div>
            <div className="card-deck mt-5">
                 {
                     blogData.map(blog => <FeedBackInfo blog={blog} key={blog.title}/>)
                 }
            </div>
        </div>
    </section>
    );
};

export default FeedBack;